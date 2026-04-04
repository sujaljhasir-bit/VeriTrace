from tavily import TavilyClient
from dotenv import load_dotenv
import os
import streamlit as st
import pandas as pd
import plotly.express as px

# Load .env
load_dotenv(dotenv_path=".env", override=True)

# Tavily client
tavily = TavilyClient(api_key=os.getenv("TAVILY_API_KEY"))


def search_claim(query):
    try:
        return tavily.search(
            query=query,
            search_depth="advanced",
            max_results=5
        )
    except Exception as e:
        st.error(f"Tavily search failed: {e}")
        return {"results": []}


def extract_main_keyword(claim):
    splitters = [
        " who ", " that ", " which ", " is ", " has ",
        " was ", " were ", " won ", " scored ", " can "
    ]

    cl = claim.lower()

    for s in splitters:
        if s in cl:
            return claim[:cl.index(s)].strip()

    return claim.strip()


# =========================
# MAIN APP UI
# =========================
st.set_page_config(page_title="VeriTrace", page_icon="🔍")
st.title("🔍 VeriTrace – AI Fake Crime Verifier")
st.caption("Powered by Tavily AI Search")

claim = st.text_input("Enter a fake crime claim to verify")

if st.button("Verify"):
    if not claim.strip():
        st.error("Please enter a claim.")
    else:
        keyword = extract_main_keyword(claim)

        st.subheader("🌐 Web Evidence")
        tavily_results = search_claim(claim)

        if tavily_results["results"]:
            for item in tavily_results["results"]:
                st.write("###", item["title"])
                st.write(item["url"])
                st.write(item["content"])
                st.write("---")

            # simple verdict logic
            st.subheader("🤖 AI Verdict")
            st.success("Potentially verifiable claim — review sources above.")
        else:
            st.warning("No strong evidence found.")
st.divider()
st.header("🇮🇳 India Crime Hotspots")

crime_map_data = pd.DataFrame({
    "city": [
        "Mumbai", "Delhi", "Bengaluru", "Lucknow", "Kolkata", "Chennai",
        "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Patna", "Bhopal",
        "Kanpur", "Nagpur", "Surat", "Indore", "Agra", "Varanasi",
        "Meerut", "Visakhapatnam", "Coimbatore", "Guwahati", "Ranchi", "Amritsar"
    ],
    "lat": [
        19.0760, 28.7041, 12.9716, 26.8467, 22.5726, 13.0827,
        17.3850, 18.5204, 23.0225, 26.9124, 25.5941, 23.2599,
        26.4499, 21.1458, 21.1702, 22.7196, 27.1767, 25.3176,
        28.9845, 17.6868, 11.0168, 26.1445, 23.3441, 31.6340
    ],
    "lon": [
        72.8777, 77.1025, 77.5946, 80.9462, 88.3639, 80.2707,
        78.4867, 73.8567, 72.5714, 75.7873, 85.1376, 77.4126,
        80.3319, 79.0882, 72.8311, 75.8577, 78.0081, 82.9739,
        77.7064, 83.2185, 76.9558, 91.7362, 85.3096, 74.8723
    ],
    "fake_reports": [
        230, 180, 120, 210, 95, 130,
        160, 110, 140, 175, 200, 90,
        195, 85, 100, 115, 145, 135,
        165, 75, 60, 80, 70, 155
    ],
    "crime_type": [
        "Cyber Fraud", "Identity Theft", "Cyber Fraud", "Extortion", "Robbery", "Cyber Fraud",
        "Cyber Fraud", "Financial Fraud", "Financial Fraud", "Extortion", "Extortion", "Identity Theft",
        "Extortion", "Robbery", "Financial Fraud", "Cyber Fraud", "Extortion", "Identity Theft",
        "Extortion", "Robbery", "Robbery", "Identity Theft", "Robbery", "Extortion"
    ]
})

# Color map for crime types
color_map = {
    "Cyber Fraud": "#FF4B4B",
    "Identity Theft": "#FF9900",
    "Extortion": "#9B59B6",
    "Financial Fraud": "#3498DB",
    "Robbery": "#2ECC71"
}

fig = px.scatter_mapbox(
    crime_map_data,
    lat="lat",
    lon="lon",
    size="fake_reports",
    color="crime_type",
    color_discrete_map=color_map,
    hover_name="city",
    hover_data={"fake_reports": True, "crime_type": True, "lat": False, "lon": False},
    size_max=40,
    zoom=4.2,
    center={"lat": 22.5, "lon": 82.5},
    title="India Fake Crime Report Hotspots",
    labels={"fake_reports": "Fake Reports", "crime_type": "Crime Type"}
)

fig.update_layout(
    mapbox_style="carto-darkmatter",
    height=600,
    margin={"r": 0, "t": 40, "l": 0, "b": 0},
    title_font=dict(size=18, color="white"),
    paper_bgcolor="#0E1117",
    font_color="white",
    legend=dict(
        bgcolor="rgba(14,17,23,0.8)",
        bordercolor="rgba(255,255,255,0.2)",
        borderwidth=1,
        font=dict(color="white")
    )
)

fig.update_traces(
    marker=dict(opacity=0.8),
    selector=dict(mode='markers')
)

st.plotly_chart(fig, use_container_width=True)

# Summary stats below map
col1, col2, col3 = st.columns(3)
top_city = crime_map_data.loc[crime_map_data["fake_reports"].idxmax(), "city"]
total_reports = crime_map_data["fake_reports"].sum()
top_crime = crime_map_data["crime_type"].value_counts().idxmax()

with col1:
    st.metric("🏙️ Highest Hotspot", top_city)
with col2:
    st.metric("📊 Total Fake Reports", f"{total_reports:,}")
with col3:
    st.metric("⚠️ Most Common Type", top_crime)
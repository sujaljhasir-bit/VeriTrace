from tavily import TavilyClient
from dotenv import load_dotenv
import os
import streamlit as st

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
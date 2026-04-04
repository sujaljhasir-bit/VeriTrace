# VeriTrace Frontend

A modern, production-ready React frontend for the VeriTrace AI-powered claim verification platform.

## 🎨 Tech Stack

- **React 18** - UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Recharts** - Beautiful data visualizations
- **Lucide React** - Icon library
- **Axios** - HTTP client

## 🚀 Features

### Landing Page

- Hero section with animated backgrounds
- Features showcase with glassmorphism cards
- How it works step-by-step guide
- Statistics and testimonials
- CTA sections

### Dashboard

- Claim verification input with validation
- Real-time loading animations
- Evidence cards with credibility scores
- Confidence gauge visualization
- Recent searches history
- Export functionality

### Chatbot

- Modern chat interface with avatar
- Chat history sidebar
- Suggested prompts
- Typing animations
- Message copying
- Responsive mobile layout

### Analytics

- Verdict distribution pie chart
- Category distribution bar chart
- Weekly trend line chart
- Key statistics cards
- Performance metrics

### Profile & Settings

- User information card
- Notification settings
- Display preferences
- Saved searches
- Account management

## 📦 Installation

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Create environment file:**

   ```bash
   cp .env.example .env
   ```

3. **Configure API endpoints** (edit `.env`):
   ```
   VITE_VERIFICATION_API=http://localhost:8000
   VITE_CHATBOT_API=http://localhost:5001
   ```

## 🏃 Running the Project

### Development

```bash
npm run dev
```

Starts the dev server at `http://localhost:3000`

### Build

```bash
npm run build
```

Creates optimized production build in `dist/`

### Preview

```bash
npm run preview
```

Preview production build locally

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Navbar, Footer, Theme Toggle, Toast
│   ├── cards/           # Feature, Evidence, Stat, Testimonial Cards
│   ├── forms/           # Claim Input, Settings Form
│   ├── loaders/         # Verification Loader, Skeleton, Pulse
│   ├── charts/          # Verdict, Category, Trend, Gauge Charts
│   └── chatbot/         # Chat Bubble, Input, History, Prompts
├── pages/               # Landing, Dashboard, Chatbot, Analytics, Profile
├── hooks/               # useTheme, useToast, useFetch, useLocalStorage
├── services/            # API clients and service functions
├── utils/               # Constants, formatters, validators, mockData
├── context/             # Theme and Auth contexts
├── styles/              # Global styles, animations, glassmorphism
└── App.jsx, main.jsx    # Entry points
```

## 🎯 API Integration

### Verification API

```javascript
// POST /verify
{
  "claim": "string"
}

// Response
{
  "id": "string",
  "verdict": "real|fake|misleading",
  "confidence": number,
  "evidence": [...],
  "reasoning": "string"
}
```

### Chatbot API

```javascript
// POST /chat
{
  "message": "string"
}

// Response
{
  "reply": "string"
}
```

## 🎨 Design System

### Colors

- **Primary Gradient**: Cyan (#00D9FF) to Purple (#A020F0)
- **Background**: #020617 (Dark Navy)
- **Verdict Colors**:
  - Real: #10B981 (Green)
  - Fake: #EF4444 (Red)
  - Misleading: #F59E0B (Orange)

### Typography

- **Headers**: Inter Bold (700-800)
- **Body**: Inter Regular (400-500)
- **Code**: JetBrains Mono

### Effects

- Glassmorphism with backdrop blur
- Neon glows on interactive elements
- Smooth hover and transition effects
- Staggered animations
- Micro-interactions and feedback

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🔐 Environment Variables

| Variable                | Description                  | Example                       |
| ----------------------- | ---------------------------- | ----------------------------- |
| `VITE_VERIFICATION_API` | Backend verification API URL | `http://localhost:8000`       |
| `VITE_CHATBOT_API`      | Chatbot API URL              | `http://localhost:5001`       |
| `VITE_MODE`             | Environment mode             | `development` or `production` |

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## 📝 License

MIT License - see LICENSE file for details

## 🆘 Troubleshooting

### Issue: API calls failing

**Solution**: Ensure backend servers are running and environment variables point to correct URLs.

### Issue: Styling not applying

**Solution**: Make sure Tailwind CSS is properly configured. Run `npm install` again.

### Issue: Animations stuttering

**Solution**: Check browser performance. Some animations may smooth with GPU acceleration enabled.

## 📞 Support

For issues and questions:

- Open an issue on GitHub
- Contact: support@veritrace.com

---

**Made with ❤️ for VeriTrace**

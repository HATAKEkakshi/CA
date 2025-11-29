# Virtual CA - Agentic AI Platform

A modern web application that provides AI-powered chartered accountancy services through specialized agentic AI agents. Built with React, TypeScript, and powered by Google's Gemini AI.

## 🤖 Agentic Framework

This platform utilizes **Google Gemini AI** as the core agentic framework, implementing:
- **Multi-Agent Architecture**: Specialized AI agents for different CA tasks
- **Conversational AI**: Natural language processing for user interactions
- **Task-Specific Agents**: Dedicated agents for company registration, tax compliance, financial advisory, and audit support

## ✨ Features

- **Interactive Landing Page**: Modern design with 3D robot visualization
- **Specialized AI Agents**: 
  - Company Registration Agent
  - Tax Compliance Agent  
  - Financial Advisory Agent
  - Audit Support Agent
- **Real-time Chat Interface**: Seamless communication with AI agents
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Built with shadcn/ui and Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd virtual-ca
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Add your Gemini API key to `.env.local`:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **AI Framework**: Google Gemini AI
- **Animations**: Framer Motion, GSAP
- **Build Tool**: Vite
- **3D Visualization**: Spline

## 📁 Project Structure

```
virtual-ca/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── LandingPage.tsx  # Main landing page
│   ├── AgentSelector.tsx # Agent selection interface
│   └── ChatWindow.tsx   # Chat interface
├── services/            # API services
│   └── geminiService.ts # Gemini AI integration
├── types.ts            # TypeScript definitions
├── constants.tsx       # Agent configurations
└── globals.css         # Global styles
```

## 🤖 AI Agents

### Company Registration Agent
Handles business incorporation, legal documentation, and regulatory compliance.

### Tax Compliance Agent  
Manages GST filing, income tax preparation, and TDS compliance.

### Financial Advisory Agent
Provides business guidance, financial planning, and investment advice.

### Audit Support Agent
Assists with statutory audits, internal audits, and compliance reviews.

## 🔧 Configuration

### Adding New Agents
1. Define agent in `constants.tsx`
2. Add agent icon in `components/icons/AgentIcons.tsx`
3. Configure system prompts and example queries

### Customizing UI
- Modify theme in `tailwind.config.js`
- Update global styles in `globals.css`
- Customize components in `components/` directory

## 📝 License

This project is licensed under the MIT License.

## ⚖️ Legal Disclaimer

All AI-generated advice and services require review by licensed Chartered Accountants for legal compliance. This platform serves as an AI assistant and does not replace professional CA services.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.
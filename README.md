# 🚗 PuntoCare - Fiat Punto Maintenance & DIY Guides

A comprehensive car care website for the **Fiat Punto 1.3 Multijet Diesel** with an AI-powered troubleshooting assistant.

## ✨ Features

### AI Chat Assistant
- **Floating chat button** in bottom-right corner
- **Ollama-powered** local AI with Fiat Punto knowledge base
- Helps diagnose problems and answer maintenance questions

### Comprehensive Guides
- **Homepage** with hero section, specs overview, and maintenance categories
- **8 Maintenance Guides**: Oil change, Coolant, Battery, Brakes, Lights, Filters, Tires, Wipers
- **Specifications Page** with complete technical data
- **Troubleshooting Page** with warning light explanations and common problems

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Custom CSS with dark theme and Fiat red (#C41E3A)
- **AI**: Ollama with llama3.2:3b model
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- [Ollama](https://ollama.ai/) installed locally

### Installation

```bash
# Clone the repository
git clone https://github.com/rishit2904/punto-care.git
cd punto-care

# Install dependencies
npm install

# Copy environment file
cp .env.example .env
```

### Running Locally

```bash
# Terminal 1: Start Ollama with the required model
ollama run llama3.2:3b

# Terminal 2: Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
punto-care/
├── app/
│   ├── api/chat/          # AI chat API endpoint
│   ├── maintenance/       # DIY maintenance guides
│   ├── specifications/    # Technical specs page
│   ├── troubleshooting/   # Warning lights & problems
│   ├── globals.css        # Design system & styles
│   ├── layout.tsx         # Root layout with header/footer
│   └── page.tsx           # Homepage
├── components/
│   ├── ChatBot.tsx        # AI chat widget
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
└── .env.example           # Environment variables template
```

## 🔧 Environment Variables

```env
OLLAMA_URL=http://localhost:11434
OLLAMA_MODEL=llama3.2:3b
```

## 📝 License

MIT License - feel free to use this project for your own car!

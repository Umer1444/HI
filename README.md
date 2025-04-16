# AI Dashboard

A modern AI dashboard built with Next.js, React, and Tailwind CSS. This dashboard allows you to interact with multiple AI models, including chat, code generation, research, and more. It integrates with the Groq API for advanced language model capabilities.

## Features
- Chat with advanced AI models (HI-4.0, HI-Vision, HI-Code, HI-Research)
- Code generation, image prompt, and research tools
- Groq API integration for Llama-4-Scout model
- Modern UI with Tailwind CSS and Shadcn UI components
- Model selection and enhanced capabilities

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm or yarn

### Installation
1. Clone this repository:
   ```sh
   git clone <your-repo-url>
   cd hi
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Integration
- The dashboard uses the Groq API for chat and text completions.
- The API key is set in the code for demo purposes. For production, use environment variables or a secure method.

## Project Structure
- `app/` - Next.js app directory (pages, API routes, dashboard)
- `components/` - UI and feature components
- `lib/` - Utility and model integration functions
- `public/` - Static assets
- `styles/` - Global styles

## Customization
- Update the Groq API key and model in `app/dashboard/page.tsx` as needed.
- Add or modify models and features in the dashboard UI.

## License
This project is for educational and demo purposes. Please add your own license if you use it for production.

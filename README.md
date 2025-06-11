# Focus Buddy 🧠

**Focus Buddy** is an AI-powered productivity web application built with React, Express, and TypeScript. It helps users stay focused, track goals, and receive smart suggestions through a beautiful, animated UI experience.

## ✨ Features

- 🍅 **Smart Focus Timer**: Pomodoro-style timer with AI insights
- 🎯 **Goal Tracker**: Visual progress tracking with animated celebrations
- 🤖 **AI Assistant**: Personalized productivity tips powered by OpenAI
- 🌙 **Dark Mode**: Beautiful light/dark theme toggle
- 📱 **Responsive Design**: Works perfectly on all devices
- 🎨 **Unique Animations**: Cosmic loading screen and smooth transitions
- 💾 **Persistent Data**: All data saved automatically

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, Node.js
- **Database**: In-memory storage (easily extensible to PostgreSQL)
- **AI**: OpenAI GPT-4o integration
- **Styling**: Custom animations, gradient themes, professional typography
- **State Management**: TanStack Query, React hooks

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/focus-buddy.git
   cd focus-buddy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000`

## 🎮 Usage

### Focus Timer
- Click "Start Focusing" to begin a Pomodoro session
- Customize timer durations in preferences
- Get automatic break reminders
- Track daily focus statistics

### Goal Tracking
- Create goals with categories and priorities
- Update progress with animated feedback
- Celebrate achievements with visual rewards
- Monitor completion statistics

### AI Assistant
- Generate personalized productivity tips
- Chat with your AI companion
- Save helpful suggestions
- Rate suggestions for better recommendations

## 🔧 Configuration

### Environment Variables
- `OPENAI_API_KEY`: Required for AI features
- `NODE_ENV`: Set to 'production' for deployment

### Customization
- Modify colors in `client/src/index.css`
- Adjust timer defaults in `client/src/hooks/use-timer.ts`
- Update AI prompts in `server/routes.ts`

## 📁 Project Structure

```
focus-buddy/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and configurations
│   │   ├── pages/          # Page components
│   │   └── index.css       # Global styles and animations
├── server/                 # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data management
│   └── vite.ts            # Vite development server
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schemas and types
└── package.json           # Dependencies and scripts
```

## 🚀 Deployment

### Replit (Recommended)
1. Import project to Replit
2. Add `OPENAI_API_KEY` to Secrets
3. Click "Run" to start the application

### Vercel/Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variables

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Rishav**
- Email: rishav@example.com
- GitHub: [@rishav](https://github.com/rishav)

## 🙏 Acknowledgments

- OpenAI for powerful AI capabilities
- React and Vite teams for excellent developer experience
- Tailwind CSS for beautiful styling system
- All contributors and users of Focus Buddy

---

Made with ❤️ by Rishav for productive humans everywhere.
# Simplified Chat Application (Frontend + Backend)

A responsive, single-page chat application mimicking ChatGPT, built with React, JavaScript, TailwindCSS, and Node.js/Express. Features session management, dark/light theme toggle, and structured tabular responses.

## Tech Stack
- **Frontend**: React (JavaScript), TailwindCSS, React Router
- **Backend**: Node.js, Express.js
- **Tools**: Git, GitHub, VS Code

## Features
- **Landing Page**: "New Chat" screen to start conversations.
- **Left Side Panel**: Collapsible sidebar with session history, "New Chat" option, and user info.
- **Chat Interface**: Displays answers with tabular data and descriptions. Each answer has like/dislike feedback.
- **Session Management**: Sessions linked to URL, history viewable in sidebar.
- **Dark/Light Theme**: Toggle in top bar, persists across sessions.
- **Responsive Design**: Works on mobile and desktop.
- **Mock Backend**: No database; serves static JSON data via APIs.

## Project Structure
```
/chat-app-project
├── /backend
│   ├── server.js              # Express server and API routes
│   ├── mockData.js            # Mock JSON data for sessions and responses
│   ├── package.json
│   └── README.md              # Backend-specific documentation
├── /frontend
│   ├── /src
│   │   ├── /components
│   │   │   ├── Sidebar.js     # Collapsible session panel
│   │   │   ├── ThemeToggle.js # Light/Dark mode toggle
│   │   │   ├── ChatInput.js   # User input component
│   │   │   ├── TableResponse.js # Renders tabular data
│   │   │   ├── AnswerFeedback.js # Like/Dislike buttons
│   │   │   └── ChatWindow.js  # Main chat interface
│   │   ├── App.js             # Main app with routing and theme logic
│   │   ├── index.js           # App entry point
│   │   └── index.css          # Tailwind imports
│   ├── tailwind.config.js
│   ├── package.json
│   └── README.md              # Frontend-specific documentation
└── README.md                  # Project overview
```

## Prerequisites
- Node.js (LTS version) installed.
- npm or Yarn for package management.

## Installation and Running Locally

### Backend
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```
   Server runs on `http://localhost:4000`.

### Frontend
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
   App runs on `http://localhost:3000`.

## API Endpoints (Backend)
- `GET /api/sessions`: Returns list of sessions (id, title, createdAt).
- `GET /api/new-chat`: Returns new session ID and title.
- `GET /api/session/:id`: Returns full conversation history for a session.
- `POST /api/chat/:id`: Accepts `{ question: "..." }`, returns mock assistant response with table and text.

## Deployment
1. Push code to a GitHub repository.
2. For backend: Deploy to services like Heroku, Vercel, or Render.
3. For frontend: Build with `npm run build` and deploy to Netlify, Vercel, or GitHub Pages.
4. Update API URLs in frontend to point to deployed backend.

## GitHub Repository
[Link to public repository](https://github.com/LEKKALAGANESH/simplified-ChatGPT-style-application.git)

## Contributing
1. Fork the repository.
2. Create a feature branch.
3. Commit changes.
4. Push and create a pull request.

## License
ISC License.

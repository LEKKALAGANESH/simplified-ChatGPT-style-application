# Backend - Chat Application

## Overview
The backend is a simple Node.js/Express server that serves mock JSON data for the chat application. It provides REST APIs for session management and chat interactions without requiring a database.

## Tech Stack
- Node.js
- Express.js
- CORS
- UUID

## Installation
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```

## Running
Start the server:
```
npm start
```
Server runs on `http://localhost:4000`.

## API Endpoints
- `GET /api/sessions`: Returns list of sessions (id, title, createdAt).
- `GET /api/new-chat`: Returns new session ID and title.
- `GET /api/session/:id`: Returns full conversation history for a session.
- `POST /api/chat/:id`: Accepts `{ question: "..." }`, returns mock assistant response with table and text.

## Mock Data
Data is stored in `mockData.js` as in-memory objects. Includes sample sessions and responses.

## Deployment
Deploy to Heroku, Vercel, or Render. Ensure environment variables if needed.

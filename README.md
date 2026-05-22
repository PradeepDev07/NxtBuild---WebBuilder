# NxtBuild - AI Web App Builder

NxtBuild is an AI-powered web app builder that helps users describe an app in plain language and generate a working web app project with chat-driven iteration.

## Overview

The app is split into two parts:

- `client/` - React + Vite frontend
- `server/` - Node.js + Express backend with MongoDB and Gemini-powered generation

## MVP

The current MVP focuses on:

- User authentication
- Project dashboard
- AI chat-based app generation
- Code preview and editor
- Project saving and updates
- Downloadable generated output

## Current Features

- Login and registration flow
- Protected dashboard and builder routes
- Chat interface for describing what to build
- AI code generation pipeline
- Live preview and code editor panels
- Project persistence through the backend API

## Planned Features

These are the next features to add after the MVP:

1. Explainable generation
   - Show why the AI made specific code choices
   - Break down the generated structure and logic in simple language

2. Fix My UI
   - Let users paste or describe a UI issue
   - Generate targeted improvements to layout, spacing, colors, and responsiveness

3. Multi-step AI pipeline
   - Use staged generation instead of one-shot output
   - Add planning, drafting, validation, and refinement steps

4. Teach mode
   - Explain code as it is generated
   - Help users learn how the app is structured and how changes affect the result

## Tech Stack

- Frontend: React, Vite, React Router, Axios
- Backend: Node.js, Express, MongoDB, JWT
- AI: Gemini

## Getting Started

### 1. Install dependencies

```bash
cd server
npm install

cd ../client
npm install
```

### 2. Configure environment variables

Create a `.env` file in `server/` with the required values for MongoDB, JWT, Gemini, and client origin.

### 3. Run the backend

```bash
cd server
npm run dev
```

### 4. Run the frontend

```bash
cd client
npm run dev
```

## Project Structure

```text
client/
  src/
    components/
    context/
    pages/
    services/
    styles/
server/
  src/
    controllers/
    middleware/
    models/
    routes/
    services/
    utils/
```

## Notes

- The client API currently points to `http://localhost:5001/api`.
- The server defaults to port `5001` to avoid conflicts with other local services.

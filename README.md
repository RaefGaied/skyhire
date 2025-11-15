# SkyHire – Full‑stack Documentation

SkyHire is an aviation career platform built with a React frontend and a microservices Node/Express backend, proxied by an API Gateway. It includes chat, notifications, jobs, interview simulator, and an Aeronautics chatbot (FastAPI + Gemini).

## Overview
- Frontend: React + TypeScript, Tailwind utilities, socket.io-client
- Backend: Microservices (Node/Express + MongoDB), JWT auth via gateway
- Realtime: Socket.IO for chat
- Chatbot: FastAPI service with Gemini RAG, proxied by gateway

## Monorepo Structure
- `/src`: React app (pages, services, components)
- `/backend`: API Gateway and services
  - `api-gateway`
  - `auth-service`
  - `user-service`
  - `cv-service`
  - `interview-service`
  - `job-service`
  - `chat-service`
  - `notifications-service`
- `/Aeronautics_Chatbot--main`: FastAPI chatbot service

## Environment Variables
Frontend (.env):
- `REACT_APP_API_URL=http://localhost:5000`

API Gateway (.env):
- `PORT=5000`
- `CLIENT_URL=http://localhost:3000`
- `AUTH_SERVICE_URL=http://localhost:5001`
- `USER_SERVICE_URL=http://localhost:5002`
- `CV_SERVICE_URL=http://localhost:5003`
- `INTERVIEW_SERVICE_URL=http://localhost:5004`
- `JOBS_SERVICE_URL=http://localhost:5005`
- `CHAT_SERVICE_URL=http://localhost:5006`
- `NOTIFICATIONS_SERVICE_URL=http://localhost:5007`
- `AERONAUTICS_SERVICE_URL=http://localhost:8000`

Other services follow standard `PORT`, MongoDB, and JWT settings (see each service .env example).

## Start Everything (One Command)
From `backend/`:
1) Install tools: `npm i` (installs concurrently)
2) Install deps in each service: `npm run install:all`
3) Dev mode (nodemon): `npm run dev:all`
4) Prod mode: `npm run start:all`

Frontend:
- From repo root: `npm start` (CRA dev server at http://localhost:3000)

Chatbot (FastAPI):
- From `Aeronautics_Chatbot--main/`:
  - Create `.env` with `GEMINI_API_KEY=...`
  - `python -m venv venv`
  - `./venv/Scripts/python -m pip install -r requirements.txt`
  - `./venv/Scripts/python -m uvicorn main:app --reload --host 127.0.0.1 --port 8000`

## API Gateway
Routes proxied under `/api/*`, including:
- `/api/auth`, `/api/users`, `/api/cv`, `/api/interview`, `/api/jobs`, `/api/chat`, `/api/notifications`
- `/api/aero/*` → rewritten to the chatbot (e.g. `/api/aero/chat` → `http://localhost:8000/chat`)
- WebSockets: `/socket.io/chat` and `/socket.io/interview` forwarded to their services

## Key Features
- Messaging with socket.io, unread counts, and notifications
- Jobs board with apply/track, recruiter app management
- Notifications center with read, bulk read, delete, and preferences
- Interview simulator: camera preview and A/V controls
- Career Guide chatbot with sources/brief toggles

## Notifications & Preferences
- User preferences under `preferences.notifications`: `{ email, push, message, connection, job }`
- Backends honor preferences before creating notifications:
  - chat-service → message
  - user-service → connection
  - job-service → job (new application, status update)
- Frontend Notifications page:
  - Lists notifications, unread badge in header, mark read/all, delete
  - Modal to update preferences (saved to user-service profile)

## Chat
- Conversations are reused (no duplicates) by matching exact participants set
- Real-time new-message via Socket.IO
- Frontend dedupes contacts by peerId and loads existing conversation

## Interview Simulator
- Uses `getUserMedia` to capture camera/mic
- Self-preview attaches stream after element mount, with cleanup on stop

## Aeronautics Chatbot (Career Guide)
- Endpoint: `/api/aero/chat` (gateway → FastAPI)
- Request: `{ question, language?: 'fr'|'en', include_sources?: boolean, brief?: boolean }`
- When Gemini quota errors occur (429), service returns a local fallback summary built from `cabin_docs.json`, honoring toggles

## Development Notes
- Rotate API keys; never commit `.env` files (already gitignored)
- If chatbot returns fallback text, check Gemini quota or model name (`GEMINI_MODEL_NAME`)
- Health check: `GET /api/health` (gateway) and `GET /api/aero/health` (chatbot)

## Build & Deploy
- Frontend: `npm run build`
- Backend: deploy services independently or via containers
- Gateway provides a single entrypoint for the frontend


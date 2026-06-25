# OctoFit Tracker

A modern multi-tier application for fitness tracking built with React 19, Node.js/Express, and MongoDB.

## Architecture

The application is organized as a multi-tier system:

- **Frontend**: React 19 + Vite (Port 5173)
- **Backend**: Node.js + Express + TypeScript (Port 8000)
- **Database**: MongoDB (Port 27017)

## Project Structure

```
octofit-tracker/
├── frontend/           # React 19 application with Vite
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── ...
├── backend/            # Node.js/Express backend
│   ├── src/
│   │   └── server.ts   # Main Express server
│   ├── tsconfig.json   # TypeScript configuration
│   ├── package.json
│   └── ...
└── .env.example        # Configuration template
```

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- MongoDB running locally on port 27017

### Installation

1. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Frontend will be available at `http://localhost:5173`

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   Backend will be available at `http://localhost:8000`

### MongoDB

Ensure MongoDB is running on port 27017:
```bash
mongod --port 27017
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start development server with ts-node
- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Run compiled JavaScript server

## API Endpoints

- `GET /` - API root
- `GET /health` - Health check

## Dependencies

### Frontend
- React 19
- Vite
- TypeScript

### Backend
- Express
- Mongoose (MongoDB ODM)
- TypeScript

## Configuration

See `.env.example` for configuration options.

## Notes

- Frontend runs on port 5173
- Backend runs on port 8000
- MongoDB connection on port 27017
- Database name: `octofit-tracker`

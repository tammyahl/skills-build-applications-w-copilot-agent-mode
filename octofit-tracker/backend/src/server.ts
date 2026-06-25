import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import usersRouter from './routes/users';
import teamsRouter from './routes/teams';
import activitiesRouter from './routes/activities';
import leaderboardRouter from './routes/leaderboard';
import workoutsRouter from './routes/workouts';
// Import models to register schemas
import './models/User';
import './models/Team';
import './models/Activity';
import './models/Leaderboard';
import './models/Workout';

const app: Express = express();
const PORT: number = 8000;
const MONGODB_URI: string = 'mongodb://localhost:27017/octofit_db';

// Determine API URL for Codespaces support
const getApiUrl = (): string => {
  if (process.env.CODESPACE_NAME) {
    return `https://${process.env.CODESPACE_NAME}-8000.app.github.dev`;
  }
  return `http://localhost:${PORT}`;
};

const API_URL = getApiUrl();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error: Error) => {
    console.error('MongoDB connection error:', error);
  });

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'OctoFit Tracker API',
    apiUrl: API_URL,
    version: '1.0.0'
  });
});

app.get('/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    apiUrl: API_URL
  });
});

// API Routes
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: 'Not Found',
    path: req.path,
    status: 'error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`OctoFit Tracker Backend running on ${API_URL}`);
  console.log(`MongoDB connecting to ${MONGODB_URI}`);
  console.log(`Health check available at ${API_URL}/health`);
  console.log('API routes:');
  console.log(`  - GET ${API_URL}/api/users`);
  console.log(`  - GET ${API_URL}/api/teams`);
  console.log(`  - GET ${API_URL}/api/activities`);
  console.log(`  - GET ${API_URL}/api/leaderboard`);
  console.log(`  - GET ${API_URL}/api/workouts`);
});

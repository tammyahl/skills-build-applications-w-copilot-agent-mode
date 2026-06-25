import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';

const app: Express = express();
const PORT: number = 8000;
const MONGODB_URI: string = 'mongodb://localhost:27017/octofit-tracker';

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
  res.json({ message: 'OctoFit Tracker API' });
});

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`OctoFit Tracker Backend running on http://localhost:${PORT}`);
  console.log(`MongoDB connecting to ${MONGODB_URI}`);
});

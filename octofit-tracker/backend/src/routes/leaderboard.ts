import { Router, Request, Response } from 'express';

const router = Router();

// GET global leaderboard
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'GET /api/leaderboard - Global leaderboard',
    status: 'success',
  });
});

// GET team leaderboard
router.get('/team/:teamId', (req: Request, res: Response) => {
  const { teamId } = req.params;
  res.json({
    message: `GET /api/leaderboard/team/${teamId} - Team leaderboard`,
    teamId,
    status: 'success',
  });
});

// GET user rank
router.get('/rank/:userId', (req: Request, res: Response) => {
  const { userId } = req.params;
  res.json({
    message: `GET /api/leaderboard/rank/${userId} - User rank`,
    userId,
    status: 'success',
  });
});

export default router;

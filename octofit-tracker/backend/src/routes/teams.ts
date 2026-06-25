import { Router, Request, Response } from 'express';

const router = Router();

// GET all teams
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'GET /api/teams - List all teams',
    status: 'success',
  });
});

// GET team by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `GET /api/teams/${id} - Get team details`,
    teamId: id,
    status: 'success',
  });
});

// POST create new team
router.post('/', (req: Request, res: Response) => {
  res.status(201).json({
    message: 'POST /api/teams - Create new team',
    status: 'success',
  });
});

// PUT update team
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `PUT /api/teams/${id} - Update team`,
    teamId: id,
    status: 'success',
  });
});

// DELETE team
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `DELETE /api/teams/${id} - Delete team`,
    teamId: id,
    status: 'success',
  });
});

export default router;

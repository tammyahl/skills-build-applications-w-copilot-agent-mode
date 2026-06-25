import { Router, Request, Response } from 'express';

const router = Router();

// GET all activities
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'GET /api/activities - List all activities',
    status: 'success',
  });
});

// GET activity by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `GET /api/activities/${id} - Get activity details`,
    activityId: id,
    status: 'success',
  });
});

// POST log new activity
router.post('/', (req: Request, res: Response) => {
  res.status(201).json({
    message: 'POST /api/activities - Log new activity',
    status: 'success',
  });
});

// PUT update activity
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `PUT /api/activities/${id} - Update activity`,
    activityId: id,
    status: 'success',
  });
});

// DELETE activity
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `DELETE /api/activities/${id} - Delete activity`,
    activityId: id,
    status: 'success',
  });
});

export default router;

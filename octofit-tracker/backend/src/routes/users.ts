import { Router, Request, Response } from 'express';

const router = Router();

// GET all users
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'GET /api/users - List all users',
    status: 'success',
  });
});

// GET user by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `GET /api/users/${id} - Get user details`,
    userId: id,
    status: 'success',
  });
});

// POST create new user
router.post('/', (req: Request, res: Response) => {
  res.status(201).json({
    message: 'POST /api/users - Create new user',
    status: 'success',
  });
});

// PUT update user
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `PUT /api/users/${id} - Update user`,
    userId: id,
    status: 'success',
  });
});

// DELETE user
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `DELETE /api/users/${id} - Delete user`,
    userId: id,
    status: 'success',
  });
});

export default router;

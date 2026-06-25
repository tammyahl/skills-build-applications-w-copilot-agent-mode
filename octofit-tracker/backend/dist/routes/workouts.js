"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET all workouts
router.get('/', (req, res) => {
    res.json({
        message: 'GET /api/workouts - List all workouts',
        status: 'success',
    });
});
// GET workout by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `GET /api/workouts/${id} - Get workout details`,
        workoutId: id,
        status: 'success',
    });
});
// POST create new workout
router.post('/', (req, res) => {
    res.status(201).json({
        message: 'POST /api/workouts - Create new workout',
        status: 'success',
    });
});
// PUT update workout
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `PUT /api/workouts/${id} - Update workout`,
        workoutId: id,
        status: 'success',
    });
});
// DELETE workout
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `DELETE /api/workouts/${id} - Delete workout`,
        workoutId: id,
        status: 'success',
    });
});
// GET personalized workout suggestions
router.get('/suggestions/:userId', (req, res) => {
    const { userId } = req.params;
    res.json({
        message: `GET /api/workouts/suggestions/${userId} - Get personalized suggestions`,
        userId,
        status: 'success',
    });
});
exports.default = router;
//# sourceMappingURL=workouts.js.map
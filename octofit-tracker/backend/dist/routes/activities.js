"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET all activities
router.get('/', (req, res) => {
    res.json({
        message: 'GET /api/activities - List all activities',
        status: 'success',
    });
});
// GET activity by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `GET /api/activities/${id} - Get activity details`,
        activityId: id,
        status: 'success',
    });
});
// POST log new activity
router.post('/', (req, res) => {
    res.status(201).json({
        message: 'POST /api/activities - Log new activity',
        status: 'success',
    });
});
// PUT update activity
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `PUT /api/activities/${id} - Update activity`,
        activityId: id,
        status: 'success',
    });
});
// DELETE activity
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `DELETE /api/activities/${id} - Delete activity`,
        activityId: id,
        status: 'success',
    });
});
exports.default = router;
//# sourceMappingURL=activities.js.map
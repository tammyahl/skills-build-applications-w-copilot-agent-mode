"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET all teams
router.get('/', (req, res) => {
    res.json({
        message: 'GET /api/teams - List all teams',
        status: 'success',
    });
});
// GET team by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `GET /api/teams/${id} - Get team details`,
        teamId: id,
        status: 'success',
    });
});
// POST create new team
router.post('/', (req, res) => {
    res.status(201).json({
        message: 'POST /api/teams - Create new team',
        status: 'success',
    });
});
// PUT update team
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `PUT /api/teams/${id} - Update team`,
        teamId: id,
        status: 'success',
    });
});
// DELETE team
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `DELETE /api/teams/${id} - Delete team`,
        teamId: id,
        status: 'success',
    });
});
exports.default = router;
//# sourceMappingURL=teams.js.map
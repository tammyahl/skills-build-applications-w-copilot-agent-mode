"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET all users
router.get('/', (req, res) => {
    res.json({
        message: 'GET /api/users - List all users',
        status: 'success',
    });
});
// GET user by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `GET /api/users/${id} - Get user details`,
        userId: id,
        status: 'success',
    });
});
// POST create new user
router.post('/', (req, res) => {
    res.status(201).json({
        message: 'POST /api/users - Create new user',
        status: 'success',
    });
});
// PUT update user
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `PUT /api/users/${id} - Update user`,
        userId: id,
        status: 'success',
    });
});
// DELETE user
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `DELETE /api/users/${id} - Delete user`,
        userId: id,
        status: 'success',
    });
});
exports.default = router;
//# sourceMappingURL=users.js.map
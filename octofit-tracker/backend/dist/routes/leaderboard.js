"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET global leaderboard
router.get('/', (req, res) => {
    res.json({
        message: 'GET /api/leaderboard - Global leaderboard',
        status: 'success',
    });
});
// GET team leaderboard
router.get('/team/:teamId', (req, res) => {
    const { teamId } = req.params;
    res.json({
        message: `GET /api/leaderboard/team/${teamId} - Team leaderboard`,
        teamId,
        status: 'success',
    });
});
// GET user rank
router.get('/rank/:userId', (req, res) => {
    const { userId } = req.params;
    res.json({
        message: `GET /api/leaderboard/rank/${userId} - User rank`,
        userId,
        status: 'success',
    });
});
exports.default = router;
//# sourceMappingURL=leaderboard.js.map
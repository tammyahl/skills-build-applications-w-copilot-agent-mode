"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const users_1 = __importDefault(require("./routes/users"));
const teams_1 = __importDefault(require("./routes/teams"));
const activities_1 = __importDefault(require("./routes/activities"));
const leaderboard_1 = __importDefault(require("./routes/leaderboard"));
const workouts_1 = __importDefault(require("./routes/workouts"));
// Import models to register schemas
require("./models/User");
require("./models/Team");
require("./models/Activity");
require("./models/Leaderboard");
require("./models/Workout");
const app = (0, express_1.default)();
const PORT = 8000;
// Determine API URL for Codespaces support
const getApiUrl = () => {
    if (process.env.CODESPACE_NAME) {
        return `https://${process.env.CODESPACE_NAME}-8000.app.github.dev`;
    }
    return `http://localhost:${PORT}`;
};
const API_URL = getApiUrl();
// Middleware
app.use(express_1.default.json());
// MongoDB Connection
(0, database_1.connectDatabase)()
    .then(() => {
    console.log('Database connected successfully');
})
    .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
});
// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'OctoFit Tracker API',
        apiUrl: API_URL,
        version: '1.0.0'
    });
});
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        apiUrl: API_URL
    });
});
// API Routes
app.use('/api/users', users_1.default);
app.use('/api/teams', teams_1.default);
app.use('/api/activities', activities_1.default);
app.use('/api/leaderboard', leaderboard_1.default);
app.use('/api/workouts', workouts_1.default);
// 404 handler
app.use((req, res) => {
    res.status(404).json({
        message: 'Not Found',
        path: req.path,
        status: 'error'
    });
});
// Start server
app.listen(PORT, () => {
    console.log(`OctoFit Tracker Backend running on ${API_URL}`);
    console.log(`MongoDB connecting to ${(0, database_1.getMongoDBURI)()}`);
    console.log(`Health check available at ${API_URL}/health`);
    console.log('API routes:');
    console.log(`  - GET ${API_URL}/api/users`);
    console.log(`  - GET ${API_URL}/api/teams`);
    console.log(`  - GET ${API_URL}/api/activities`);
    console.log(`  - GET ${API_URL}/api/leaderboard`);
    console.log(`  - GET ${API_URL}/api/workouts`);
});
//# sourceMappingURL=server.js.map
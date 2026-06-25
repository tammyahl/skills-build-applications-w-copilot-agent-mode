"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = connectDatabase;
exports.disconnectDatabase = disconnectDatabase;
exports.getDatabase = getDatabase;
exports.getDatabaseName = getDatabaseName;
exports.getMongoDBURI = getMongoDBURI;
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * MongoDB Database Configuration
 * Connects to octofit_db database using Mongoose
 */
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
const DATABASE_NAME = 'octofit_db';
let mongoConnection = null;
/**
 * Connect to MongoDB database
 * @returns Promise<Connection> - The mongoose connection object
 */
async function connectDatabase() {
    try {
        if (mongoConnection) {
            console.log('Using existing MongoDB connection');
            return mongoConnection;
        }
        console.log(`Connecting to MongoDB at ${MONGODB_URI}`);
        await mongoose_1.default.connect(MONGODB_URI, {
            dbName: DATABASE_NAME,
        });
        mongoConnection = mongoose_1.default.connection;
        mongoConnection.on('connected', () => {
            console.log(`✅ Connected to MongoDB database: ${DATABASE_NAME}`);
        });
        mongoConnection.on('error', (error) => {
            console.error('❌ MongoDB connection error:', error);
        });
        mongoConnection.on('disconnected', () => {
            console.log('MongoDB connection disconnected');
        });
        return mongoConnection;
    }
    catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw error;
    }
}
/**
 * Disconnect from MongoDB database
 * @returns Promise<void>
 */
async function disconnectDatabase() {
    try {
        if (mongoConnection) {
            await mongoose_1.default.disconnect();
            mongoConnection = null;
            console.log('✅ Disconnected from MongoDB');
        }
    }
    catch (error) {
        console.error('Failed to disconnect from MongoDB:', error);
        throw error;
    }
}
/**
 * Get the current MongoDB connection
 * @returns Connection | null - The mongoose connection object or null
 */
function getDatabase() {
    return mongoConnection;
}
/**
 * Get the database name
 * @returns string - The database name (octofit_db)
 */
function getDatabaseName() {
    return DATABASE_NAME;
}
/**
 * Get the MongoDB URI
 * @returns string - The MongoDB connection URI
 */
function getMongoDBURI() {
    return MONGODB_URI;
}
exports.default = {
    connectDatabase,
    disconnectDatabase,
    getDatabase,
    getDatabaseName,
    getMongoDBURI,
};
//# sourceMappingURL=database.js.map
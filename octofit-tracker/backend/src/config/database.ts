import mongoose, { Connection } from 'mongoose';

/**
 * MongoDB Database Configuration
 * Connects to octofit_db database using Mongoose
 */

const MONGODB_URI: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
const DATABASE_NAME: string = 'octofit_db';

let mongoConnection: Connection | null = null;

/**
 * Connect to MongoDB database
 * @returns Promise<Connection> - The mongoose connection object
 */
export async function connectDatabase(): Promise<Connection> {
  try {
    if (mongoConnection) {
      console.log('Using existing MongoDB connection');
      return mongoConnection;
    }

    console.log(`Connecting to MongoDB at ${MONGODB_URI}`);
    
    await mongoose.connect(MONGODB_URI, {
      dbName: DATABASE_NAME,
    });

    mongoConnection = mongoose.connection;
    
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
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}

/**
 * Disconnect from MongoDB database
 * @returns Promise<void>
 */
export async function disconnectDatabase(): Promise<void> {
  try {
    if (mongoConnection) {
      await mongoose.disconnect();
      mongoConnection = null;
      console.log('✅ Disconnected from MongoDB');
    }
  } catch (error) {
    console.error('Failed to disconnect from MongoDB:', error);
    throw error;
  }
}

/**
 * Get the current MongoDB connection
 * @returns Connection | null - The mongoose connection object or null
 */
export function getDatabase(): Connection | null {
  return mongoConnection;
}

/**
 * Get the database name
 * @returns string - The database name (octofit_db)
 */
export function getDatabaseName(): string {
  return DATABASE_NAME;
}

/**
 * Get the MongoDB URI
 * @returns string - The MongoDB connection URI
 */
export function getMongoDBURI(): string {
  return MONGODB_URI;
}

export default {
  connectDatabase,
  disconnectDatabase,
  getDatabase,
  getDatabaseName,
  getMongoDBURI,
};

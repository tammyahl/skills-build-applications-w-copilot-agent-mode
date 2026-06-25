import { Connection } from 'mongoose';
/**
 * Connect to MongoDB database
 * @returns Promise<Connection> - The mongoose connection object
 */
export declare function connectDatabase(): Promise<Connection>;
/**
 * Disconnect from MongoDB database
 * @returns Promise<void>
 */
export declare function disconnectDatabase(): Promise<void>;
/**
 * Get the current MongoDB connection
 * @returns Connection | null - The mongoose connection object or null
 */
export declare function getDatabase(): Connection | null;
/**
 * Get the database name
 * @returns string - The database name (octofit_db)
 */
export declare function getDatabaseName(): string;
/**
 * Get the MongoDB URI
 * @returns string - The MongoDB connection URI
 */
export declare function getMongoDBURI(): string;
declare const _default: {
    connectDatabase: typeof connectDatabase;
    disconnectDatabase: typeof disconnectDatabase;
    getDatabase: typeof getDatabase;
    getDatabaseName: typeof getDatabaseName;
    getMongoDBURI: typeof getMongoDBURI;
};
export default _default;
//# sourceMappingURL=database.d.ts.map
import mongoose from 'mongoose';
import { config } from "../config/env.js";

const globalCache = globalThis;

if (!globalCache.__pawnshopMongoose) {
  globalCache.__pawnshopMongoose = {
    conn: null,
    promise: null,
  };
}

const cached = globalCache.__pawnshopMongoose;

const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(config.mongoUri, {
        dbName: config.mongoDbName,
        serverSelectionTimeoutMS: 10000,
      })
      .then((mongooseInstance) => {
        console.log(`Successfully connected to MongoDB database "${config.mongoDbName}"`);
        return mongooseInstance;
      })
      .catch((error) => {
        cached.promise = null;
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectToDatabase;

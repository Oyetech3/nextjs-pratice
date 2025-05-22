import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URL!;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URL environment variable"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDB() {
  if (cached.conn) {
    console.log("Using existing MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
  };

  cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
    console.log("MongoDB connected successfully");
    return mongoose;
    });
  }
  
  try {
    cached.conn = await cached.promise;
  }
  catch (err) {
    cached.promise = null;
    console.error("MongoDB connection error:", err);
    throw err;
  }

  return cached.conn;
}
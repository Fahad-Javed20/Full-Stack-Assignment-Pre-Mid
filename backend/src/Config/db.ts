import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL || "";

const connectDB = async () => {
  try {
    if (!MONGODB_URL) {
      throw new Error("MONGODB_URI is not defined");
    }

    await mongoose.connect(MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB Error:", err);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
  } catch (err) {
    console.error("MongoDB Error:", err);
  }
};

export { connectDB, disconnectDB };

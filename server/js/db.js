import mongoose from "mongoose";
import { MONGO_CONNECT_URL } from "./connectMongo.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_CONNECT_URL);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};

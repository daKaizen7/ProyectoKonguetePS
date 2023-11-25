import mongoose from "mongoose"
import { MONGO_CONNECT_URL } from "./connectMongo.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT_URL)
        console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed " + error.message )
    }
}

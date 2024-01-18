import mongoose from "mongoose";

const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/server";

export const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB using URI:", MONGODB_URI);
        await mongoose.connect(MONGODB_URI);
        console.log("DB is connected")
    } catch (error) {
        console.log(error)
    }
}
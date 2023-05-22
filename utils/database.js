import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) {
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const db = process.env.MONGO_URI;

    const connection = await mongoose.connect(db);

    console.log(`MongoDB Connected to ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

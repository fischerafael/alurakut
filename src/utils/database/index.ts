import mongoose from "mongoose";

const MONGO_URL = process.env.DB_USER;

if (!MONGO_URL) throw new Error("Please define a DB_USER env variable");

export const connectDB = async () => {
  mongoose.connect(
    MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => console.log("Connected to MongoDB")
  );
};

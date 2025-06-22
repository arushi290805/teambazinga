import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // loads MONGODB_URI from .env

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ... your routes and middleware

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

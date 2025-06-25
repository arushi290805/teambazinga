import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "https://arushi290805.github.io",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));


dotenv.config(); // loads MONGODB_URI from .env


const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ... your routes and middleware

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

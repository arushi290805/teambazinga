/*import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(express.json());

app.post("/api/users", (req, res) => {
  // handle user data
  res.status(200).json({ success: true });
});
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
});*/
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// This mounts userRoutes on /api/users
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

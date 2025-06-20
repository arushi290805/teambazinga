import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import connectDB from "./services/database";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
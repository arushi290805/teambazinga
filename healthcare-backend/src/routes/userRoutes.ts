/*import express, { Request, Response } from "express";
import { validateUserData } from "../middleware/validation";
import User from "../models/Users";
import userRouter from "./routes/user";
app.use("/api/users", userRouter);

const router = express.Router();

// POST /api/users - Create a new user
router.post("/", validateUserData, async (req: Request, res: Response) => {
  try {
    console.log("Received data:", req.body); // <-- Add this line
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ success: true, message: "User saved", user });
  } catch (err) {
    console.error(err); // <-- Add this line
    res.status(500).json({ success: false, error: "Failed to save user" });
  }
});

// GET /api/users - Get all users
router.get("/", async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch users" });
  }
});

// GET /api/users/search/:query - Search users by name
router.get('/search/:query', async (req: Request, res: Response) => {
  try {
    const { query } = req.params;
    const users = await User.find({ name: { $regex: query, $options: "i" } });
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to search users' });
  }
});

// PUT /api/users/:id - Update user
router.put("/:id", validateUserData, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedUser) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    res.json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update user" });
  }
});

// DELETE /api/users/:id - Delete user
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    res.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete user" });
  }
});

export default router;*/
/*import express, { Request, Response } from "express";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    // Optional: Save to MongoDB here using Mongoose
    // Example: await UserModel.create(userData);

    console.log("User data received:", userData);

    res.status(201).json({
      success: true,
      message: "User data saved successfully",
    });
  } catch (error) {
    console.error("Error in POST /api/users:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;*/
// src/routes/userRoutes.ts
import express, { Request, Response } from "express";
import { validateUserData } from "../middleware/validation";
import User from "../models/Users";

const router = express.Router();

// 🔹 Create a new user
router.post("/", validateUserData, async (req: Request, res: Response) => {
  try {
    console.log("Received data:", req.body);
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ success: true, message: "User saved", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to save user" });
  }
});

// 🔹 Get all users
router.get("/", async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch users" });
  }
});

// 🔹 Search users by name
router.get("/search/:query", async (req: Request, res: Response) => {
  try {
    const { query } = req.params;
    const users = await User.find({ name: { $regex: query, $options: "i" } });
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to search users" });
  }
});

// 🔹 Update user
router.put("/:id", validateUserData, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update user" });
  }
});

// 🔹 Delete user
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete user" });
  }
});

export default router;

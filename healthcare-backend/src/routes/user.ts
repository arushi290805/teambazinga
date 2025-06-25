import express, { Request, Response } from "express";

const router = express.Router();

// Dummy user type — update fields based on your formData
interface User {
  name: string;
  age: number;
  email: string;
  contactNumber: string;
  symptoms: string;
  previousConditions: string;
}

// POST /api/users
router.post("/", async (req: Request, res: Response) => {
  try {
    const user: User = req.body;

    // TODO: You can save this to MongoDB here
    // Example: await UserModel.create(user)

    console.log("Received user data:", user);

    res.status(201).json({
      success: true,
      message: "User data received successfully",
      data: user,
    });
  } catch (error) {
    console.error("Error handling /api/users:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

export default router;

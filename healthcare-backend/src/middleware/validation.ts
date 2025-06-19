import { Request, Response, NextFunction } from "express";

export function validateUserData(req: Request, res: Response, next: NextFunction): void {
  const { name, age, gender, contactNumber, symptoms, medication } = req.body;

  const isInvalid = (field: any) => typeof field !== "string" || field.trim() === "";

  if (
    isInvalid(name) ||
    isInvalid(age) ||
    isInvalid(gender) ||
    isInvalid(contactNumber) ||
    isInvalid(symptoms) ||
    isInvalid(medication)
  ) {
    res.status(400).json({ error: "Invalid data" });
    return;
  }

  next();
}

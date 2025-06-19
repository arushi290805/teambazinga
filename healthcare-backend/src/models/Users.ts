import mongoose from "mongoose";
//import "../services/database";

const userSchema = new mongoose.Schema({
  name: String,
  age: String,
  gender: String,
  contactNumber: String,
  symptoms: String,
  medication: String,
});

const User = mongoose.model("User", userSchema);
export default User;
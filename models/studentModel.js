import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    courses: { type: Array, required: true },
    updatedAt: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

let Dataset =
  mongoose.models.student || mongoose.model("student", studentSchema);

export default Dataset;

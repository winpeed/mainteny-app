import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    courses: { type: Array, required: true },
  },
  { timestamps: true }
);

module.exports = () => courseModel("Course", courseSchema);

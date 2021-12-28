import { connectToDatabase } from "../../../utils/mongodb";
import Student from "../../../models/studentModel";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const studentsCollection = await db.collection("students");

  if (req.method == "GET") {
    const data = await studentsCollection.find({}).toArray();

    if (data) {
      res.status(200).json({ message: `success`, data });
    } else {
      res.status(400).json({ message: `No results available.` });
    }
  }

  if (req.method == "POST") {
    const student = req.body;

    if (!student) {
      return res.status(400).json({ message: "Please add valid student data" });
    }

    const newStudent = new Student({
      name: student.name,
      email: student.email,
      gender: student.gender,
      age: student.age,
      country: student.country,
      courses: student.courses,
      updated: Date.now(),
    });

    await studentsCollection.insertOne(newStudent);

    res.status(201).json({ message: "New Student added successfully!" });
  }
}

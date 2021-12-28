import { connectToDatabase } from "../../../utils/mongodb";
import Student from "../../../models/studentModel";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (session) {
    res.status(401).json({ message: "User is not Authenticated" });
  } else {
    if (req.method == "GET") {
      const response = await getStudents();
      const data = response.map((respond) => {
        return {
          _id: String(respond._id),
          courses: respond.courses,
          age: respond.age,
          gender: respond.gender,
          name: respond.name,
          email: respond.email,
          country: respond.country,
        };
      });
      if (data) {
        res.status(200).json({ message: `success`, data });
      } else {
        res.status(400).json({ message: `No results available.` });
      }
    }

    if (req.method == "POST") {
      const student = req.body;

      if (!student) {
        return res
          .status(400)
          .json({ message: "Please add valid student data" });
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
}

export async function getStudents() {
  const { db } = await connectToDatabase();
  const studentsCollection = await db.collection("students");
  const response = await studentsCollection.find({}).toArray();
  return response;
}

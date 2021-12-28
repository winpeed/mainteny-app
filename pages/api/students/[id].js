import { connectToDatabase } from "../../../utils/mongodb";
const ObjectID = require("mongodb").ObjectId;

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const studentsCollection = await db.collection("students");

  if (req.method == "GET") {
    const result = await studentsCollection.find({}).toArray();

    const data = result.find((student) => {
      const { _id } = student;
      return String(_id) == req.query.id;
    });

    if (data) {
      res.status(200).json({ message: `success`, data });
    } else {
      res
        .status(400)
        .json({ message: `Student with this ${req.query.id} not found` });
    }
  }

  if (req.method == "PUT") {
    const { courses } = req.body;

    const result = await studentsCollection.findOneAndUpdate(
      { _id: new ObjectID(req.query.id) },
      {
        $set: { courses: [...courses] },
      }
    );

    if (result.lastErrorObject.updatedExisting) {
      res.status(200).json({
        message: `The student with id ${req.query.id} has been modified`,
      });
    } else {
      res.status(400).json({
        message: `Student could not be found hence records can't be updated`,
      });
    }
  }

  if (req.method == "DELETE") {
    try {
      const result = await studentsCollection.deleteOne({
        _id: new ObjectID(req.query.id),
      });

      if (result.acknowledged && result.deletedCount == 1) {
        res.status(200).json({
          message: `Student record has been deleted`,
        });
      } else {
        res.status(400).json({
          message: `No student was found with that record`,
        });
      }
    } catch (e) {
      console.error(e);
    }
  }
}

import React, { useState, useEffect } from "react";
import { CheckboxGroup, Checkbox } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./form";
import { cour } from "../courses";
import axios from "axios";

function CourseForm({ takenCourses, onClose, onCourses, data }) {
  const { handleSubmit, register } = useForm();
  const [studentCourses, setStudentCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([...cour]);

  const notify = () =>
    toast.success(`Courses updated!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  async function updateContact(value) {
    const id = String(data.data._id);

    try {
      const response = await axios.put(`/api/v1/students/${id}`, {
        courses: [...value.courses],
      });

      onCourses();
      notify();
      onClose();
    } catch (err) {
      return err;
    }
  }

  function onSubmit(values) {
    updateContact(values);
  }

  useEffect(() => {
    setStudentCourses(takenCourses);
  }, [takenCourses]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Label id="checkbox-group" type="label">
        Courses
      </Form.Label>
      <Form.Text>(Check all that apply)</Form.Text>
      <Form.Wrapper>
        <CheckboxGroup
          colorScheme="blue"
          defaultValue={[...studentCourses]}
          aria-labelledby="checkbox-group"
        >
          {allCourses.map((course, index) => {
            return (
              <Checkbox
                value={`${course}`}
                key={index}
                name="courses"
                {...register("courses")}
                style={{ lineHeight: "1.9", flex: "0 0 50%" }}
              >
                {course}
              </Checkbox>
            );
          })}
        </CheckboxGroup>
      </Form.Wrapper>

      <Form.Button type="submit" state="success">
        Submit
      </Form.Button>
    </Form>
  );
}

export default CourseForm;

import React, { useState, useEffect } from "react";
import { CheckboxGroup, Checkbox } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./form";
import { cour } from "../courses";

function CourseForm({ takenCourses, person, onClose, onCourses }) {
  const { handleSubmit, register } = useForm();
  const [studentCourses, setStudentCourses] = useState([...takenCourses]);
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
    const id = String(person._id);

    try {
      const response = await fetch(`/api/v1/students/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courses: [...value.courses] }),
      });
      notify();
      onClose();
      onCourses();
    } catch (err) {
      return err;
    }
  }

  function onSubmit(values) {
    updateContact(values);
  }

  useEffect(() => {}, [studentCourses]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Label id="checkbox-group" type="label">
        (Check all that apply)
      </Form.Label>
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

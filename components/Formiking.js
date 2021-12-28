import React, { useState } from "react";
import { useFormik } from "formik";
import Form from "./form/index";
import { cour } from "../courses";
import Router from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { server } from "../config";

export default function Formiking({ data, onShow, isShowing, onClose }) {
  const [allCourses, setAllCourses] = useState([...cour]);

  const [newItem, setNewItem] = useState({});

  const [notice, setNotice] = useState(false);

  const notify = () =>
    toast.success("New Student successfully added to the database!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const formik = useFormik({
    initialValues: {
      name: "",
      country: "",
      email: "",
      age: 0,
      gender: "",
      courses: [],
    },
    onSubmit: (values) => {
      fetch(`${server}/api/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then((response) => response.json)
        .then((data) => {
          onClose();
          notify();
          Router.push("/students");
        });
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Label htmlFor="name" type="label">
        Name
      </Form.Label>
      <Form.Input
        id="name"
        name="name"
        type="text"
        required
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <Form.Wrapper>
        <Form.Label htmlFor="email" type="label">
          Email
        </Form.Label>
        <Form.Input
          id="email"
          name="email"
          type="email"
          required
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </Form.Wrapper>
      <Form.Wrapper>
        {" "}
        <Form.Label htmlFor="country" type="label">
          Country
        </Form.Label>
        <Form.Input
          id="country"
          name="country"
          type="text"
          required
          onChange={formik.handleChange}
          value={formik.values.country}
        />
      </Form.Wrapper>
      <Form.Wrapper>
        <Form.Label htmlFor="age" type="label">
          Age
        </Form.Label>
        <Form.Input
          id="age"
          name="age"
          type="number"
          required
          onChange={formik.handleChange}
          value={formik.values.age}
        />
      </Form.Wrapper>
      <Form.Wrapper>
        {" "}
        <Form.Label type="label">Gender</Form.Label>
        <Form.Label>
          <Form.Input
            type="radio"
            name="gender"
            value="Male"
            required
            onChange={formik.handleChange}
          />
          Male
        </Form.Label>
        <Form.Label>
          <Form.Input
            type="radio"
            name="gender"
            value="Female"
            required
            onChange={formik.handleChange}
          />
          Female
        </Form.Label>
      </Form.Wrapper>
      <Form.Label id="checkbox-group" type="label">
        Available Courses
      </Form.Label>
      <Form.Wrapper role="group" aria-labelledby="checkbox-group">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {isShowing
            ? allCourses.slice(8).map((course, index) => {
                return (
                  <Form.Label
                    key={index}
                    style={{
                      fontSize: "1.0rem",
                      fontWeight: "600",
                      lineHeight: "0.5",
                      paddingRight: "1em",
                      display: "flex",
                      alignItems: "baseline",
                    }}
                  >
                    <Form.Input
                      type="checkbox"
                      name="courses"
                      value={`${course}`}
                      style={{
                        marginRight: "1em",
                        transform: "scale(1.5)",
                        padding: "0.8em",
                      }}
                      onChange={formik.handleChange}
                    />
                    {course}
                  </Form.Label>
                );
              })
            : allCourses.map((course, index) => {
                return (
                  <Form.Label
                    key={index}
                    style={{
                      fontSize: "1.0rem",
                      fontWeight: "600",
                      lineHeight: "0.5",
                      paddingRight: "1em",
                      display: "flex",
                      alignItems: "baseline",
                    }}
                  >
                    <Form.Input
                      type="checkbox"
                      name="courses"
                      value={`${course}`}
                      style={{
                        marginRight: "1em",
                        transform: "scale(1.5)",
                        padding: "0.8em",
                      }}
                      onChange={formik.handleChange}
                    />
                    {course}
                  </Form.Label>
                );
              })}
        </div>
      </Form.Wrapper>
      {isShowing ? (
        <Form.Text onClick={onShow} color="blue">
          All courses
        </Form.Text>
      ) : (
        <Form.Text onClick={onShow} color="blue">
          Less
        </Form.Text>
      )}
      <Form.Button type="submit" state="success">
        Submit
      </Form.Button>
      ;
    </Form>
  );
}

import React, { useState, useEffect } from "react";
import { useFormik, formik } from "formik";
import Form from "./form/index";
import { cour } from "../courses";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function StudentForm({ data, onShow, isShowing, onClose }) {
  const [allCourses, setAllCourses] = useState([...cour]);
  const [allCountries, setAllCountries] = useState([]);

  async function getCountries() {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const results = await response.json();
    const data = results.map((datum) => datum.name.common);
    setAllCountries(data.sort());
  }

  useEffect(() => {
    getCountries();
  }, []);

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
      fetch(`/api/v1/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          onClose();
          notify();
        });
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Wrapper>
        {" "}
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
      </Form.Wrapper>
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
        <Form.Label htmlFor="country" type="label">
          Country
        </Form.Label>
        <Form.Select
          value={formik.values.country}
          onChange={formik.handleChange}
          name="country"
        >
          <option value="" label="Select a country"></option>
          {allCountries.map((country, index) => {
            return (
              <option key={index} value={country} label={country}></option>
            );
          })}
        </Form.Select>
      </Form.Wrapper>
      {/* <Form.Wrapper>
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
      </Form.Wrapper> */}
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
            style={{ marginRight: "1em" }}
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
            style={{ marginRight: "1em" }}
          />
          Female
        </Form.Label>
      </Form.Wrapper>
      <Form.Wrapper role="group" aria-labelledby="checkbox-group">
        <Form.Label id="checkbox-group" type="label">
          Available Courses
        </Form.Label>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            padding: "1em 0em",
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
                      lineHeight: "1.2",
                      paddingRight: "1em",
                      display: "flex",
                      alignItems: "baseline",
                      width: "200px",
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
                        display: "flex",
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

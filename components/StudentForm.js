import React, { useState, useEffect } from "react";
import { useFormik, formik } from "formik";
import Form from "./form/index";
import { cour } from "../courses";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/router";

export default function StudentForm({ onShow, isShowing, onClose }) {
  const [allCourses, setAllCourses] = useState([...cour]);
  const [allCountries, setAllCountries] = useState([]);

  const router = useRouter();

  async function getCountries() {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      const results = response.data;
      const data = results.map((datum) => datum.name.common);
      setAllCountries(data.sort());
    } catch (error) {
      console.error(error);
    }
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
      const body = {
        ...values,
      };

      axios({
        method: "post",
        url: "/api/v1/students",
        data: body,
      })
        .then(() => {
          onClose();
          notify();
        })
        .catch((error) => {
          console.error(error);
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
      <Form.Wrapper>
        <Form.Label htmlFor="age" type="label">
          Age
        </Form.Label>
        <Form.Input
          id="age"
          name="age"
          type="number"
          required
          min="18"
          max="55"
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

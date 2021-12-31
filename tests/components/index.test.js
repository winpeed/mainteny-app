import React from "react";
import { render, screen } from "@testing-library/react";
import StudentForm from "../../components/StudentForm";
import Loading from "../../components/Loading";
import CourseForm from "../../components/CourseForm";
import Sign from "../../components/sign";
import Profile from "../../components/profile";
import Header from "../../components/header";
import Form from "../../components/form";

describe("Student Form Component", () => {
  it("renders Student Form Component", () => {
    render(<StudentForm />);
  });

  it("renders The Sign Component", () => {
    render(<Sign />);
  });

  it("renders The Header Component", () => {
    render(<Header />);
  });

  it("renders The Profile Component", () => {
    render(<Profile />);
  });

  it("renders The Form Component", () => {
    render(<Form />);
  });

  it("renders The CourseForm Component", () => {
    render(<CourseForm />);
  });

  it("renders The Loading Component", () => {
    render(<Loading />);
  });
});

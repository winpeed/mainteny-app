import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";
import SignIn from "../../pages/signin";
import SignUp from "../../pages/signup";
import ErrorPage from "../../pages/404";
import Students from "../../pages/students/index";
import Student from "../../pages/students/[id]";

describe("Home Page", () => {
  it("renders The Home Page", () => {
    render(<Home />);
  });

  it("renders The Signin Page", () => {
    render(<SignIn />);
  });

  it("renders The SignUp Page", () => {
    render(<SignUp />);
  });

  it("renders The ErrorPage Page", () => {
    render(<ErrorPage />);
  });

  it("renders The Students Dashboard", () => {
    render(<Students />);
  });

  it("renders The Student Profile Page", () => {
    render(<Student />);
  });
});

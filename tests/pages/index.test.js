import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";
import SignIn from "../../pages/signin";
import SignUp from "../../pages/signup";
import ErrorPage from "../../pages/404";
import Students from "../../pages/students/index";
import Student from "../../pages/students/[id]";

describe("Header Container", () => {
  it("renders The Home Page", () => {
    render(<Home />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("renders The Signin Page", () => {
    render(<SignIn />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("renders The SignUp Page", () => {
    render(<SignUp />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("renders The ErrorPage Page", () => {
    render(<ErrorPage />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("renders The Students Dashboard", () => {
    render(<Students />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("renders The Student Profile Page", () => {
    render(<Student />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
});

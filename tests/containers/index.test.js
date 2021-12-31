import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderContainer from "../../containers/HeaderContainer";
import ErrorContainer from "../../containers/ErrorContainer";
import HomeContainer from "../../containers/HomeContainer";
import ProfileContainer from "../../containers/ProfileContainer";
import StudentContainer from "../../containers/StudentContainer";
import SignInContainer from "../../containers/SignInContainer";
import SignUpContainer from "../../containers/SignUpContainer";
import WelcomeContainer from "../../containers/WelcomeContainer";
import SideContainer from "../../containers/WelcomeContainer";

describe("Header Container", () => {
  it("renders The Header Container", () => {
    render(<HeaderContainer />);
  });

  it("has the Sign In or Sign Out Button Texts", () => {
    const textToFind = "Sign Out" || "Sign In";
    render(<HeaderContainer />);
    const signTexts = screen.getByText(textToFind);
    expect(signTexts).toBeInTheDocument();
  });

  it("renders The Home Container", () => {
    render(<HomeContainer />);
  });

  it("has the Sign in as Admin CTA on the landing page", () => {
    const textToFind = "Sign in as Admin";
    render(<HomeContainer />);
    const signTexts = screen.getByText(textToFind);
    expect(signTexts).toBeInTheDocument();
  });

  it("renders The Error Container", () => {
    render(<ErrorContainer />);
  });

  it("renders The SignUp Container", () => {
    render(<SignUpContainer />);
  });

  it("renders The Welcome Container", () => {
    render(<WelcomeContainer />);
  });

  it("renders The Student Container", () => {
    render(<StudentContainer />);
  });

  it("renders The SideBar Container", () => {
    render(<SideContainer />);
  });

  // it("renders The SignIn Container", () => {
  //   render(<SignInContainer />);
  // });

  it("renders The Profile Container", () => {
    render(<ProfileContainer />);
  });
});

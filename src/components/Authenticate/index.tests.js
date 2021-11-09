import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Authenticate from "./Authenticate";

afterEach(() => {
  cleanup();
});

describe("Authenticate component", () => {

  // tests email input
  test("render email input", ( )=> {
    render(<Authenticate />)
    const inputElement = screen.getAllByPlaceholderText("Email...")
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "email");
  });

  // tests password input
  test("render password input", () => {
    render(<Authenticate />);
    const inputElement = screen.getAllByPlaceholderText("Password...");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "password");
  });

  // tests valid email 
  test("email valid", () => {
    render(<Authenticate />);
    const inputElement = screen.getByTestId("email-input");
    userEvent.type(inputElement, "test@gmail.com");
    expect(screen.getByTestId("email-input")).toHaveValue("test@gmail.com");
    expect(screen.queryByTestId("error.message")).not.toBeInTheDocument();
  });

  // tests invalid email
  test("email valid", () => {
    render(<Authenticate />);
    const inputElement = screen.getByTestId("email-input");
    userEvent.type(inputElement, "testgmail");
    expect(screen.getByTestId("email-input")).toHaveValue("testgmail");
    expect(screen.queryByTestId("error.message")).toBeInTheDocument();
    expect(screen.queryByTestId("error.message")).toEqual("Invalid Email or Password");
  });
  
  // tests that button exists
  test("checks button has rendered", () => {
    const { queryByTitle } = render(<Authenticate />);
    const btn = queryByTitle("loginButton");
    expect(btn).toBeInTheDocument();
  });

  // tests that the button has been clicked and onClick function executed
  test("tests onClick function", () => {
    const { queryByTitle } = render(<Authenticate />);
    const btn = queryByTitle("loginButton");
    fireEvent.click(btn);
    expect(screen.queryByTitle("loginButton")).toHaveBeenCalled();
  });
});

import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Authenticate from './index';

afterEach(() => {
  cleanup();
});

describe("Authenticate component", () => {
 
  test("render email input", () => {
    render(<Authenticate />);
    const inputEmail = screen.getByPlaceholderText("Email...");
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveAttribute("type", "email");
  });
  
  test("render password input", () => {
    render(<Authenticate />);
    const inputPassword = screen.getByPlaceholderText("Password...");
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveAttribute("type", "password");
  });
  
  test("email valid", () => {
    render(<Authenticate />);
    const validEmail = screen.getByTestId("email-input");
    userEvent.type(validEmail, "test@gmail.com");
    expect(screen.getByTestId("email-input")).toHaveValue("test@gmail.com");
    expect(screen.queryByTestId("error.message")).not.toBeInTheDocument();
  });

  test("email invalid", () => {
    render(<Authenticate />);
    const invalidEmail = screen.getByTestId("email-input");
    userEvent.type(invalidEmail, "testgmail");
    expect(screen.getByTestId("email-input")).toHaveValue("testgmail");
  });

  
  test("checks button has rendered", () => {
    render(<Authenticate />);
    const button = screen.getByTitle("loginButton");
    expect(button).toBeInTheDocument();
  });
});

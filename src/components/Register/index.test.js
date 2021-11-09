import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Register from '.';

afterEach(() => {
  cleanup();
});

describe("Register component", () => {
  // tests email input
  test("render email input", () => {
    render(<Register />);
    const inputEmail = screen.getByPlaceholderText("Email...");
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveAttribute("type", "email");
  });

  // tests password input
  test("render password input", () => {
    render(<Register />);
    const inputPassword = screen.getByPlaceholderText("Password...");
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveAttribute("type", "password");
  });

  // tests valid email
  test("email valid", () => {
    render(<Register />);
    const validEmail = screen.getByTestId("email-input");
    userEvent.type(validEmail, "test@gmail.com");
    expect(screen.getByTestId("email-input")).toHaveValue("test@gmail.com");
    expect(screen.queryByTestId("error.message")).not.toBeInTheDocument();
  });

  // tests invalid email
  test("email valid", () => {
    render(<Register />);
    const invalidEmail = screen.getByTestId("email-input");
    userEvent.type(invalidEmail, "testgmail");
    expect(screen.getByTestId("email-input")).toHaveValue("testgmail");
  });

  // tests that button renders
  test("checks button has rendered", () => {
    render(<Register />);
    const button = screen.getByTitle("registerButton");
    expect(button).toBeInTheDocument();
  });
});

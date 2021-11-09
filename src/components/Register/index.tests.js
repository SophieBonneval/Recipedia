import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Register from './Register';

afterEach(() => {
  cleanup();
});

describe("Register component", () => {
  // tests email input
  test("render email input", () => {
    render(<Register />);
    const inputElement = screen.getAllByPlaceholderText("Email...");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "email");
  });

  // tests password input
  test("render password input", () => {
    render(<Register />);
    const inputElement = screen.getAllByPlaceholderText("Password...");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "password");
  });

  // tests valid email
  test("email valid", () => {
    render(<Register />);
    const inputElement = screen.getByTestId("email-input");
    userEvent.type(inputElement, "test@gmail.com");
    expect(screen.getByTestId("email-input")).toHaveValue("test@gmail.com");
    expect(screen.queryByTestId("error.message")).not.toBeInTheDocument();
  });

  // tests invalid email
  test("email valid", () => {
    render(<Register />);
    const inputElement = screen.getByTestId("email-input");
    userEvent.type(inputElement, "testgmail");
    expect(screen.getByTestId("email-input")).toHaveValue("testgmail");
    expect(screen.queryByTestId("error.message")).toBeInTheDocument();
    expect(screen.queryByTestId("error.message")).toEqual(
      "Invalid Email"
    );
  });

  // tests that register button renders
  it("checks button has rendered", () => {
    const { queryByTitle } = render(<Register />);
    const btn = queryByTitle("registerButton");
    expect(btn).toBeInTheDocument();
  });

  // tests that the button has been clicked and onClick function executed
  it("onClick", () => {
    const { queryByTitle } = render(<Register />);
    const btn = queryByTitle("registerButton");
    fireEvent.click(btn);
    expect(screen.queryByTitle("registerButton")).toHaveBeenCalled();
  });
});

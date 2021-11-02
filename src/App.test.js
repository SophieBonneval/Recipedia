import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import App from "./App";

afterEach(() => {
  cleanup();
});

test(".nav element to be on the page", () => {
  render(<App />);
  const testApp = screen.getByTestId("test-app");
  expect(testApp).toContainHTML("</nav>");
});

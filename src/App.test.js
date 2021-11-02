import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

test("renders greeting to the world", () => {
  render(<App />);
  const greeting = screen.getByText(/Hello world/i);
  expect(greeting).toBeInTheDocument();
});

test("renders greeting to the world 2", () => {
  render(<App />);
  const greeting = screen.getByTestId("test-greeting");
  expect(greeting).toBeInTheDocument();
  expect(greeting).toHaveTextContent("Hello");
});

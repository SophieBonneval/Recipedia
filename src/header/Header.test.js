import { render, screen, cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

test("renders greeting to the world", () => {
  render(<Header />);
  const appName = screen.getByText(/Recipedia/i);
  expect(appName).toBeInTheDocument();
});

import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Register from './Register';

afterEach(() => {
  cleanup();
});

describe("Authenticate component", () => {
  it('checks button has rendered', () => {
    const { queryByTitle } = render(<Authenticate />);
    const btn = queryByTitle("registerButton");
    expect(btn).toBeInTheDocument();

    // render(<Register />);
    // const registerButton = screen.queryByText("Register");
    // expect(registerButton).toBeInTheDocument();
  });

  // tests what happens after button is clicked
  it("onClick", () => {
    const { queryByTitle } = render(<Authenticate />);
    const btn = queryByTitle("registerButton");
    fireEvent.click(btn);
      // expect main page to render 
  });
});

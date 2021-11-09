import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

  afterEach(() => {
    cleanup();
  });

test(".nav element to be on the page", () => {
  render(<App />);
  const testApp = screen.getByTestId("test-app");
  expect(testApp).toContainHTML("</nav>");
});

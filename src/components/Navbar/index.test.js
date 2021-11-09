import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Navbar from '.';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('Recipedia logo name to be on the page', () => {
  act(() => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
  });
  expect(screen.getByText('Recipedia')).toBeInTheDocument();
});

test('Menu links are displayed', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Contact us')).toBeInTheDocument();
});

test('Log in button is displayed', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  expect(screen.getByTestId('test-button-login')).toBeInTheDocument();
});

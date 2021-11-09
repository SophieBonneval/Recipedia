import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Footer from './footer';

afterEach(() => {
  cleanup();
});

test('Displays credits to team members', () => {
  render(<Footer />);
  expect(screen.getByTestId('footer-tag')).toBeInTheDocument();
});

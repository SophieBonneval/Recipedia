import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Footer from './Footer';

afterEach(() => {
  cleanup();
});

test('Displays credits to team members', () => {
  render(<Footer />);
  expect(screen.getByTestId('Footer-tag')).toBeInTheDocument();
});

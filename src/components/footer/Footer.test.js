import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Footer from '.';

afterEach(() => {
  cleanup();
});

test('Displays credits to team members', () => {
  render(<Footer />);
  expect(
    screen.getByText('Created by Jake, Keldra, Amanda, Boris and Sophie')
  ).toBeInTheDocument();
});

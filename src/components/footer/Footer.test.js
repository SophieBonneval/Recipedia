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

test('should navigate to Github repo when link is clicked', () => {
  render(<Footer />);

  expect(getByTestId('test-link-repo')).toHaveAttribute(
    'href',
    'https://github.com/Maldorana/Recipedia'
  );
});

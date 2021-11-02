import { render, screen } from '@testing-library/react';
import Searchbar from './Searchbar';

test('renders see a searchbar', () => {
  render(<Searchbar />);
  const linkElement = screen.getByPlaceholderText(/Search Recipes/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders see a searchbar submit button', () => {
  render(<Searchbar />);
  const linkElement = screen.getByDisplayValue(/Submit/i);
  expect(linkElement).toBeInTheDocument();
});
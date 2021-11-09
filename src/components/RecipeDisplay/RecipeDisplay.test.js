import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import RecipeDisplay from './RecipeDisplay';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('recipe title after selecting a dish', () => {
  const recipe = { title: 'chicken', extendedIngredients: [], analyzedInstructions: [],  }
  render(
    <RecipeDisplay recipe={recipe}/>
  );
  expect(screen.getByText('chicken')).toBeInTheDocument();
});
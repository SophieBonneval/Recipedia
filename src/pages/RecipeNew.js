import React from 'react';
import CreateRecipe from '../components/CreateRecipe';
import './index.css';

const RecipeNew = () => {
  return (
    <div className='container'>
      <h1>Create a new recipe</h1>
      <CreateRecipe />
    </div>
  );
};

export default RecipeNew;

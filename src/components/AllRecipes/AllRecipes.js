import React from 'react';
import Recipe from '../Recipe/Recipe';
import './AllRecipes.css';

const AllRecipes = () => {
  return (
    <div className='row'>
      <div className='col'>
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
    </div>
  );
};

export default AllRecipes;

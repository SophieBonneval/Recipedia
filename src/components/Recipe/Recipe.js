import React from 'react';
import './Recipe.css';
import { Link } from 'react-router-dom'

function recipe({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`}>
    <div className='card'>
      <div className='card-image' id={recipe.id}>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className='card-body'>
        <h1>{recipe.title}</h1>
      </div>
    </div>
    </Link>
  );
}

export default recipe;

import React from 'react';

function recipe({ recipe }) {
  return (
    <div className='recipe__image'>
      <h1>{recipe.title}</h1>
      <div id={recipe.id}>
        <img src={recipe.image} alt={recipe.title} />
      </div>
    </div>
  );
}

export default recipe;

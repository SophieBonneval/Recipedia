/* eslint react/prop-types: 0 */
import React from 'react';
import './RecipeDisplay.css';

function RecipeDisplay({ recipe }) {
  return (
    <div className='recipe-detail-api'>
      <img className='img-detail' src={recipe.image} alt={recipe.title} />
      <h1>{recipe.title}</h1>
      <div className='flex-container'>
        <div>
          <span>Serves:</span> {recipe.servings}
        </div>
        <div>
          <span>Preparation Time:</span> {recipe.readyInMinutes} minutes
        </div>
      </div>
      <div className='ingredients-instructions'>
        <h2> Ingredients </h2>
        <ul>
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <h2> Instructions </h2>
        <ol>
          {recipe.analyzedInstructions[0] &&
            recipe.analyzedInstructions[0].steps.map((step) => (
              <li key={step.id}>{step.step}</li>
            ))}
        </ol>
        <a href={recipe.sourceUrl} target='_blank' rel='noopener noreferrer'>
          Link to original recipe
        </a>
      </div>
    </div>
  );
}

export default RecipeDisplay;

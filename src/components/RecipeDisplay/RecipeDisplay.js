/* eslint react/prop-types: 0 */
import React from 'react';

function RecipeDisplay({recipe}) {

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <ul>
        <li>🍽 Serves: {recipe.servings}</li>
        <li>⏱Total Time: {recipe.readyInMinutes} minutes</li>
      </ul>
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
        link to original recipe
      </a>
    </div>
  );
}

export default RecipeDisplay;

/* eslint react/prop-types: 0 */
import React from 'react';
import './UserrescipesDisplay.css';

function UserrescipesDisplay({ rescipes }) {
  return (
    <div className='rescipes-detail'>
      <img className='img-detail' src={rescipes.image} alt={rescipes.title} />
      <h1>{rescipes.title}</h1>
      <div className='flex-container'>
        <div>
          <span>Serves:</span> {rescipes.serves}
        </div>
        <div>
          <span>Preparation Time:</span> {rescipes.readyInMinutes} minutes
        </div>
      </div>
      <div className='ingredients-instructions'>
        <h2> Ingredients </h2>
        <ul>
          {rescipes.ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredients.original}</li> // <----
          ))}
        </ul>
        <h2> Instructions </h2>
        <ol>
          {rescipes.instructions[0] &&
            rescipes.instructions[0].steps.map((step) => (
              <li key={step.id}>{step.step}</li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default UserrescipesDisplay;

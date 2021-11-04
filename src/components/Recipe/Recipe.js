import React from 'react';
import './Recipe.css';

function recipe() {
  return (
    <div className='card'>
      <div className='card-image'>
        <div className='rect'></div>
      </div>
      <div className='card-body'>
        <h1>Title test</h1>
      </div>
    </div>
  );
}

/* <div className='card'>
<div className='card-image' id={recipe.id}>
  <img src={recipe.image} alt={recipe.title} />
</div>
<div className='card-body'>
  <h1>{recipe.title}</h1>
</div>
</div> */

export default recipe;

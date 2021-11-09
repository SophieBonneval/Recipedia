import React from 'react';
import './Recipe.css';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const NavLink = styled(Link)`
  color: #393939;
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

function recipe({ recipe }) {
  return (
    <NavLink to={`/recipe/${recipe.id}`}>
      <div className='card'>
        <div className='card-image' id={recipe.id}>
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <div className='card-body'>
          <h1>{recipe.title}</h1>
        </div>
      </div>
    </NavLink>
  );
}

export default recipe;

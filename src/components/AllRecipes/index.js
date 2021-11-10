import React, { useState, useEffect } from 'react';
import './index.css';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase-config';

const NavLink = styled(Link)`
  color: #393939;
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'recipes')
    );
    const unsub = onSnapshot(q, (querySnapshot) => {
      let recipesArray = [];
      querySnapshot.forEach((doc) => {
        recipesArray.push({ ...doc.data(), id: doc.id });
      });
      setRecipes(recipesArray);
    });
    return () => unsub();
  }, []);

  return (
    <div className='container'>
      <div className='my-recipes'>
        <h1>Members recipes</h1>
        <div className='row'>
          <div className='col'>
            {recipes.map((recipe) => (
            <NavLink key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div className='card'>
              <div className='card-image'>
              <img src={recipe.image} alt={recipe.title} />
              </div>
                <div className='card-body'>
                <h1>{recipe.title}</h1>
                </div>
            </div>
            </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRecipes;

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
  const sortedRecipes = recipes.sort(
    (a, b) => (a.createdAt < b.createdAt && 1) || -1
  );

  useEffect(() => {
    const q = query(collection(db, 'recipes'));
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
    <div className='search-container'>
      {sortedRecipes ? <h1 className='search-title'>Users recipes</h1> : ''}
      <div className='row'>
        <div className='col'>
          {sortedRecipes.map((recipe) => (
            <NavLink key={recipe.id} to={`/userrecipe/${recipe.id}`}>
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
  );
};

export default AllRecipes;

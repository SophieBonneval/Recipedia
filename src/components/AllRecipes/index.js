import React, { useState, useEffect } from 'react';
import './index.css';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase-config';

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
        <div>
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <div>{recipe.title}</div>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllRecipes;

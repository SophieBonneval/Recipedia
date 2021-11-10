import React, { useState, useEffect } from 'react';
import './index.css';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';

const UserRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const sortedRecipes = recipes.sort(
    (a, b) => (a.createdAt < b.createdAt && 1) || -1
  );

  useEffect(() => {
    const q = query(
      collection(db, 'recipes'),
      where('uid', '==', auth.currentUser.uid)
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
        <h1>My Recipes</h1>
        <div>
          {sortedRecipes.map((recipe) => (
            <div className='recipe-detail' key={recipe.id}>
              <img
                className='img-detail'
                src={recipe.image}
                alt={recipe.title}
              />
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
                <div>
                  <h2> Ingredients </h2>
                  <ul>
                    {recipe.ingredients
                      .split(',')
                      .map((x) => x.trim())
                      .map((ingredient) => (
                        <li key={ingredient.id}>{ingredient}</li>
                      ))}
                  </ul>
                  <h2> Instructions </h2>
                  <div>{recipe.instructions}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserRecipes;

import React, { useState, useEffect } from 'react';
import './index.css';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';

const UserRecipes = () => {
  const [recipes, setRecipes] = useState([]);

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
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <div>{recipe.title}</div>
              <img src={recipe.image} alt={recipe.title} />
              <div>{recipe.readyInMinutes}</div>
              <div>
                {recipe.ingredients
                  .split(',')
                  .map((x) => x.trim())
                  .map((ingredient) => (
                    <div key={ingredient.id}>{ingredient}</div>
                  ))}
              </div>
              <div>{recipe.instructions}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserRecipes;

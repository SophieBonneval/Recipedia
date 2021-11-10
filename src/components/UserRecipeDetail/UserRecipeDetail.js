import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase-config';
import UserRecipeDisplay from '../UserRecipeDisplay/UserRecipeDisplay';


const UserRecipeDetail = () => {
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

  if (recipes !== null) {
    return (
      <div>
        <UserRecipeDisplay recipe={recipes} />
        {user ? (
          <button
            style={{background:color,color:textColor}}
            onClick={() => {
              handleSubmit();
              setColor("blue");setTextColor('black'),setText("Added to favourites")
            }}
          >
            { text }
          </button>
        ) : (
          ""
        )}
      </div>
    );

    } else {
      return <div></div>;
    }
};

export default UserRecipeDetail;

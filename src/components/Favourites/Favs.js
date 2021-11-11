import React, { useState, useEffect } from 'react';
import './Favs.css';
import {
  collection,
  query,
  onSnapshot,
  where,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { auth, db } from '../../firebase-config';
import { FaTrashAlt } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

const Favs = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'favourites'),
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

  const removeFavourite = async (id) => {
    const userDoc = doc(db, 'favourites', id);
    await deleteDoc(userDoc);
  };

  return (
    <div className='favorites-container'>
      <div className='my-favorites'>
        <h1>My Favorites</h1>
        {console.log(recipes)}
        {recipes.map((recipe) => (
          <a key={recipe.id} href={recipe.url}>
            <div className='favorited-recipe' href={recipe.url}>
              <div className='favorite-title'>
                <FaHeart className='fav-heart' />
                <div>{recipe.title}</div>
              </div>
              <button
                onClick={() => {
                  removeFavourite(recipe.id);
                }}
              >
                <FaTrashAlt className='icon-trash' />
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Favs;

//<img src={recipe.image} alt={recipe.title} />

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';
import RecipeDisplay from '../RecipeDisplay/RecipeDisplay';
import { FaHeart } from 'react-icons/fa';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setRecipe(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'favourites'), {
      uid: auth.currentUser.uid,
      title: recipe.title,
      id: id,
      readyInMinutes: recipe.readyInMinutes,
      servings: recipe.servings,
      url: recipe.sourceUrl,
      createdAt: Timestamp.fromDate(new Date()),
    });
  };

  if (recipe !== null) {
    return (
      <div>
        <RecipeDisplay recipe={recipe} />
        <button onClick={handleSubmit}><FaHeart className='heart'/>Add to favourites</button>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default RecipeDetail;

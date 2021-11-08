import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  addDoc,
  collection,
  Timestamp,
} from 'firebase/firestore';
import { auth, db } from '../../firebase-config';

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
      readyInMinutes: recipe.readyInMinutes,
      servings: recipe.servings,
      url: recipe.sourceUrl,
      createdAt: Timestamp.fromDate(new Date()),
    });

  };

  if (recipe !== null) {
    return (
      <div>
        <h1>{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} />
        <ul>
          <li>🍽 Serves: {recipe.servings}</li>
          <li>⏱Total Time: {recipe.readyInMinutes} minutes</li>
        </ul>
        <h2> Ingredients </h2>
        <ul>
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <h2> Instructions </h2>
        <ol>
          {recipe.analyzedInstructions[0] &&
            recipe.analyzedInstructions[0].steps.map((step) => (
              <li key={step.id}>{step.step}</li>
            ))}
        </ol>
        <a href={recipe.sourceUrl} target='_blank' rel='noopener noreferrer'>
          link to original recipe
        </a>
        <button
        onClick={handleSubmit}>
        Add to favourites
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default RecipeDetail;

import React, { useEffect, useState } from 'react';
import './Recipedetail.css';
import { useParams } from 'react-router-dom';
import RecipeDisplay from '../RecipeDisplay/RecipeDisplay';

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

  if (recipe !== null) {
    return (
      <RecipeDisplay recipe={recipe}/>
   )
  } else {
    return <div></div>;
  }
}

export default RecipeDetail;

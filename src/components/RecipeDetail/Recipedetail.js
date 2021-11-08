import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

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

  if (recipe!== null) {
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
      {recipe.extendedIngredients.map((ingredient) => <li key={ingredient.id}>{ingredient.original}</li>)}
    </ul>
    <h2> Instructions </h2>
    <ol>
      {recipe.analyzedInstructions[0].steps.map((step) => <li key={step.id}>{step.step}</li>)}
    </ol>
    <a href={recipe.sourceUrl}>link to original recipe</a>
    </div>
  )} else {
    return <div></div>
  }
}

export default RecipeDetail
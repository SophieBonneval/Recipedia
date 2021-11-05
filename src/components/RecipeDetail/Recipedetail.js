import React from 'react'
import { useParams } from 'react-router-dom'

function RecipeDetail() {
  const { id } = useParams();
  // const [recipeDetail, setRecipeDetail] = useState([]);

  // const url = `https://api.spoonacular.com/recipes/101/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`;
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     console.log(json.sourceUrl);
  //     setRecipeDetail(json.sourceUrl);
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  // fetchData();

  return (
    <div>
    {console.log(id)}
    {/* {recipeDetail && recipeDetail}
    recipe.id
    recipe.title
    recipe.image
    recipe.servings
    recipe.readyInMinutes
    recipe.sourceUrl
    recipe.instructions */}
    </div>
  )
}

export default RecipeDetail

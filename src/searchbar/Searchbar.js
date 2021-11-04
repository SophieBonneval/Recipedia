import React, { useState } from "react"
import Recipe from '../recipe/recipe'

function Searchbar() {
    const [recipeData, setRecipeData] = useState([]);
    const [query, setQuery] = useState('');

 
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}&number=20`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.results);
                setRecipeData(json.results);
            } catch (error) {
                console.log("error", error);
            }
        };
 

    function handleChange(e) {
      setQuery(e.target.value);
    }

  return (
    
    <div>
        <input
          type="text"
          placeholder="Search Recipes"
          onChange={handleChange}
        />
        <button onClick={fetchData}>Get Recipes</button>
    {recipeData && recipeData.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div> 
  )
}

export default Searchbar
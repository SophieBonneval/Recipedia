import React, { useEffect, useState } from "react"
import Recipe from './recipe'

function Api() {
    const [recipeData, setRecipeData] = useState([{}]);

    useEffect(() => {
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=chicken&number=20`;

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

        fetchData();
    }, []);
  return (
    <div>

    {recipeData.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div> 
  )
}

export default Api
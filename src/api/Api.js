import React, { useEffect, useState } from "react"

function Api() {
    const [recipeData, setRecipeData] = useState({});

    useEffect(() => {
        const url = `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=chicken&number=20`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setRecipeData(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
  return (
    <div>
    {console.log(recipeData)}
    </div>
  )
}

export default Api
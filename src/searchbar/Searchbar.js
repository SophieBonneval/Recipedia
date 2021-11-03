import React, { useEffect, useState } from "react"

function Searchbar() {
  const [recipeData, setRecipeData] = useState({});
  const [ingredient, setIngredient] = useState('');


  useEffect(() => {
      const url = `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${ingredient}&number=20`;

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

  function handleChange(e) {
    setIngredient(e.target.value);
  }

  return (
    <div>
      <form>
        <label>
          <input 
          type="text" 
          name="name"
          placeholder='Search Recipes' 
          onChange={handleChange}
          />
          </label>
        {/* <input type="submit" 
        value="Submit" 
          onClick= {useEffect}
        /> */}
        <button onClick={useEffect}>Get Daily Meal Plan</button>
        {console.log(recipeData)}
      </form>
    </div>
  )
}

export default Searchbar

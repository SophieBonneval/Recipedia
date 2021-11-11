import React, { useState } from 'react';
import Recipe from '../Recipe/Recipe';
import './Searchbar.css';

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
      console.log('error', error);
    }
  };

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className='search-container'>
      <div className='search-area'>
        <input
          type='text'
          placeholder='Search Recipes'
          onChange={handleChange}
        />
        <button onClick={fetchData}>Search</button>
      </div>
      <div className='row'>
        <div className='col'>
          {recipeData &&
            recipeData.map((recipe) => (
              <Recipe recipe={recipe} key={recipe.id} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;

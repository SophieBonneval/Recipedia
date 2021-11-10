import React from 'react';
import AllRecipes from '../components/AllRecipes';
import Searchbar from '../components/Searchbar/Searchbar';
import './index.css';

const Home = () => {
  return (
    <div className='container'>
      <Searchbar /> 
      <AllRecipes />
    </div>
  );
};

export default Home;

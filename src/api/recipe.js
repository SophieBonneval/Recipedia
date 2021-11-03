import React from 'react'
import styled from 'styled-components';

const RecipeDisplay = styled.section`
    margin:auto;
    border-radius:10px;
    margin-bottom:1rem;
    @media only screen and (min-width:480px) {
      margin-bottom:0;
    }
      
      &:hover img {
        filter:brightness(1);
      }
      &:hover h1 {
        background-color:grey;
        border-radius:5px;
      }

    h1 {
        font-family: Third Storey;
        font-size:1.5rem;
        color: white;
        position:absolute;
        top:40%;
        left:50%;
        transform:translate(-50%,-50%);
        z-index:2;
        text-align:center;
        line-height:1.5;
        transition:all 0.3s ease-in-out;
        padding:0.5rem;
    }
    .recipe__image {
      position:relative;
    }
    img {
      width:30%;
      object-fit:cover;
      filter:brightness(0.7);
      box-shadow:0px 3px 3px rgba(0,0,0,0.2);
      border-radius:5px;
      transition:all 0.3s ease-in-out;
    }
`;

function recipe({recipe}) {
  return (
    <RecipeDisplay>
      <div className = 'recipe__image'>
        <h1>{recipe.title}</h1>
        <div id={recipe.id}>
          <img src={recipe.image} alt={recipe.title} />
        </div>
      </div>
      </RecipeDisplay>
  )
}

export default recipe

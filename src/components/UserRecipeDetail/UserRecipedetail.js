import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase-config';

function UserRecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getUserRecipe = async () => {
      const data = await getDoc(doc(db, 'recipes', id));
      setRecipe(data.data());
    };

    getUserRecipe();
  }, []);

  if (recipe !== null) {
    return (
      <div className='container'>
        <div className='my-recipes'>
          <div>
            <div className='recipe-detail' key={recipe.id}>
              <img
                className='img-detail'
                src={recipe.image}
                alt={recipe.title}
              />
              <h1>{recipe.title}</h1>
              <div className='flex-container'>
                <div>
                  <span>Serves:</span> {recipe.serves}
                </div>
                <div>
                  <span>Preparation Time:</span> {recipe.readyInMinutes} minutes
                </div>
              </div>
              <div className='ingredients-instructions'>
                <div>
                  <h2> Ingredients </h2>
                  <ul>
                    {recipe.ingredients
                      .split(',')
                      .map((x) => x.trim())
                      .map((ingredient) => (
                        <li key={ingredient.id}>{ingredient}</li>
                      ))}
                  </ul>
                  <h2> Instructions </h2>
                  <ol>
                    {recipe.instructions
                      .split('|')
                      .map((step) => step.trim())
                      .map((step) => (
                        <li key={step.id}>{step}</li>
                      ))}
                  </ol>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default UserRecipeDetail;

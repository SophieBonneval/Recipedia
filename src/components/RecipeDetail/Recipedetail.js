import React, { useEffect, useState } from 'react';
import './Recipedetail.css';
import { useParams } from 'react-router-dom';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';
import RecipeDisplay from '../RecipeDisplay/RecipeDisplay';
import { onAuthStateChanged } from 'firebase/auth';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [user, setUser] = useState({});
  const [text, setText] = useState('Add to favourites');
  const [color, setColor] = useState('green');
  const [textColor, setTextColor] = useState('white');

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

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

  const handleSubmit = async () => {
    // e.preventDefault();
    await addDoc(collection(db, 'favourites'), {
      uid: auth.currentUser.uid,
      title: recipe.title,
      id: id,
      readyInMinutes: recipe.readyInMinutes,
      servings: recipe.servings,
      url: recipe.sourceUrl,
      createdAt: Timestamp.fromDate(new Date()),
    });
  };

  if (recipe !== null) {
    return (
      <div>
        <RecipeDisplay recipe={recipe} />
        {user ? (
          <div className='fav-btn-container'>
            <button
              className='add-button'
              style={{ background: color, color: textColor }}
              onClick={() => {
                handleSubmit();

                setColor('#efddc5');

                setTextColor('black'), setText('Added to favourites');
              }}
            >
              <i className='fas fa-heart fav-icon-btn'></i>
              {text}
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default RecipeDetail;

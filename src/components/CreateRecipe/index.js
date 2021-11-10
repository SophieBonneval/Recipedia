import React, { useState } from 'react';
import './index.css';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { storage, auth, db } from '../../firebase-config';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';

function CreateRecipe() {
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [readyInMinutes, setReadyInMinutes] = useState(0);
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const [titleIsValid, setTitleIsValid] = useState(true);
  const [readyInMinutesIsValid, setReadyInMinutesIsValid] = useState(true);
  const [ingredientsIsValid, setIngredientsIsValid] = useState(true);
  const [instructionsIsValid, setInstructionsIsValid] = useState(true);

  const titleInputClasses = titleIsValid ? 'form-input' : 'form-input invalid';
  const readyInMinutesInputClasses = readyInMinutesIsValid
    ? 'form-input'
    : 'form-input invalid';
  const ingredientsInputClasses = ingredientsIsValid
    ? 'form-input'
    : 'form-input invalid';
  const instructionsInputClasses = instructionsIsValid
    ? 'form-input'
    : 'form-input invalid';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      setTitleIsValid(false);
      if (ingredients.trim() === '') {
        setIngredientsIsValid(false);
        if (instructions.trim() === '') {
          setInstructionsIsValid(false);
          if (readyInMinutes === '' || readyInMinutes === 0) {
            setReadyInMinutesIsValid(false);
            return;
          }
          return;
        }
        return;
      }
      return;
    }

    const imgRef = ref(
      storage,
      `gallery/${new Date().getTime()} - ${img.name}`
    );
    const snap = await uploadBytes(imgRef, img);
    const url = await getDownloadURL(ref(storage, snap.ref.fullPath));
    await addDoc(collection(db, 'recipes'), {
      uid: auth.currentUser.uid,
      title,
      readyInMinutes,
      ingredients,
      instructions,
      image: url,
      createdAt: Timestamp.fromDate(new Date()),
    });
    setTitle('');
    setReadyInMinutes(0);
    setIngredients('');
    setInstructions('');
    setImg('');
  };

  return (
    <div className='new-recipe-container'>
      <div className='new-recipe'>
        <h1>Create a new recipe</h1>
        <form className='new-recipe-form' onSubmit={handleSubmit}>
          <input
            type='text'
            name='title'
            id='title'
            className={titleInputClasses}
            value={title}
            placeholder='Recipe title'
            onChange={(e) => setTitle(e.target.value)}
          />
          {!titleIsValid && (
            <p className='error-message'>Title must not be empty</p>
          )}
          <input
            type='number'
            min='0'
            name='readyInMinutes'
            id='readyInMinutes'
            className={readyInMinutesInputClasses}
            value={readyInMinutes}
            placeholder='Total time of preparation and cooking time in minutes'
            onChange={(e) => setReadyInMinutes(e.target.value)}
          />
          {!readyInMinutesIsValid && (
            <p className='error-message'>
              Time of preparation must be more than 0 minutes.
            </p>
          )}
          <input
            type='text'
            name='ingredients'
            id='ingredients'
            className={ingredientsInputClasses}
            value={ingredients}
            placeholder='Ingredients separated by a coma (i.e. chicken, potatoes, pepper)'
            onChange={(e) => setIngredients(e.target.value)}
          />
          {!ingredientsIsValid && (
            <p className='error-message'>Ingredients must not be empty</p>
          )}
          <textarea
            type='text'
            name='instructions'
            id='instructions'
            className={instructionsInputClasses}
            rows='4'
            cols='50'
            value={instructions}
            placeholder='Cooking instructions'
            onChange={(e) => setInstructions(e.target.value)}
          />
          {!instructionsIsValid && (
            <p className='error-message'>Instructions must not be empty</p>
          )}
          <input
            type='file'
            className='form-input'
            accept='image/*'
            onChange={(e) => setImg(e.target.files[0])}
          />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default CreateRecipe;

import React, { useState } from 'react';
import './index.css';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { storage, auth, db } from '../../firebase-config';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { useHistory } from 'react-router';

function CreateRecipe() {
  const [img, setImg] = useState('');
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [readyInMinutes, setReadyInMinutes] = useState('');
  const [serves, setServes] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  // Validations states
  const [titleIsValid, setTitleIsValid] = useState(true);
  const [imgIsValid, setImgIsValid] = useState(true);
  const [readyInMinutesIsValid, setReadyInMinutesIsValid] = useState(true);
  const [servesIsValid, setServesIsValid] = useState(true);
  const [ingredientsIsValid, setIngredientsIsValid] = useState(true);
  const [instructionsIsValid, setInstructionsIsValid] = useState(true);

  // Validations CSS classes for user feedback
  const titleInputClasses = titleIsValid ? 'form-input' : 'form-input invalid';
  const imgInputClasses = imgIsValid ? 'form-input' : 'form-input invalid';
  const readyInMinutesInputClasses = readyInMinutesIsValid
    ? 'form-input'
    : 'form-input invalid';
  const servesInputClasses = servesIsValid
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
          if (readyInMinutes === '' || readyInMinutes <= 0) {
            setReadyInMinutesIsValid(false);
            if (serves === '' || serves <= 0) {
              setServesIsValid(false);
              if (!img) {
                setImgIsValid(false);
                return;
              }
              if (!img.name.match(/.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/)) {
                setImgIsValid(false);
                return;
              }
              return;
            }
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
      serves,
      ingredients,
      instructions,
      image: url,
      createdAt: Timestamp.fromDate(new Date()),
    });
    setTitle('');
    setReadyInMinutes('');
    setServes('');
    setIngredients('');
    setInstructions('');
    setImg('');
    history.replace('/my-recipes');
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
            type='number'
            min='0'
            name='serves'
            id='serves'
            className={servesInputClasses}
            value={serves}
            placeholder='How many people it feeds'
            onChange={(e) => setServes(e.target.value)}
          />
          {!servesIsValid && (
            <p className='error-message'>
              How many it feeds must be more than 0.
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
            placeholder='Cooking instructions with steps separated by a pipe (i.e. Step 1 | Step 2 | Step 3)'
            onChange={(e) => setInstructions(e.target.value)}
          />
          {!instructionsIsValid && (
            <p className='error-message'>Instructions must not be empty</p>
          )}
          <input
            type='file'
            className={imgInputClasses}
            accept='image/*'
            onChange={(e) => setImg(e.target.files[0])}
          />
          {!imgIsValid && <p className='error-message'>Select valid image</p>}
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default CreateRecipe;

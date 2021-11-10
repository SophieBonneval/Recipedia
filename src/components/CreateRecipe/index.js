import React, { useState,  } from 'react';
import './index.css';
import { addDoc, collection, Timestamp, } from 'firebase/firestore';
import { storage, auth, db } from '../../firebase-config';
import {
  ref,
  getDownloadURL,
  uploadBytes,
  
} from "firebase/storage";


function CreateRecipe() {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState('');
  const [readyInMinutes, setReadyInMinutes] = useState(0);
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();
        const imgRef = ref(
          storage,
          `gallery/${new Date().getTime()} - ${img.name}`
        );
        if (!img) {
          console.log('image is required');
          return false;
          
        }
        if (!img.name.match(/\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/)) {
          console.log('select valid image.');
          return false;
        }
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
        <form className='new-recipe-form' onSubmit={handleSubmit} >
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            placeholder='Recipe title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type='number'
            min='0'
            name='readyInMinutes'
            id='readyInMinutes'
            value={readyInMinutes}
            placeholder='Total of preparation and cooking time in minutes'
            onChange={(e) => setReadyInMinutes(e.target.value)}
          />
          <input
            type='text'
            name='ingredients'
            id='ingredients'
            value={ingredients}
            placeholder='Ingredients separated by a coma (i.e. chicken, potatoes, pepper)'
            onChange={(e) => setIngredients(e.target.value)}
          />
          <textarea
            type='text'
            name='instructions'
            id='instructions'
            rows='4'
            cols='50'
            value={instructions}
            placeholder='Cooking instructions'
            onChange={(e) => setInstructions(e.target.value)}
          />
        
          <input  
            type="file"
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

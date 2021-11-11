import React, {useState, useEffect} from 'react'
import "./Favs.css";
import { collection, query, onSnapshot, where, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from '../../firebase-config';

const Favs = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // console.log(auth.currentUser.uid)
    const q = query(collection(db, "favourites"), where('uid', '==', auth.currentUser.uid));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let recipesArray = [];
      querySnapshot.forEach((doc) => {
        recipesArray.push({ ...doc.data(), id: doc.id });
      });
      setRecipes(recipesArray);
    });
    return () => unsub();
  }, []);

  const removeFavourite = async (id) => {
    const userDoc = doc(db, "favourites", id);
    await deleteDoc(userDoc);
  }

  return (
    <div className="favourite-recipes">
      <h1 className="title">My Favourites</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id} href={recipe.url}>
          <a className="recipe-name" href={recipe.url}>{recipe.title} </a>
        <ol>
        <button
          className="delete-button"
          onClick={() => {
          removeFavourite(recipe.id);
          }}
        >
        {" "}
          Delete
        </button>
        </ol>
        </div>
      ))}
    </div>
  );
}

export default Favs

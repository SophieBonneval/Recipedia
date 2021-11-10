import React, {useState, useEffect} from 'react'
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
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} href={recipe.url}>
          <a href={recipe.url}>{ recipe.title} </a>
          <button onClick={() => {
            removeFavourite(recipe.id);
          }}>
            {" "}
            Remove recipe
          </button>
          
        </div>
      ))}
    </div>
  );
}

export default Favs

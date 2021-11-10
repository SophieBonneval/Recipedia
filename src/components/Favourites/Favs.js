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
        <a key={recipe.id} href={recipe.url}>
          {recipe.title} <button onClick={() => {
            removeFavourite(recipe.id);
          }}>
            {" "}
            Remove recipe
          </button>
        </a>
      ))}
    </div>
  );
}

export default Favs

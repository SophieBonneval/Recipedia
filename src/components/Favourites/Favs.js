import React, {useState, useEffect} from 'react'
import { collection, query, onSnapshot, where } from "firebase/firestore";
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

  return (
    <div>
    {recipes.map((recipe) => (
        <li key={recipe.id}>{recipe.title}</li>
    ))}
    </div>
  )
}

export default Favs

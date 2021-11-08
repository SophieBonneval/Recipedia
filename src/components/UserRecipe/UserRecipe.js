import React, {useState, useEffect} from 'react'
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { auth, db } from '../../firebase-config';

function UserRecipe() {
  const [recipes, setRecipes] = useState([]);

// 1ST CODE OPTION WITH USEFFECT
  useEffect(() => {
    // console.log(auth.currentUser.uid)
    const q = query(collection(db, "recipes"), where('uid', '==', auth.currentUser.uid));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let recipesArray = [];
      querySnapshot.forEach((doc) => {
        recipesArray.push({ ...doc.data(), id: doc.id });
      });
      setRecipes(recipesArray);
    });
    return () => unsub();
  }, []);

  // // 2ND CODE OPTION DOESN'T HAVE USEEFFECT
  // const q = query(collection(db, "recipes"), where('uid', '==', auth.currentUser.uid));
  // onSnapshot(q, (querySnapshot) => {
  //   let recipesArray = [];
  //   querySnapshot.forEach((doc) => {
  //     recipesArray.push({ ...doc.data(), id: doc.id });
  //   });
  //   setRecipes(recipesArray);
  // });

  return (
    <div>
      {recipes.map((recipe) => (
        <li key={recipe.id}>{recipe.title}</li>
    ))}
    </div>
  )
}

export default UserRecipe

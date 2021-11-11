// import React, { useState, useEffect } from 'react';
// // import { collection, query, onSnapshot } from 'firebase/firestore';
// import { db } from '../../firebase-config';


// const UserRecipeDetail = () => {
//   import { doc, getDoc } from "firebase/firestore";

//   const docRef = doc(db, "cities", "SF");
//   const docSnap = await getDoc(docRef);
  
//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// };

import React from 'react'

function UserRecipeDetail() {
  return (
    <div>
      
    </div>
  )
}

export default UserRecipeDetail










  // const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   const q = query(
  //     collection(db, 'recipes')
  //   );
  //   const unsub = onSnapshot(q, (querySnapshot) => {
  //     let recipesArray = [];
  //     querySnapshot.forEach((doc) => {
  //       recipesArray.push({ ...doc.data(), id: doc.id });
  //     });
  //     setRecipes(recipesArray);
  //   });
  //   return () => unsub();
  // }, []);

  



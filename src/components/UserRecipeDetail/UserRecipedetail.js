import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase-config';

function UserRecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getUserRecipe = async () => {
      const data = await getDoc(doc(db, 'recipes', id));
      setRecipe(data.data());
    };

    getUserRecipe();
  }, []);

//   const docRef = doc(db, "cities", "SF");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }

  return (
    <div>
      {console.log(recipe)}
    </div>
  )
}

export default UserRecipeDetail

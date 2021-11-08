import React, {useEffect} from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth,db } from '../../firebase-config';

function UserRecipe() {

useEffect(() => {
  const q = query(collection(db, "recipes"), where('uid', '==', auth.currentUser.uid));
  const querySnapshot = getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  return () => {

  }
}, [])



  

  });

  return (
    <div>
      
    </div>
  )
}

export default UserRecipe


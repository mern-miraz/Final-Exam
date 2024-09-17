import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";

const User = () => {
  const db = getDatabase();
  let [readData, setReadData] = useState([])
  useEffect(()=>{
    const starCountRef = ref(db, 'users/');
  onValue(starCountRef, (snapshot) => {
    let arr = []
    snapshot.forEach((item)=>{
      arr.push(item.val())
      setReadData(arr)
      
    })
  
});
  },[])
  return (
    <>
     <div className=" container mx-auto flex justify-center">
      {readData.map((item)=>(     
      <div className=" mt-11">
        <h3>Name: <span>{item}</span></h3>
        <h3>Gmail: <span>{item}</span></h3>
      </div>
      ))}
     </div>
    </>
  )
}

export default User
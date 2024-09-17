import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const Banner = () => {
    const auth = getAuth();
    const db = getDatabase();
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let navigate = useNavigate()

    let handleName = (e) => {
        setName(e.target.value);  
    }

    let handleGmail = (e) => {
        setEmail(e.target.value);  
    }

    let handlePassword = (e) => {
        setPassword(e.target.value);  
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
    
  })
  .then(()=>{
    set(ref(db, 'users/'), {
        username: name,
        email: email,
      });
  })
  .then(()=>{
    toast.success("Successfully Submitted verified Your Email");
    sendEmailVerification(auth.currentUser);
    setEmail("");
    setPassword("");
    setTimeout(() => {
    navigate("/user")
    }, 2000);})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    
    
  });
    }


     

  return (
    <>
        <ToastContainer
    position="top-center"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />

        <div className="container flex justify-center mx-auto">
                <div className=" mt-20">
                    <form action="">
                    <table>
                        <td className='gap-y-2'>
                            <tr className=''>Name: <input onChange={handleName} type="text" placeholder='Name' className=' outline-none border-2 border-blue-600 rounded-lg h-10 w-80 ps-3' /></tr>
                            <tr className=''> Gmail: <input onChange={handleGmail} type="email" name="" id="" placeholder='Gmail' className=' outline-none border-2 border-blue-600 rounded-lg h-10 w-80 ps-3' /></tr>
                            <tr className=''>Password: <input onChange={handlePassword} type="password" name="" id="" placeholder='Password' className=' outline-none border-2 border-blue-600 rounded-lg h-10 w-80 ps-3' /></tr>
                            <tr className=''><button onClick={handleSubmit} className=' flex justify-center mt-4 py-2 px-10 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg'> Submit</button></tr>
                        </td>
                    </table>
                    </form>
                </div>
        </div>
    </>
  )
}

export default Banner
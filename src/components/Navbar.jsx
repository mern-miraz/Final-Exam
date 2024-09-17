import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className=' container mx-auto justify-center flex h-16 items-center bg-gradient-to-r from-sky-500 to-indigo-500'>
            <div className="">
                <ul className=' flex gap-x-9 text-white font-normal text-2xl'>
                    <li className='cursor-pointer'> <Link to="/">Home</Link></li>
                    <li className=' cursor-pointer'> <Link to="/user">User</Link></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    // lets make the functional mobile nav
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    
  return (
    <div className='max-w-full text-white flex justify-between items-center p-4 px-8'>
        <h1 className='w-full text-3xl font-bold'>React.</h1>
        <div className='hidden space-x-4 md:flex'>
            <a className='text-xl p-2' href="#">Home</a>
            <a className='text-xl p-2' href="#">Company</a>
            <a className='text-xl p-2' href="#">Resources</a>
            <a className='text-xl p-2' href="#">About</a>
            <a className='text-xl p-2' href="#">Contact</a>
        </div>
        {/* To create a functional mobile nav, we use a tenerary operation (condtionals) */}
        <div onClick={handleNav} className='block justify-center items-center md:hidden'>
            {!nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/> }
        </div>
        <div className={!nav ? 'fixed left-[-100%]' :'flex flex-col h-full pt-4 fixed left-0 top-0 w-1/2 border-r border-r-gray-900 bg-bkg transition-all ease-in-out duration-500 md:hidden'} >
            <h1 className='w-full text-3xl font-bold px-8 text-primary'>React.</h1>
            <div className='flex flex-col pt-10'>
                <a className='text-xl px-8 p-2 border-b border-gray-900' href="#">Home</a>
                <a className='text-xl px-8 p-2 border-b border-gray-900' href="#">Company</a>
                <a className='text-xl px-8 p-2 border-b border-gray-900' href="#">Resources</a>
                <a className='text-xl px-8 p-2 border-b border-gray-900' href="#">About</a>
                <a className='text-xl px-8 p-2' href="#">Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
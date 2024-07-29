import React, { useState } from 'react'
import { IoReorderThreeSharp } from 'react-icons/io5'
import { IoSearch } from 'react-icons/io5'
import { IoCartOutline } from 'react-icons/io5'
import { MdFavoriteBorder, MdOutlineClose } from 'react-icons/md';
import { FaHome } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";

function Navbar() {
    const [nav, setNav]=useState(true);
  return (
    <div className='shadow-md'>
        <div className='max-w-[1140px] mx-auto justify-between flex items-center p-4'>
            <div className='flex items-center'>
                <div className='cursor-pointer gap-2'>
                    <IoReorderThreeSharp size={30} onClick={()=>setNav(!nav)}/>
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl cursor-pointer mx-1 font-bold text-green-600'>Foodie</h1>
            </div>

            {
                nav?(
                    <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>

                    </div>
                )
                :
                (
                    ""
                )
            }
            <div className={nav ?"fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-300px] w-[300px] h-screen bg-white z-10 duration-300"}>
                <MdOutlineClose onClick={()=>setNav(!nav)} size={30} className='absolute right-4 cursor-pointer my-4'/>

                <h2 className='text-2xl p-4 text-center font-bold text-green-600'>Foodie</h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-2 flex '>
                            <FaHome size={25} className='mr-4'/>
                            <a href="#home">Home</a>
                        </li>
                        <li className='text-xl py-2 flex '>
                            <MdFavoriteBorder size={25} className='mr-4'/>
                            <a href="#best-sellers">Best Sellers</a>
                        </li>
                        <li className='text-xl py-2 flex '>
                            <MdMenuBook size={25} className='mr-4'/>
                            <a href="#menu">Menu</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar

import React from 'react'
import logo from '../assets/logo.svg'

const Hero = () => {
  return (
    <div className='max-w-[1140px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-4xl text-left md:text-5xl lg:text-7x; font-bold'>The <span className='text-green-600'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-4xl text-left md:text-5xl lg:text-7x; font-bold text-green-600'>Foods <span className='text-white'>In Town!</span></h1>
            </div>
            <img src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Logo" className='w-full max-h-[500px] object-cover' />
        </div>
    </div>
  )
}

export default Hero
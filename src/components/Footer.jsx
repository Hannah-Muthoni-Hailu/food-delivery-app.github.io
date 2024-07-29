import { FaUser } from 'react-icons/fa'
import { FaYoutube, FaFacebook, FaWhatsapp, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-green-300 w-full rounded-lg px-3'>
      <div className='max-w-[1140px] mx-auto px-4'>
        <div className='flex gap-4 justify-center py-8'>
          <div className='flex gap-4 relative w-[400px] hover:border-2 border-solid border-red-700 items-center rounded-lg h-[50px] bg-slate-700 px-3'>
            <FaUser className='items-center text-center cursor-pointer text-gray-300'/>
            <input type="text" placeholder='Enter you email' className='bg-slate-700 text-white rounded-lg outline-none w-full h-full text-[14px] font-small' />    
          </div>
          <button className='px-1 w-[180px] py-2 bg-gradient-to-r from-orange-400 via-green-400 to-red-300 rounded-xl cursor-pointer hover:border-2 border-solid border-black'>Subscribe</button>
        </div>
        <div className='flex justify-between items-center gap-4'>
          <div className='flex flex-col gap-2 py-4 mb-16 w-[30%]'>
            <span className='text-center text-[20px] py-4 cursor-pointer font-semibold items-center justify-center'>Foodie Website</span>
            <p className='font-light text-[14px] text-center'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
              Inventore odit esse natus ut adipisci? Velit itaque explicabo error <br /> 
              natus, tempora aut. Corrupti dolore adipisci quibusdam, in tempora enim <br />
              atque beatae.
            </p>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-[20px] font-semibold'>We are global</h2>
            <ul className='flex flex-col gap-4 py-4'>
              <li className='text-gray-700 text-[16px] cursor-pointer hover:text-black font-light'>Kenya</li>
              <li className='text-gray-700 text-[16px] cursor-pointer hover:text-black font-light'>Brazil</li>
              <li className='text-gray-700 text-[16px] cursor-pointer hover:text-black font-light'>USA</li>
              <li className='text-gray-700 text-[16px] cursor-pointer hover:text-black font-light'>UK</li>
              <li className='text-gray-700 text-[16px] cursor-pointer hover:text-black font-light'>India</li>
            </ul>
          </div>
          <div className='flex flex-col mb-40'>
            <h2 className='text-[20px] text-center font-bold'>Our Socials</h2>
            <ul className='flex gap-4 py-4'>
              <li className='text-gray-500 text-[16px] cursor-pointer hover:text-black hover-px-1'>
                <FaYoutube size={18} />
              </li>
              <li className='text-gray-500 text-[16px] cursor-pointer hover:text-black hover-px-1'>
                <FaFacebook />
              </li>
              <li className='text-gray-500 text-[16px] cursor-pointer hover:text-black hover-px-1'>
                <FaWhatsapp />
              </li>
              <li className='text-gray-500 text-[16px] cursor-pointer hover:text-black hover-px-1'>
                <FaLinkedin />
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className='py-3'>
          &copy; 2024 InnovaVirtus | All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
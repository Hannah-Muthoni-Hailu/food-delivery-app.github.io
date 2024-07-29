import React, { useState } from 'react'
import {data} from '../data/FoodData'

const Food = () => {
    const [food,setFood]=useState(data);

    const filterCategory=(category)=>{
        setFood(
            data.filter((item)=>{
                return item.category === category
            })
        )
    }

  return (
    <div className='max-w-[1140px] mx-auto px-4 py-12'>
        <h1 className='text-green-600 font-bold text-4xl text-center'>Our Menu</h1>
        <div className='flex justify-between flex-col lg:flex-row'>
            <div>
                <p className='font-bold text-green-600 text-2xl text-end'>Filter by Type</p>
                <div className='flex justify-end flex-wrap'>
                    <button onClick={()=>setFood(data)} className='m-1 border-orange-600 text-orange-500 hover:text-white hover:bg-orange-500 px-2 py-0.5 rounded-md'>All</button>
                    <button onClick={()=>filterCategory('Egg')} className='m-1 border-orange-600 text-orange-500 hover:text-white hover:bg-orange-500 px-2 py-0.5 rounded-md'>Egg</button>
                    <button onClick={()=>filterCategory('Potato')} className='m-1 border-orange-600 text-orange-500 hover:text-white hover:bg-orange-500 px-2 py-0.5 rounded-md'>Potato</button>
                    <button onClick={()=>filterCategory('Rice')} className='m-1 border-orange-600 text-orange-500 hover:text-white hover:bg-orange-500 px-2 py-0.5 rounded-md'>Rice</button>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 pt-4'>
            {food.map((items,index)=>(
                <div key={index} className='border shadow-2xl hover:scale-105 duration-300 rounded-lg'>
                    <img src={items.image} alt="food-image" className='w-full h-[200px] object-cover rounded-t-lg'/>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{items.name}</p>
                        <p className='text-green-600'>{items.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food
import React from 'react'
import {testimonials} from '../constants/index.jsx';

const Review = () => {
  return (
    <div className='mb-10'>
        <div className='text-center'>
            {/* title */}
            <h1 className='font-bold text-3xl mb-5 lg:mb-10'>What People are saying</h1>
        </div>
        <div >
            {/* cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5'>
                {testimonials.map((item,i)=>(
                    <div key={i} className=' bg-gray-800 p-5 rounded-lg hover:transform hover:scale-105 transition-all ease-in-out duration-500'>
                        <div className='mb-4'><p>{item.text}</p></div>
                        <div className='flex items-center gap-4'>
                            <img src={item.image} alt="" width={30} className='rounded-full' />
                            <h1 className='font-bold text-amber-200'>{item.user}</h1>
                        </div>
                        <h1 className='ml-11 text-blue-300'>{item.company}</h1>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Review
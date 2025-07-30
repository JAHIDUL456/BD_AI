import React from 'react'
import {features, pricingOptions} from '../constants/index.jsx';
import {CircleCheckBig} from 'lucide-react';

const Price = () => {
  return (
    <div className='mb-5'>


        <div className='text-center '>
            <h1 className='font-bold text-3xl lg:text-4xl'> <span className='bg-gradient-to-r from-blue-400 via-red-300 to-gray-200 bg-clip-text text-transparent'> Price Plans </span></h1>
        </div>
        <div className='flex flex-col items-center '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2 lg:mt-10 '>
            {/* eikhane ami card banabo */}

            {pricingOptions.map((item,i)=>(

                <div key={i} className='mb-5  ml-0 md:ml-10 border border-gray-400 rounded-lg p-5 hover:transform hover:scale-105 transition-all ease-in-out duration-500 hover:shadow-lg hover:border hover:border-amber-300'>

                    <h1 className='font-bold text-3xl mb-4'>{item.title}</h1>
                    <h1 className='mb-4'> <span className='font-bold text-2xl text-amber-300'>{item.price}</span> <span>/Month</span></h1>
                    <div>
                        
                        {item.features.map((feature,i)=>(
                            <div className='flex items-center mb-2 mt-2'>
                                <CircleCheckBig />
                            <p className='ml-2 mb-2' key={i}>{feature}</p>

                            </div>
                            ))}
                        
                    </div>
                            <div className='text-center'>
                            <button className='font-semibold p-2 mt-5 bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 cursor-pointer rounded-lg'>Get Started</button>
                            </div>
                            
                </div>
            ))}


            </div>

        </div>
        
    </div>
  )
}

export default Price
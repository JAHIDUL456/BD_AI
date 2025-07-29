import React from 'react'
import { features } from '../constants/index.jsx';

const Features = () => {
  return (
    <div className='mb-10 lg:mb-15'>
        <div>
            <div className='text-center'>
                {/* eikhane thakbe title  */}
                <h1 className='font-bold text-xl lg:text-2xl text-yellow-500 mb-4'>Features</h1>
                <h1 className='text-2xl bg-gradient-to-r lg:text-3xl from-blue-400 via-blue-300 to-orange-400 bg-clip-text text-transparent font-bold'>Make your VR dreams come true</h1>
            </div>
            <div>
                {/* eikhane thakbe baki sob  */}


                <div className='grid grid-cols-2 md:grid-cols-3 mt-15 p-4 gap-6'>
                    {features.map((items,id)=>(

                        <div key={id} className='flex flex-col justify-center p-4 hover:border-b hover:border-blue-400 transition-all ease-in-out duration-100'>
                            <div className='lg:flex items-center  mb-5 '>
                                <div className='mr-4 mb-4 ml-12  lg:pt-5'>
                                {items.icon}
                            </div>
                            <div>
                                <h1 className='text-orange-400 text-sm lg:text-md text-center'>{items.text}</h1>
                            </div>

                            </div>
                            <div>
                                <p className='text-center'>{items.description}</p>
                            </div>
                            
                        </div>
                    ))}
                    
                </div>
                <hr className='text-orange-950 mt-5' />
            </div>
        </div>
    </div>
  )
}

export default Features
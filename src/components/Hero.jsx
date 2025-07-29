import React from 'react'
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const Hero = () => {
  return (
    <div  className='mb-10 lg:mt-20 mt-20 lg:mb-20'>
        <div className='flex flex-col items-center'>
    
        <div className='text-center'>
            {/* main header  */} <h1 className='font-bold text-4xl lg:text-5xl '> <span className=' bg-gradient-to-r from-blue-400 via-blue-300 to-gray-200 bg-clip-text text-transparent'>Artificial Intelligence</span> For <span className='bg-gradient-to-r from-green-500 via-red-500 to-green-500 bg-clip-text text-transparent'>BANGLADESH</span> </h1>
        </div>
        <div className='text-center mt-10'>
            {/* sub description with two buttons */}
            <p className='px-5 lg:px-20 text-gray-300'>
                AI is transforming Bangladesh into a smart nation robots in banks, AI in farming, and chatbots in public service are no longer science fiction but real.

            </p>
        </div>
        <div className='mt-10 lg:mt-20'>
            {/* this div is for buttons */}
            <button className='mr-5 p-3 border-2 border-orange-500 cursor-pointer rounded-lg'>Try for Free</button>
            <button className='p-3 bg-gradient-to-r from-blue-600 via-blue-500 to-gray-500 cursor-pointer rounded-lg'>Learn More</button>
        </div>

        <div className='mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* this div is for the video  */}
            <video autoPlay muted loop className='w-full rounded-lg px-2 border border-green-400 ' >

                <source src={video1} type="video/mp4" />
            </video>

            <video autoPlay muted loop className='w-full rounded-lg px-2 border border-blue-400 ' >

                <source src={video2} type="video/mp4" />
            </video>

        </div>
    </div>
    </div>
  )
}

export default Hero
import React from 'react'
import images from '../assets/code.jpg';
import {BadgeCheck} from 'lucide-react';
import { checklistItems } from '../constants/index.jsx';

const Work = () => {
  return (
    <div className='mb-10'>
        <div className='text-center font-bold text-3xl mb-4'>

            <h1 className='p-2 lg:hidden block'>Accelerate your <br /> <span className='ml-2 bg-gradient-to-r from-orange-400 via-yellow-400 to-blue-500 bg-clip-text text-transparent'>website development</span></h1>
            <h1 className='p-2 hidden lg:block text-center'>Accelerate your  <span className='ml-2 bg-gradient-to-r from-orange-400 via-yellow-400 to-blue-500 bg-clip-text text-transparent'>website development</span></h1>



        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='mt-5 ml-0 md:ml-10'>
               {/* images */}
               <img src={images} alt="" width={450}/>
            </div>
            <div >
                 <div className='mt-10 lg:mt-30'>
                    {/* icon  */}
                    {checklistItems.map((item,id) => (
                        <div className='my-4  mt-5'>
                        <div key={id} className='flex items-center gap-2'>
                            <BadgeCheck />
                            <p className='font-bold text-orange-300'>{item.title}</p>
                            
                        </div>
                        <p>{item.description}</p>
                        
                        </div>
                    ))}


                </div>
               

            </div>
        </div>
    </div>
  )
}

export default Work
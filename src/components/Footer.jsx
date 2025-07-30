import React from 'react'
import {communityLinks} from '../constants/index.jsx';

const Footer = () => {
  return (
    <div className='max-w-3xl mx-auto p-5 flex justify-between'>
        <div >
            {communityLinks.map((item,i)=>(
                <div key={i}>
                    <div>
                        <a href={item.href}>{item.text}</a>
                    </div>
                   


                </div>
            ))}
             
        </div>
        <div>
                        <h1 className='font-bold text-xl'>MD. JAHIDUL ISLAM</h1>
                        <h1 className='text-sm font-bold'>Software Engineer</h1>
                        <h1><span>Email: </span> <span className='text-blue-400'>mdjahidulislam1n1@gmail.com</span></h1>
                        <h1><span>Github:</span> <a className='text-orange-400' href="https://github.com/JAHIDUL456">JAHIDUL456</a></h1>
                        <h1><span>Linkedin:</span> <a className='text-green-400' href="https://www.linkedin.com/in/jahid1n1/">jahidulislam</a></h1>
                    </div>

    </div>
  )
}

export default Footer
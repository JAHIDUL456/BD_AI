import React from 'react'
import logo from '../assets/logo.png';
import {Menu,X} from 'lucide-react';
import { useState } from 'react';
const Navbar = () => {

    const navitems=[{
        id:1,
        title:'Home',
        url:'/'
    },
    {
        id:2,
        title:'About',
        url:'/about'
    },
    {
        id:3,
        title:'Services',
        url:'/services'
    },
    {
        id:4,
        title:'Contact',
        url:'/contact'
    }
]


const [menu,setmenu]=React.useState(false);

const handle=()=>{

    setmenu(!menu);
}



  return (
    <div className='fixed w-full'>
        <nav className='py-2 px-5 lg:px-15 sticky top-0  z-50 backdrop-blur-md '>
            <div className='flex items-center justify-between'> 
                {/* main container section   */}
                <div className='inline-flex items-center gap-2'>
                    {/* logo+name  */}
                    <img src={logo} alt="" width={50} />
                    <span className='font-bold'>BD_AI</span>
                </div>
                <div className='hidden lg:block'>
                    {/* all links */}
                    {navitems.map((item,i)=>(
                        <a className='px-3 font-semibold hover:text-orange-400' key={i} href={item.url}>{item.title}</a>
                    ))}
                    <ul>

                    </ul>
                </div>
                <div className='flex  gap-2 mr-15'>
                    {/* buttons */}

                    <button className='hidden lg:block p-2 rounded-xl bg-orange-500' >Sign In</button>
                    <button className='hidden lg:block p-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Create an account</button>
                </div>
                <div className='lg:hidden'>
                    <button onClick={handle} className='p-2 rounded-xl bg-orange-500' >{menu?<X/>:<Menu/>}</button>
                </div>

                {menu &&(
                    <div className='fixed right-0 top-15 z-20 bg-neutral-900 w-full flex flex-col justify-center items-center p-12'>
                        <ul >
                            {navitems.map((item,i)=>(
                                <li key={i} className='py-2'>
                                    <a className='px-3 font-semibold '  href={item.url}>{item.title}</a>
                                </li>
                                
                                
                            ))}
                        </ul>
                        <div >
<button className='lg:hidden p-2 m-2 rounded-xl bg-orange-500' >Sign In</button>
                    <button className='lg:hidden p-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Create an account</button>
               
                        </div>
                        
                    </div>
                )}
            </div>
        </nav>





    </div>
  )
}

export default Navbar
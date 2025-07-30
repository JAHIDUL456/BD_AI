import React from 'react'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Work from './components/Work.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const App = () => {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);




  return (
    <div   >
      <Navbar />
      <div data-aos="zoom-in" className='max-w-5xl mx-auto pt-10 px-6 z-30'>
        <Hero />
      </div>
      <div data-aos="fade-up" className='max-w-6xl mx-auto pt-5 px-6 z-30'>
        <Features />
      </div>
      <div data-aos="fade-right" className='max-w-6xl mx-auto pt-10 px-6 z-30'>
        <Work />
      </div>
    </div>
  )
}

export default App
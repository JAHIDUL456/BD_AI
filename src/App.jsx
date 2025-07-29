import React from 'react'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';

const App = () => {
  return (
    <div   >
      <Navbar />
      <div className='max-w-5xl mx-auto pt-10 px-6'>
        <Hero />
      </div>
    </div>
  )
}

export default App
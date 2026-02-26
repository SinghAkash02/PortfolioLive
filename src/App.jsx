import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import Navbar from  './assets/components/layout/Navbar'
import Hero from './assets/components/sections/Hero'
import About from './assets/components/sections/About'
import Skills from './assets/components/sections/Skills'
function App() {
  return (
    <div className='min-h-screen bg-black pb-[100vh]'>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
      </main>
    </div>
  )
}

export default App
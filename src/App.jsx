import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import Navbar from './assets/components/layout/Navbar'
import Hero from './assets/components/sections/Hero'
import About from './assets/components/sections/About'
import Skills from './assets/components/sections/Skills'
import Projects from './assets/components/sections/Projects'
import Services from './assets/components/sections/Services'
import Testimonials from './assets/components/sections/Testimonials'
import Contact from './assets/components/sections/Contact'
import Footer from './assets/components/layout/Footer'
import ScrollToTop from "./assets/components/sections/ScrollToTop";
import WhatsAppButton from "./assets/components/sections/WhatsAppButton";

function App() {
  return (
    <div className='min-h-screen bg-black'>
      <Navbar />
      <main>
        <WhatsAppButton />
        <ScrollToTop />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
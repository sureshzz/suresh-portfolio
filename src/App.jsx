import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className=''>
      <Navbar />
      < About />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

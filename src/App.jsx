import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'

export default function App() {
  return (
    <div className=''>
      <Navbar />
      < About />
    </div>
  );
}

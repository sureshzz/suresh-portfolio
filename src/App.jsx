import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className='bg-blue-950 min-h-screen'>
        <Navbar />
    </div>
  );
}

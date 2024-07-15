import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import LocomotiveScroll from "locomotive-scroll";

export default function App() {

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div
       className="h-screen w-full bg-zinc-900"
    >
      <Navbar />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/src/locomotive-scroll.scss"; // Ensure to include the styles

export default function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.0, // Adjust the scrolling speed
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div
      className="h-screen w-full bg-zinc-900"
      data-scroll-container
      ref={scrollRef}
    >
      <Navbar />
      <section id="About" className="section" data-scroll-section>
        <About />
      </section>
      <section id="Portfolio" className="section" data-scroll-section>
        <Portfolio />
      </section>
      <section id="Skills" className="section" data-scroll-section>
        <Skills />
      </section>
      <section id="Contact" className="section" data-scroll-section>
        <Contact />
      </section>
    </div>
  );
}

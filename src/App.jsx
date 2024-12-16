import React, { useEffect, useRef } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import LocomotiveScroll from "locomotive-scroll";
import { useScroll } from "framer-motion";
// import "locomotive-scroll/src/locomotive-scroll.scss"; // Ensure to include the styles

export default function App() {
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

  let scrollRef = useRef();
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="h-[500vh] w-full bg-zinc-900 " ref={scrollRef}>
      <section id="Navbar" className="section">
        <Navbar scrollYProgress={scrollYProgress} />
      </section>
      <section id="About" className="section sticky top-0" data-scroll-section>
        <About scrollYProgress={scrollYProgress} />
      </section>
      <section
        id="Portfolio"
        className="section  sticky top-0"
        data-scroll-section
      >
        <Portfolio />
      </section>
      <section
        id="Skills"
        className="section  sticky top-0"
        data-scroll-section
      >
        <Skills />
      </section>
      <section
        id="Contact"
        className="section  sticky top-0"
        data-scroll-section
      >
        <Contact />
      </section>
    </div>
  );
}

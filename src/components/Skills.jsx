import React from 'react'
import { useScroll,motion,useTransform } from 'framer-motion';
import { useRef,useEffect } from 'react';
import html from '../assets/portfolio/html.png'
import css from '../assets/portfolio/css.png'
import js from '../assets/portfolio/vanillajs.png'
import reactjs from '../assets/portfolio/reactjs.png'
import tailwindcss from '../assets/portfolio/tailwindcss.png'
import python from '../assets/portfolio/python.png'
import mysql from '../assets/portfolio/mysql.png'
import mongo from '../assets/portfolio/mongo.png'
import github from '../assets/portfolio/github.png'
import django from '../assets/portfolio/django.png'
import laravel from '../assets/portfolio/laravel-logo-1.png'

const Skills = () => {

  const skill = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: js,
      title: "Javascripts",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: reactjs,
      title: "Reactjs",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: mongo,
      title: "MongoDB",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: mysql,
      title: "Mysql",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: github,
      title: "Github",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: tailwindcss,
      title: "Tailwindcss",
      style: "shadow-orange-500",
    },
    {
      id: 9,
      src: python,
      title: "Python",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: django,
      title: "Django",
      style: "shadow-orange-500 pt-10",
    },
    {
      id: 11,
      src: laravel,
      title: "Laravel",
      style: "shadow-orange-500",
    },
  ];

  const container = useRef(null);

  const {scrollYProgress} = useScroll({
    target:container,
    offset:["start end","end start"]
  })

useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      console.log("scrollYProgress value:", value); // This will now print correctly
    });
    return () => unsubscribe();
  }, [scrollYProgress]);


    const scale = useTransform(scrollYProgress, [0, 0.45], [0.75,1]);
  const rotate = useTransform(scrollYProgress, [0, 0.45], [-7,0]);


  return (
    <motion.div style={{scale,rotate}} ref={container}
       className="bg-gradient-to-b from-gray-800 to-black w-full relative"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 text-xl">I am comfort with:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skill.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto"></img>
              <p className="mt-4 ">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills

import { motion, useScroll,useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const About = () => {

  const container = useRef(null);
  const commoncss = "text-zinc-400 text-6xl font-semibold";
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.75,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };


//   const {scrollYProgress} = useScroll({
//     target:container,
//     offset:["start end","end start"]
//   })
// useEffect(() => {
//     const unsubscribe = scrollYProgress.onChange((value) => {
//       console.log("scrollYProgress value:", value); // This will now print correctly
//     });
//     return () => unsubscribe();
//   }, [scrollYProgress]);
  // const scale = useTransform(scrollYProgress, [0, 0.5], [1,0.5]);
  // const rotate = useTransform(scrollYProgress, [0.49, 0.5], [0,-7]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [-7, 1]);
  //  const rotate = useTransform(scrollYProgress, [0, 1], [0,0]);
  return (
    <motion.div
      className="bg-gradient-to-b  from-gray-800 to-black w-full h-screen sticky top-0"
      ref={container}
    >
      <motion.div
        className=""
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className={`${commoncss} text-6xl font-[Oswald] text-zinc-200 leading-loose font-extrabold`}
          variants={itemVariants}
        >
          NAMASKAR !!!
        </motion.h2>
        <motion.h2
          variants={itemVariants}
          className={`${commoncss} font-semibold`}
        >
          I am Suresh Thapamagar.
        </motion.h2>
        <motion.h2 variants={itemVariants} className={`${commoncss} `}>
          A so-called fullstack Developer.
        </motion.h2>
        <motion.p className={`${commoncss} `} variants={itemVariants}>
          React.js enables me to build responsive and user-friendly interfaces,
          while my proficiency in Django allows me to develop efficient and
          scalable server-side solutions.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;

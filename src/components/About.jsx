import React from 'react'

const About = () => {
  const commoncss = ""
  return (
    <div className="min-w-full">
      <div className="flex flex-col justify-center items-center border border-black m-4 p-3 bg-gradient-to-b">
        <h2
          className={`${commoncss}text-center text-2xl border border-red-800 `}
        >
          Namaskar,from Suresh Thapamagar.
        </h2>
        <h2
          className={`${commoncss}text-center text-2xl border border-red-800`}
        >
          I am a fullstack Developer
        </h2>
        <p className={`${commoncss}text-center text-2xl border border-red-800`}>
          React.js enables me to build responsive and user-friendly interfaces,
          while my proficiency in Django and Node.js/Express.js allows me to
          develop efficient and scalable server-side solutions.
        </p>
      </div>
    </div>
  );
}

export default About

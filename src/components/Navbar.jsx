import React from 'react'

const Navbar = () => {
  const elementCSS =
    "text-white p-4 m-4 hover:scale-100 hover:scale-110 duration-50 cursor-pointer hover:underline";
  return (
    <div>
      <div className=" bg-slate-900  h-20 w-full flex flex-row justify-between justify-items-center">
        <div className="font-logo text-white w-40">
          <h1 className='text-5xl mx-1 p-4'>Suresh</h1>
        </div>
        <ul className=" flex flex-row ">
          <li className={`${elementCSS}`}>About</li>
          <li className={`${elementCSS}`}>Work</li>
          <li className={`${elementCSS}`}>Contact</li>
        </ul>
      </div>
    </div>
  );
} 

export default Navbar

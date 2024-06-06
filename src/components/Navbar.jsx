import React, { useState } from "react";
import "../App.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const elementCSS =
    "hover:scale-100 hover:scale-110 duration-50 cursor-pointer hover:text-white px-4";
  const links = [
    { id: 1, link: "About" },
    { id: 2, link: "Works" },
    { id: 3, link: "Skills" },
    { id: 4, link: "Contact" },
  ];

  return (
      <div className=" bg-slate-900  h-20 w-full flex flex-row justify-between items-center px-4">
        <div className="font-logo text-white">
          <h1 className="text-5xl mx-1 p-4 hover-rotate-360 duration-100">
            Suresh
          </h1>
        </div>
        <ul className="hidden md:flex flex-row text-gray-400 gap-2">
          {links.map(({ id, link }) => (
            <li className={`${elementCSS}`} key={id}>
              {link}
            </li>
          ))}
        </ul>
        <div
          className="md:hidden cursor-pointer pr-0.4 z-10 text-white"
          onClick={() => {
            setnav(!nav);
          }}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className=" h-screen w-full flex flex-col justify-center items-start text-white bg-red-300 absolute top-0 right-0">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="cursor-pointer text-2xl text-white"
              >
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
  );
};

export default Navbar;

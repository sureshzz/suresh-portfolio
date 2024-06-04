import React from 'react'

const Navbar = () => {
  const elementCSS = "mx-6 text-white"
  return (
    <div>
      <div>
        <ul className='flex flex-row justify-end p-4 bg-transparent'>
          <li className={`${elementCSS}`}>About</li>
          <li className={`${elementCSS}`}>Work</li>
          <li className={`${elementCSS}`}>Contact</li>
        </ul>
      </div>
    </div>
  )
} 

export default Navbar

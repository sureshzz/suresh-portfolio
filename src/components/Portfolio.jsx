import React from 'react'
import ecomm from "../assets/portfolio/ecommerce.png" 
import ecomm1 from "../assets/portfolio/ecommerce 1.png" 
import ecomm2 from "../assets/portfolio/ecommerce 2.png" 
import ecomm3 from "../assets/portfolio/ecommerce3.png" 

const Portfolio = () => {
  const portfolios = [
    {
      id: 0,
      src: ecomm,
    },
    {
      id: 1,
      src: ecomm,
    },
    {
      id: 2,
      src: ecomm,
    },
    {
      id: 3,
      src: ecomm,
    },
  ];
  return (
    <div>
      <h1>Portfolio</h1>
      <p> My projects</p>
      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {
          portfolios.map(({id,src}) =>(
            <div key={id} className='shadow-md shadow-gray-700 rounded-lg'>
            <img
              src={src}
              className="rounded-md duration-200 hover:scale-105"
            />
            <button className='w-1/2 py-3 m-4 mx-32 duration-200 hover:scale-110 bg-blue-600'>Code</button>
            </div>
          ))
          }
          
          
        </div>
      </div>
    </div>
  );
}

export default Portfolio

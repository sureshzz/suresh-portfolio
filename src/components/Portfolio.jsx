import React from 'react'
import ecomm from "../assets/portfolio/ecommerce.png" 
import major from "../assets/portfolio/major.png"
import minor from "../assets/portfolio/minor.png"
import theatre from "../assets/portfolio/theatre-booking.png";
import LocomotiveScroll from "locomotive-scroll";


const Portfolio = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const goToRepo = (url)=>{
    window.open(url,"__blank")
  }
  const portfolios = [
    {
      id: 0,
      src: ecomm,
      title: "Ecommerce-site",
      Description: "Built using Django, Html,Css,JavaScripts",
      Repourl:"https://github.com/sureshzz/ecommerce-site"
    },
    {
      id: 1,
      src: major,
      title: "Biometric-Voting System",
      Description: "Built using Django and ReactJS",
      Repourl:"https://github.com/sureshzz/Biometricvoting_system"

    },
    {
      id: 2,
      src: minor,
      title: "Weather-Prediction App",
      Description: "Built using nodeJS , ExpressJS",
      Repourl:"https://github.com/sureshzz/Weather-Prediction"

    },
    {
      id: 3,
      src: theatre,
      title: "Movie-Booking System",
      Description: "Built using ExpressJS, nodeJS",
      Repourl:"https://github.com/sureshzz/Theatre-booking-system"

    },
  ];
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full flex justify-center">
      <div className="max-w-screen-lg flex-col justify-center w-full h-full text-white p-3 ">
          <h1 className="my-[2vw] font-bold font-[Roboto] text-4xl leading-tighter text-zinc-200">
            My works
          </h1>
          {/* <p className='text-center font-[Roboto] text-2xl p-2 text-zinc-400'> My projects</p> */}
          <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0">
              {portfolios.map(({ id, src, title, Description,Repourl }) => (
                <div key={id} className="shadow-md shadow-gray-700 rounded-lg">
                  <img
                    src={src}
                    className="rounded-md duration-200 hover:scale-105 h-[30vh] w-[50vw]"
                  />
                  <p className='text-xl font-bold'>{title}</p>
                  <p className='text-base text-zinc-300'>{Description}</p>
                  <button className="w-[90%] h-[7vh] m-3 duration-200 hover:scale-110 bg-blue-600 rounded-full" onClick={()=>goToRepo(Repourl)}>
                    Code
                  </button>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}

export default Portfolio

import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p>contact form </p>
          <p>Want to talk?Let's talk</p>
        </div>

        <div className=''>
          <form action="" className='flex flex-col'>
            <input
              type="text"
              placeholder="Enter your name."
              className="bg-transparent border-2 rounded-md p-2 m-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Enter your E-mail."
              className="bg-transparent border-2 rounded-md p-2 m-2 focus:outline-none"
            />
            <textarea
              placeholder="Leave a message."
              className="bg-transparent border-2 rounded-md p-2 m-2 focus:outline-none resize-y"
            />
            <button className='border-hidden rounded-lg text-lg my-2 p-2 w-1/4 bg-gradient-to-r from-black to-blue-950 '>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact

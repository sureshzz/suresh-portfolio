import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto flex-col justify-center w-full h-full text-white">
        <div className="py-8 ">
          <p className="text-4xl inline font-bold border-b-4 border-gray-600">
            Contact Form
          </p>
          <p className="py-4">Want to talk?Let's talk</p>
        </div>
        <div className="flex ">
          <form action="" className="flex flex-col w-full md:w-1/2 gap-3">
            <input
              type="text"
              placeholder="Enter your name."
              className="bg-transparent border-2 rounded-md p-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Enter your E-mail."
              className="bg-transparent border-2 rounded-md p-2 focus:outline-none"
            />
            <textarea
              placeholder="Leave a message."
              className="bg-transparent border-2 rounded-md p-2 h-[40vh] focus:outline-none resize-y"
            />
            <button className="border-hidden rounded-lg text-lg my-2 p-2 w-1/4 bg-gradient-to-r from-black to-blue-950 hover:scale-105">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

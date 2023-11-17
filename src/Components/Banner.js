import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div className="bg-[#2699fb] p-[50px] w-full mx-auto flex justify-center items-center" >
      <div className="max-w-[1400px] text-center font-bold my-auto md:h-[63vh]">
        <div className="text-xl md:text-4xl p-2 md:mb-[45px]">
          Learn With us
        </div>
        <h2 className="text-white text-3xl p-2 md:text-[80px] md:mb-[45px]">
          Grow with us
        </h2>
        <div className=" text-white text-2xl md:text-4xl  p-2 md:mb-[45px]">
          Learn
          <Typed
            className="pl-4"
            strings={["Web Development", "Ethical Hacking", "Data Science"]}
            typeSpeed={80}
            backSpeed={60}
            backDelay={10}
            loop
          />
        </div>
        <button className="text-white bg-black rounded m-2 p-3 md:text-xl text-[15px]">Get Started</button>
      </div>
    </div>
  );
}

export default Banner

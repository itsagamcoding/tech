import React from 'react'
import Laptop from '../Assets/expert.jpg'

const Experts = () => {
  return (
    <div className="max-w-[1240px] my-[100px] mx-auto md:grid md:grid-cols-3">
      <div className="md:col-span-1 text-center">
        <img src={Laptop} alt="experts" className='inline-block md:w-[100%] md:h-[100%] w-[50%] h-[50%]'/>
      </div>

      <div className="col-span-2 flex flex-col justify-center m-4 md:ml-[20%]">
        <h1 className=' text-green-400 font-bold text-2xl md:text-3xl m-3'>Learn From Experts</h1>
        <p className='m-3 text-justify text-[12px] md:text-[1.2vw]'>
          These experts bring a wealth of experience and insights, ensuring that
          your educational journey is not only informative but also
          transformative. Get ready to be inspired, challenged, and guided by
          the very best in the field as we embark on this journey of knowledge
          together.
        </p>
        <button className='md:w-[30%] w-[50%] text-white bg-black rounded p-3 m-3'>Get Started</button>
      </div>
    </div>
  );
}

export default Experts

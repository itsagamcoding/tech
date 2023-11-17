import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-[#2699fb] p-[30px] sm:p-[50px] md:p-[70px] lg:p-[90px]'>
      <div className='flex sm:flex-row flex-col justify-between items-center gap-10'>
        <div>
          <h1 className='text-white text-2xl md:text-2xl lg:text-4xl font-bold mb-3'>Want to get latest tech News ?</h1>
          <p className='text-white lg:text-xl'>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div>
          <div className='flex gap-5 mb-5 justify-center sm:justify-between sm:w-full'>
            <input type="email" className='rounded-md p-1 lg:p-3 w-[50%] sm:w-[60%]' placeholder='Enter Email' />
            <button className='bg-black text-gray-200 rounded-md lg:p-4 w-[20vw] sm:w-[80px] md:w-[100px] lg:w-[150px]'>Notify Me</button>
          </div>
          <p className='text-white text-[12px] lg:text-[16px]'>We care about the protection of your data</p>
          <p className='font-semibold text-gray-800'>Read our Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter

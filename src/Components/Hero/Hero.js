import React from 'react'
import img from '../img/illustration-intro.svg'

const Hero = () => {
  return (
    <>

      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 ">
        {/*-----------Left-Item-------------- */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left '>
            Bring everyone together to build better products.
          </h1>
          <p className="max-w-sm text-center text-gray-400 md:text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis architecto numquam commodi vel sint excepturi alias amet minima dignissimos quis.</p>
          <div className="flex justify-center md:justify-start">
            <a href="" className="p-3 px-6 pt-2 text-white bg-red-400 rounded-full baseline hover:bg-red-500 ">Get Started</a>
          </div>
        </div>
        {/* ------------Image-------------- */}
        <div className='md:w-1/2'>
          <img src={img} alt="intro" />
        </div>
      </div>

    </>
  )
}

export default Hero
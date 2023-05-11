import React from 'react'
import logo from '../img/logo.svg'

const Navbar = () => {
  return (
    <>

      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img src={logo} alt="logo" />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className='hover:text-gray-400'>Pricing</a>
            <a href="#" className='hover:text-gray-400'>Product</a>
            <a href="#" className='hover:text-gray-400'>About Us</a>
            <a href="#" className='hover:text-gray-400'>Careers</a>
            <a href="#" className='hover:text-gray-400'>Community</a>
          </div>
          <a href="" className="hidden md:block p-3 px-6 pt-2 text-white bg-red-400 rounded-full baseline hover:bg-red-500">Get Started</a>
        </div>
      </nav>

    </>
  )
}

export default Navbar
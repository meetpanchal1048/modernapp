import React from 'react'
import anisha from '../img/avatar-anisha.png'
import shanai from '../img/avatar-shanai.png'
import richard from '../img/avatar-richard.png'

const Testom = () => {
    return (
        <>

            <section id="testimonials">
                <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                    <h2 className="text-4xl text-bold text-center">
                        What's Different About Manage?
                    </h2>
                    {/* Testimonial Container */}
                    <div className="flex flex-col mt-24 md:flex-row md:space-x-6 ">
                        {/* Testimonial One */}
                        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg md:w-1/3 bg-gray-200">
                            <img src={anisha} className='w-16 -mt-14' alt="avtar1" />
                            <h5 className='text-lg font-bold'>Anisha</h5>
                            <p className="text-sm text-grey-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat odio obcaecati incidunt ex tempora voluptate harum impedit facilis voluptatibus nesciunt?</p>
                        </div>

                        {/* Testimonial Two */}
                        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:flex md:w-1/3">
                            <img src={shanai} className='w-16 -mt-14' alt="avtar1" />
                            <h5 className='text-lg font-bold'>Shanai</h5>
                            <p className="text-sm text-grey-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat odio obcaecati incidunt ex tempora voluptate harum impedit facilis voluptatibus nesciunt?</p>
                        </div>

                        {/* Testimonial Three */}
                        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:flex md:w-1/3">
                            <img src={richard} className='w-16 -mt-14' alt="avtar1" />
                            <h5 className='text-lg font-bold'>Richard</h5>
                            <p className="text-sm text-grey-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat odio obcaecati incidunt ex tempora voluptate harum impedit facilis voluptatibus nesciunt?</p>
                        </div>
                    </div>
                    <div className="my-16">
                        <a href="" className=" hidden md:block p-3 px-6 pt-2 text-white bg-red-400 rounded-full baseline hover:bg-red-500">Get Started</a>
                    </div>
                </div>
            </section>

            <section id='cta' className=' bg-orange-600'>
                <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:p-12 md:flex-row md:space-y-0">
                    <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
                        Simplify how your team works
                    </h2>
                    <div className="flex justify-center md:justify-start">
                        <a href="" className="p-3 px-6 pt-2 text-white bg-black rounded-full baseline hover:bg-red-500 ">Get Started</a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Testom
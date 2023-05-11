import React from 'react'

const Feature = () => {
    return (
        <>

            <section id="features">
                <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                    {/* ----------whats different----------- */}
                    <div className='flex flex-col space-y-12 md:w-1/2 '>
                        <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
                            What's different about Manage?
                        </h2>
                        <p className="max-w-sm text-center md:text-left text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sequi quo aperiam dicta recusandae incidunt expedita a laudantium omnis dolor.
                        </p>
                    </div>

                    {/* ------Numbered List-------- */}
                    <div className='flex flex-col space-y-8 md:w-1/2'>
                        {/* -------List Item 1-------- */}
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row ">
                            <div className="rounded-l-full bg-orange-100 md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-600">01</div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        Track Company-Wide Process.
                                    </h3>
                                </div>
                            </div>
                            <div className='flex-row'>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">Track Company-Wide Process.</h3>
                                <p className="text-grey-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ab ipsa corrupti consectetur at iusto nemo quam nam, harum autem?</p>
                            </div>
                        </div>

                        {/* -------List Item 2-------- */}
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row ">
                            <div className="rounded-l-full bg-orange-100 md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-600">02</div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        Track Company-Wide Process.
                                    </h3>
                                </div>
                            </div>
                            <div className='flex-row'>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">Advance Build Report.</h3>
                                <p className="text-grey-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ab ipsa corrupti consectetur at iusto nemo quam nam, harum autem?</p>
                            </div>
                        </div>

                        {/* -------List Item 3-------- */}
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row ">
                            <div className="rounded-l-full bg-orange-100 md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-600">03</div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        Track Company-Wide Process.
                                    </h3>
                                </div>
                            </div>
                            <div className='flex-row'>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">Eveything You Need At One Place.</h3>
                                <p className="text-grey-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ab ipsa corrupti consectetur at iusto nemo quam nam, harum autem?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Feature
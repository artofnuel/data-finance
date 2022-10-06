import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className="w-full h-[450px] mx-auto text-center flex flex-col justify-center items-center md:-mt-24 md:h-screen">
            <p className='uppercase text-primary font-bold p-2'>Growning with Data Analytics.</p>
            <h1 className="text-4xl font-bold md:text-5xl">Growning with Data</h1>
            <div>
                <p className="text-xl font-bold md:text-5xl">Fast, Flexible Financing For
                  <Typed className='text-primary pl-4' strings={['BTB', 'BTC', "SASS"]} typeSpeed={120} backSpeed={130} loop />
                </p>
            </div>
            <p className='text-xl text-gray-600 md:text-2xl p-2 px-4'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
            <button className='bg-primary text-bkg w-[200px] rounded text font-semibold p-3 my-3 transition-all ease-in-out duration-300 hover:border hover:border-primary hover:bg-bkg hover:text-white'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero
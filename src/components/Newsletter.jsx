import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 px-3 gap-6">
            <div className='md:col-span-2 flex flex-col md:items-start'>
              <h2 className='text-xl font-bold md:text-3xl'>Want tips & tricks to optimize your flow?</h2>
              <p className='text-left'>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='space-y-4'>
              <div className='flex flex-col justify-between space-y-4 items-center lg:flex-row md:px-0 lg:space-y-0 md:space-x-4'>
                <input type="email" placeholder='Enter Email' className='p-3 flex rounded w-full text-bkg outline-none md:w-3/5' />
                <button className='bg-primary text-bkg rounded text font-semibold p-3 transition-all ease-in-out duration-300 hover:border hover:border-primary hover:bg-bkg hover:text-white'>Get Started</button>
              </div>
              <p className='text-center md:text-left'>We care about the protection of your data. 
                <br className='md:hidden' />
                <a className='text-primary pl-2' href="#">Read our Privacy Policy</a>
              </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
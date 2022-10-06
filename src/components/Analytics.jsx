import React from 'react'
import laptop from './assets/work_illustration.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className="max-w-5xl mx-auto grid gap-4 justify-center items-center md:grid-cols-2">
            <img className='w-[500] mx-auto my-4' src={laptop} alt="work illustration" />
            <div className='p-4 flex flex-col justify-center'>
                <p className='text-primary text-lg font-bold'>Data Analytics Dashboard</p>
                <h2 className='text-bkg font-bold text-2xl lg:text-4xl py-2'>Manage Data Analytics Centrally</h2>
                <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quo impedit provident dolores officia obcaecati quaerat, 
                    dolor blanditiis natus consectetur delectus sequi, vero pariatur, 
                    ducimus quasi ipsa corporis sed repudiandae unde!
                </p>
                <button className='text-primary bg-bkg w-[200px] rounded text font-semibold p-3 my-3 transition-all ease-in-out duration-300 hover:border hover:border-primary hover:bg-white hover:text-bkg'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics
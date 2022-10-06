import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-primary'>React.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ratione pariatur eos neque possimus. Accusantium nostrum veritatis eius eum 
            voluptas inventore.
            </p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaDribbbleSquare size={30} className='hover:text-primary' />
                <FaFacebookSquare size={30} className='hover:text-primary' />
                <FaGithubSquare size={30} className='hover:text-primary' />
                <FaInstagram size={30} className='hover:text-primary' />
                <FaTwitterSquare size={30} className='hover:text-primary' />
            </div>
        </div>
        <div className="md:col-span-2 flex justify-between mt-8">
            <div className='flex flex-col font-semibold'>
                <h2>Solutions</h2>
                <a className='text-xl py-2 hover:text-primary' href="#">Analytics</a>
                <a className='text-xl py-2 hover:text-primary' href="#">Marketing</a>
                <a className='text-xl py-2 hover:text-primary' href="#">Commerce</a>
                <a className='text-xl py-2 hover:text-primary' href="#">Insight</a>
            </div>
            <div className='flex flex-col font-semibold'>
                <h2>Support</h2>
                <a className='text-xl py-2 hover:text-primary' href="#">Pricing</a>
                <a className='text-xl py-2 hover:text-primary' href="#">Documentation</a>
                <a className='text-xl py-2 hover:text-primary' href="#">Guides</a>
                <a className='text-xl py-2 hover:text-primary' href="#">API Status</a>
            </div>
            <div className='flex flex-col font-semibold'>
                <h2>Company</h2>
                <a className='text-xl py-2 hover:text-primary' href="#">About</a>
                <a className='text-xl py-2 hover:text-primary' href="#">Blog</a>
                <a className='text-xl py-2 hover:text-primary' href="#">Job</a>
                <a className='text-xl py-2 hover:text-primary' href="#">Press</a>
                <a className='text-xl py-2 hover:text-primary' href="#">Careers</a>
            </div>
            <div className='flex flex-col font-semibold'>
                <h2>Legal</h2>
                <a className='text-xl py-2 hover:text-primary' href="#">Claim</a>
                <a className='text-xl py-2 hover:text-primary' href="#">Policy</a>
                <a className='text-xl py-2 hover:text-primary' href="#">Terms</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
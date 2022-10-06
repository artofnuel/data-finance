import React from 'react'
import single from './assets/single.png'
import double from './assets/double.png'
import triple from './assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] bg-white text-bkg'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-y-14 md:gap-y-0 md:gap-8 p-6 md:p-0'>
            <div className="w-full my-8 flex flex-col rounded-xl text-center shadow-2xl transition-all hover:scale-105 duration-500">
                <img className='w-16 mx-auto -mt-8 p-2 bg-white rounded-lg border-4 border-primary' src={single} alt="/" />
                <h2 className='text-2xl font-bold py-8'>Single User</h2>
                <p className='text-4xl font-bold'>$149</p>
                <div className='font-medium my-6'>
                    <h2 className='py-2 border-b mx-8'>500 GB Storage</h2>
                    <h2 className='py-2 border-b mx-8'>1 Granted User</h2>
                    <h2 className='py-2 border-b mx-8'>Send Up to 2 GB</h2>
                </div>
                <div>
                    <button className='bg-primary text-bkg rounded text font-semibold p-3 my-6 px-16 transition-all ease-in-out duration-300 hover:border hover:border-primary hover:bg-bkg hover:text-white'>Start Trial</button>
                </div>
            </div>
            <div className="w-full flex flex-col rounded-xl text-center shadow-2xl transition-all hover:scale-105 duration-500">
                <img className='w-16 mx-auto -mt-8 p-2 bg-white rounded-lg border-4 border-primary' src={double} alt="/" />
                <h2 className='text-2xl font-bold py-8'>Two Users</h2>
                <p className='text-4xl font-bold'>$149</p>
                <div className='font-medium my-6'>
                    <h2 className='py-2 border-b mx-8'>500 GB Storage</h2>
                    <h2 className='py-2 border-b mx-8'>1 Granted User</h2>
                    <h2 className='py-2 border-b mx-8'>Send Up to 2 GB</h2>
                </div>
                <div>
                    <button className='bg-bkg text-primary rounded text font-semibold p-3 my-6 px-16 transition-all ease-in-out duration-300 hover:bg-primary hover:text-white'>Start Trial</button>
                </div>
            </div>
            <div className="w-full my-8 flex flex-col rounded-xl text-center shadow-2xl transition-all hover:scale-105 duration-500">
                <img className='w-16 mx-auto -mt-8 p-2 bg-white rounded-lg border-4 border-primary' src={triple} alt="/" />
                <h2 className='text-2xl font-bold py-8'>Multiple Users</h2>
                <p className='text-4xl font-bold'>$149</p>
                <div className='font-medium my-6'>
                    <h2 className='py-2 border-b mx-8'>500 GB Storage</h2>
                    <h2 className='py-2 border-b mx-8'>1 Granted User</h2>
                    <h2 className='py-2 border-b mx-8'>Send Up to 2 GB</h2>
                </div>
                <div>
                    <button className='bg-primary text-bkg rounded text font-semibold p-3 my-6 px-16 transition-all ease-in-out duration-300 hover:border hover:border-primary hover:bg-bkg hover:text-white'>Start Trial</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
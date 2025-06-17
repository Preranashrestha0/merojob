import React from 'react'
import Image from 'next/image'
import heroimage from '../../public/hero.jpeg'
import cardexpenes from '../../public/card-expenses.png'
import airbnb_logo from '../../public/airbnb.svg'
import ibm_logo from '../../public/ibm.svg'
import google_logo from '../../public/google.svg'

import { MdArrowOutward } from "react-icons/md";


const HomePage = () => {
  return (
    <div className='grid gap-5 md:grid-cols-2 mt-10'>
        <div className='grid grid-rows-4 pl-16 gap-4'>
            <div className='flex flex-col gap-5 items-start row-span-2'>
                <a className='bg-[#eff8ee] text-green-800 p-2 text-xs w-fit rounded-md'> INNOVATIVE FINTECH SOLUTIONS</a>
                 <p className='font-medium  text-6xl text-black'>Secure, Efficient, and User-Friendly Financial Services</p>
                 <p className='text-gray-700'>Experience the future of finance with our secure, efficient, and user-friendly financial services.</p>
            </div>
            <div className='grid grid-cols-3 items-start gap-2'>
               <button className='bg-[#215c5c] rounded-md px-4 py-2 font-semibold text-lg'>Get started Now</button>
               <button className='flex flex-row bg-white text-gray-600 rounded-md px-4 py-2 font-semibold border-2 border-gray-300'>
                    <a> Learn More  </a>
                    <a><MdArrowOutward /></a>
                   
                </button>
            </div>
            <div className='grid grid-rows-2 gap-2 items-start row-start-4 '> 
                <p className='text-[#376c6c] text-sm'>TRUSTED BY MAJOR COMPANIES WORLWIDE</p>
                <div className='flex flex-row gap-4 '>
                     <Image
                    src={airbnb_logo}
                    alt="Picture of the author"
                    className=' rounded-2xl w-24'
                    />
                     <Image
                    src={ibm_logo}
                    alt="Picture of the author"
                    className=' rounded-2xl w-24'
                    />
                     <Image
                    src={google_logo}
                    alt="Picture of the author"
                    className=' rounded-2xl w-24'
                    />
                </div>
            </div>
        </div>
        <div className=''>
            <Image
                    src={heroimage}
                    alt="Picture of the author"
                    className=' rounded-2xl m-5 w-4/5 relative -z-10'
                    />
                <Image
                    src={cardexpenes}
                    alt="Picture of the author"
                    className=' rounded-2xl m-5 w-2/6 absolute z-20'
                    />
        </div>
    </div>
  )
}

export default HomePage
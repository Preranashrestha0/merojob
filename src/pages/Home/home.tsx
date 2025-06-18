import React from 'react'
import Image from 'next/image'
import heroimage from '../../public/hero.jpeg'
import cardexpenes from '../../public/card-expenses.png'
import airbnb_logo from '../../public/airbnb.svg'
import ibm_logo from '../../public/ibm.svg'
import google_logo from '../../public/google.svg'

import { MdArrowOutward } from "react-icons/md";
import { Button } from '@/components/ui/button'


const HomePage = () => {
  return (
    <div className='grid gap-5 md:grid-cols-2 mt-10'>
        <div className='grid grid-rows-4 gap-4 h-fit'>
            <div className='flex flex-col gap-5 items-start row-span-2 '>
               <Button variant={'destructive'}>INNOVATIVE FINTECH SOLUTIONS</Button>
                 <p className='font-medium  text-6xl text-black'>Secure, Efficient, and User-Friendly Financial Services</p>
                 <p className='text-gray-700'>Experience the future of finance with our secure, efficient, and user-friendly financial services.</p>
            </div>
            <div className='grid grid-cols-3 items-start gap-2 h-fit my-auto'>
               <Button variant={'default'} className='text-base py-6'>Get Started Now</Button>
                <Button variant={'outline'} className='text-base py-6'>Learn More <MdArrowOutward /> </Button>
            </div>
            <div className='grid grid-rows-2  items-start py-2  row-start-4 '> 
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
        <div className='relative flex flex-col w-full'>
            <Image
                    src={heroimage}
                    alt="Picture of the author"
                    className=' rounded-2xl w-full md:w-[550px] h-auto object-cover'
                    />
                <Image
                    src={cardexpenes}
                    alt="Picture of the author"
                    className=' rounded-2xl w-1/2 h-1/2 absolute z-10 bottom-[-10px]  md:left-[300px]"'
                    />
        </div>
    </div>
  )
}

export default HomePage
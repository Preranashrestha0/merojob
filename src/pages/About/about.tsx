import React from 'react'
import Image from 'next/image'
import about_img from '../../public/about.jpeg'
import { Button } from '@/components/ui/button'
import ValuesList from '@/components/valueList'
import { Lightbulb } from 'lucide-react'


const About = () => {
  return (
    <div className=' grid grid-rows-2 md:grid-rows-1 md:grid-cols-2  gap-10 py-2 px-2 mt-10 '>
      <div className='flex flex-col gap-10 md:row-span-1 row-span-2'>
        <Image
        src={about_img}
        alt="logo"
        className='rounded-xl'
        />
        <div className='bg-[#215c5c] text-white rounded-xl p-4 flex flex-row gap-5'>
          <div className='bg-[#336b67]  rounded-full w-fit h-fit p-2'>
            <Lightbulb className='w-9 h-7'/>
          </div>
          <div>
            <h1 className='text-xs font-medium mb-4 '>MISSION STATEMENT</h1>
          <p className='text-xl'>Our mission is to empower individuals and businesses by delivering secure, efficient, and user-friendly financial services.</p>

          </div>
            </div>
      </div>
      <div className='md:ml-10 ml-2 md:row-span-2 row-start-1'>
        <Button variant={'destructive'}>About Us</Button>
        <h4 className='lg:text-[35px] text-[26px] mt-2 font-medium mb-4'>Experience the future of finance with our secure, efficient, and user-friendly financial services</h4>
        
        <p className='text-gray-500 lg:text-lg text-sm'>
          Founded with the vision of revolutionizing the financial industry, we are a leading fintech company dedicated to providing innovative and secure financial solutions. <br/><br/>

Our cutting-edge platform ensures your transactions are safe, streamlined, and easy to manage, empowering you to take control of your financial journey with confidence and convenience.
        </p>
        <div className='mt-5'>
          <ValuesList />
        </div>
      </div>
    </div>
  )
}

export default About
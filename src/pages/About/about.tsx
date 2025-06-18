import React from 'react'
import Image from 'next/image'
import about_img from '../../public/about.jpeg'
import { Accordion } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'


const About = () => {
  return (
    <div className='grid grid-cols-2 gap-10 mt-10'>
      <div className='flex flex-col gap-10'>
        <Image
        src={about_img}
        alt="logo"
        className='rounded-xl'
        />
        <div>
          <h1 className=''>MISSION STATEMENT</h1>
          <p>Our mission is to empower individuals and businesses by delivering secure, efficient, and user-friendly financial services.</p>
        </div>
      </div>
      <div className='ml-10'>
        <Button variant={'destructive'}>About Us</Button>
        <h4 className='text-[32px] mt-2 font-normal mb-4'>Experience the future of finance with our secure, efficient, and user-friendly financial services</h4>
        
        <p className='text-gray-500'>
          Founded with the vision of revolutionizing the financial industry, we are a leading fintech company dedicated to providing innovative and secure financial solutions. <br/><br/>

Our cutting-edge platform ensures your transactions are safe, streamlined, and easy to manage, empowering you to take control of your financial journey with confidence and convenience.
        </p>
        <h1>Key Values and Vision</h1>
        <div className='grid grid-cols-3'>
          <Button>Innovation</Button>
          <Button>Security</Button>
          <Button>User-Centric Design</Button>
          <Button>Transparency</Button>
          <Button>Empowerment</Button>
        </div>
      </div>
    </div>
  )
}

export default About
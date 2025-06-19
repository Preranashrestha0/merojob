import CardGrid from '@/components/card/servicesCards'
import StepsTimeline from '@/components/stepsTimeline'
import { Button } from '@/components/ui/button'
import React from 'react'

const Howitworks = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
        <Button variant={'destructive'}>HOW IT WORKS</Button>
        <h2 className='text-4xl my-2'>How It Works</h2>
        <p className='md:w-1/2 text-center text-gray-500 sm:w-full px-4'>Our platform is designed to make managing your finances simple and efficient. Follow these easy steps to get started:</p>
        <StepsTimeline/>
    </div>
  )
}

export default Howitworks
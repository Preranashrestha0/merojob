
import TestimonialCards from '@/components/card/testimonialsCards'
import { Button } from '@/components/ui/button'
import React from 'react'

const Testimonials = () => {
  return (
    <div className='justify-center my-20'>
        <div className='flex justify-center flex-col items-center'>
            <Button variant='destructive' className='w-fit'>TESTIMONIALS</Button>
            <h1 className='text-3xl my-3'>What Our Users Are Saying</h1>
            <p className='lg:w-2/5 text-center text-gray-600 md:w-full'>Real Stories of Success and Satisfaction from Our Diverse Community</p>
        </div>
        <div className=''>
            <TestimonialCards/>
        </div>
    </div>
  )
}

export default Testimonials
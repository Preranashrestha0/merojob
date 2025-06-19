
import TestimonialCards from '@/components/card/testimonialsCards'
import HeadingTag from '@/components/HeadingTag'
import React from 'react'

const Testimonials = () => {
  return (
    <div className='justify-center my-20'>
        <div className='flex justify-center flex-col items-center'>
          <HeadingTag
          heading='TESTIMONIALS'
          description='What Our Users Are Saying'
          content='Real Stories of Success and Satisfaction from Our Diverse Community'
          />
        </div>
        <div className=''>
            <TestimonialCards/>
        </div>
    </div>
  )
}

export default Testimonials
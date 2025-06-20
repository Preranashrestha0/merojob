import HeadingTag from '@/components/HeadingTag'
import StepsTimeline from '@/components/stepsTimeline'
import WorkingTemplate from '@/components/workingtemplate/WorkingTemplate'
import React from 'react'

const Howitworks = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <HeadingTag 
      heading='HOW IT WORKS'
      description='How It Works'
      content='Our platform is designed to make managing your finances simple and efficient. Follow these easy steps to get started:'
      />
          <StepsTimeline/>
          <div className='bg-[#215c5c] md:w-full mt-10 md:mt-32 rounded-xl w-1/2 grid md:grid-cols-3 md:grid-rows-1 grid-rows-3 py-16 gap-5 md:h-56'>
            <WorkingTemplate description='Customer Satisfaction' endvalue={10} header='K+'/>
            <WorkingTemplate description='Revenue Increase' endvalue={200} header='%+'/>
            <WorkingTemplate description='Business Growth' endvalue={120} header='x'/>
          </div>
    </div>
  )
}

export default Howitworks
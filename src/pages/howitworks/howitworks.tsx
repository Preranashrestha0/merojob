import HeadingTag from '@/components/HeadingTag'
import StepsTimeline from '@/components/stepsTimeline'
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
    </div>
  )
}

export default Howitworks
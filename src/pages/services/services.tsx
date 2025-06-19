import CardGrid from '@/components/card/servicesCards'
import HeadingTag from '@/components/HeadingTag'
import React from 'react'

const Services = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center '>
          <HeadingTag
            heading='OUR SERVICES'
            description='Empowering Financial Innovation Through Cutting-Edge Services'
          />
        </div>
        <CardGrid/>

    </div>
  )
}

export default Services
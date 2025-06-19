import CardGrid from '@/components/card/servicesCards'
import { Button } from '@/components/ui/button'
import React from 'react'

const Services = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center '>
            <Button variant={'destructive'} className='w-fit' >OUR SERVICES</Button>
            <h2 className='text-4xl font-normal lg:w-2/3 text-center my-4'>Empowering Financial Innovation Through Cutting-Edge Services</h2>
        </div>
        <CardGrid/>

    </div>
  )
}

export default Services
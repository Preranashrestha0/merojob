import React from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import MyTextbox from './TextBox'

const Footer = () => {
  return (
    <div className='grid grid-rows-3 p-4 w-full'>
        <div className='flex sm:flex-row justify-between flex-col gap-5'>
            <div>
                <h1 className='text-xl font-medium'>Join our newsletter</h1>
                <p>Stay updated with our latest templates and offers—join our newsletter today!</p>
            </div>
            <div className='flex flex-row gap-2 md:ml-10 '>
                <MyTextbox placeholder={"Email your email"} name={undefined}/>
                <Button variant={'default'} className='text-lg p-5 py-6'>Subscribe</Button>
            </div>
            
        </div>
        <div>

        </div>
        <div>

        </div>
    </div>
  )
}

export default Footer
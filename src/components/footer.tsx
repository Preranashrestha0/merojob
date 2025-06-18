import React from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <div className='grid grid-rows-3'>
        <div className='grid grid-cols-2 gap-5'>
            <div>
                <h1>Join our newsletter</h1>
                <p>Stay updated with our latest templates and offers—join our newsletter today!</p>
            </div>
            <div className='flex flex-row gap-2 md:ml-10'>
                <Textarea placeholder="Email your email" />
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
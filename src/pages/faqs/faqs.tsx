import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // adjust path to where your component is
import { accordionData } from "@/app/data/accordinItems"; 
import { Button } from '@/components/ui/button';
const Faqs = () => {
  return (
    <div className='bg-[#fbfbfc] flex items-center flex-col'>
        <Button variant={'destructive'}>FAQ</Button>
        <div className='flex flex-col items-center text-center'>
            <h1 className='font-bold text-3xl py-4'>Frequently Asked Questions</h1>
            <p className='items-center text-lg md:w-3/4 sm:w-auto text-gray-600'>Utilize our tools to develop your concepts and bring your vision to life. Once complete, effortlessly share your creations.

</p>
        </div>
        <div>
            <Accordion type="single" collapsible className="w-full max-w-xl mx-auto p-4 gap-4">
                {accordionData.map((item) => (
                    <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                    </AccordionItem>
                ))}
                </Accordion>

        </div>
    </div>
  )
}

export default Faqs
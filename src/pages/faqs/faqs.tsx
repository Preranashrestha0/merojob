import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // adjust path to where your component is
import { accordionData } from "@/app/data/accordinItems"; 
import HeadingTag from '@/components/HeadingTag';
const Faqs = () => {
  return (
    <div className='bg-[#fbfbfc] flex items-center flex-col'>
      <HeadingTag heading='FAQ' description='Frequently Asked Questions' content='Utilize our tools to develop your concepts and bring your vision to life. Once complete, effortlessly share your creations.'/>
        
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
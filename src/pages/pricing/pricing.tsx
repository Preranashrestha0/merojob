import React from 'react'
import HeadingTag from '../../components/HeadingTag'
import { Check } from 'lucide-react'

const Pricing = () => {
  return (
    <div className='mx-10 w-full flex items-center justify-center px-4 py-12 bg-white flex-col'>
        <div className='my-10'>
            <HeadingTag 
            heading='Pricing'
             description='Plan for every budget'
             content='Experience the future of finance with our secure, efficient, and user-friendly financial services'
             />
        </div>
     
      <div className="grid lg:grid-cols-3 gap-8 w-full max-w-5xl">

        <div className="bg-white border rounded-2xl p-8 shadow-sm w-full max-w-md col-span-1">
          <h3 className="text-3xl  font-semibold mb-2">Personal</h3>
          <p className="text-gray-600 mb-6 text-base">
            Choose a plan that fits your personal financial needs and start managing your finances more effectively.
          </p>
          <div className="text-5xl font-bold mb-6">
            $7<span className="text-lg font-normal ml-1">/ month</span>
          </div>
          <button className="px-6 py-3 bg-teal-800 text-white rounded-lg hover:bg-teal-900 font-medium text-lg">
            Get Started
          </button>
        </div>

        <div className="bg-teal-800 col-span-2 text-white rounded-2xl p-8 shadow-md w-full max-w-2xl flex flex-col md:flex-row md:justify-evenly items-start justify-start">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-2">Business</h3>
            <p className="text-gray-200 mb-6 text-base w-full">
              Optimize your business financial operations with our tailored business plans.
            </p>
            <div className="text-5xl font-bold mb-6 text-lime-200">
              $29<span className="text-lg font-normal ml-1 text-white">/ month</span>
            </div>
            <button className="px-6 py-3 bg-white text-black rounded-lg font-medium text-lg hover:bg-gray-100">
              Get Started
            </button>
          </div>
          <div className="mt-8 md:mt-0">
            <h4 className="uppercase text-sm font-bold text-lime-200 mb-4">Features</h4>
            <ul className="space-y-3 text-base text-white">
              <li className="flex items-start gap-2"><Check className='border border-gray-400 rounded-full p-1'/> Personalized financial insights and reports</li>
              <li className="flex items-start gap-2"><Check className='border border-gray-400 rounded-full p-1'/> Priority customer support</li>
              <li className="flex items-start gap-2"><Check className='border border-gray-400 rounded-full p-1'/> Access to exclusive investment opportunities</li>
              <li className="flex items-start gap-2"><Check className='border border-gray-400 rounded-full p-1'/> AI-driven financial recommendations</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  
  )
}

export default Pricing
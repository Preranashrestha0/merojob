// components/ContactForm.js
import HeadingTag from '@/components/HeadingTag';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  return (
    <div className='my-10 '>
        <div>
            <HeadingTag
            heading='CONTACT US'
            description='Contact Us'
            content='Utilize our tools to develop your concepts and bring your vision to life. Once complete, effortlessly share your creations.'
            />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <div className="border rounded-full p-3">
            <Phone className="text-gray-600" />
          </div>
          <div>
            <p className="text-gray-500">Phone</p>
            <p className="font-semibold text-gray-800">+(01 234 567 890)</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="border rounded-full p-3">
            <Mail className="text-gray-600" />
          </div>
          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-semibold text-gray-800">info@mydomain.com</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="border rounded-full p-3">
            <MapPin className="text-gray-600" />
          </div>
          <div>
            <p className="text-gray-500">Address</p>
            <p className="font-semibold text-gray-800">
              123 Main Street Apt 4B Springfield,<br />
              IL 62701 United States
            </p>
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <form className="space-y-5">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>
        <div>
          <label className="block text-gray-700">Subject</label>
          <input
            type="text"
            className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <Textarea className='mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600'/>
        </div>
        <button
          type="submit"
          className="bg-[#255f5f] hover:bg-[#1f4d4d] text-white font-semibold py-2 px-6 rounded-md"
        >
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
}

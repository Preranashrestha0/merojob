import {
  Mail,
  MapPin,
  Phone,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Newsletter Row */}
        <div className="md:flex justify-between items-center mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-1">Join our newsletter</h2>
            <p className="text-sm text-gray-600">
              Stay updated with our latest templates and offers—join our newsletter today!
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <input
              type="email"
              placeholder="Email your email"
              className="border rounded px-4 py-2 w-64 outline-none"
            />
            <button className="bg-teal-800 text-white px-5 py-2 rounded hover:bg-teal-900 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Grid Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 mb-10">
      
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-base text-gray-600">
              Utilize our tools to develop your concepts and bring your vision to life. Once complete,
              effortlessly share your creations.
            </p>
          </div>

          
          <div className="col-start-3">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-base text-gray-600">
              <li>Leadership</li>
              <li className="flex items-center gap-2">
                Careers
                <span className="bg-teal-100 text-teal-800 text-xs font-bold px-2 py-0.5 rounded hover:text-white hover:bg-teal-800">
                  we&apos;re hiring
                </span>
              </li>
              <li>Case Studies</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>404 page</li>
            </ul>
          </div>

          
          <div className="col-start-4">
            <h3 className="text-lg font-semibold mb-4">Accounts</h3>
            <ul className="space-y-2 text-base text-gray-600">
              <li>Register</li>
              <li>Sign in</li>
              <li>Forgot Password</li>
              <li>Coming soon</li>
              <li>Portfolio Masonry</li>
            </ul>
          </div>

        
          <div className="col-start-5">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-base text-gray-600">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                123 Main Street Apt 4B<br />Springfield, IL 62701 United States
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                info@mydomain.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                +1 (234) 5678 9900
              </li>
              <li className="flex items-center gap-2">
                <Globe size={16} />
                FreeBootstrap.net
              </li>
            </ul>
          </div>
        </div>

      
        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © 2025 Nova. All rights reserved. Designed with   
            
            by <a href="#" >FreeBootstrap.net</a>
          </p>
          <p className="mt-2 sm:mt-0">
            Distributed by <a href="#" >ThemeWagon</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

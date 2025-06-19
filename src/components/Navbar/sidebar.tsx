
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";
import DropdownMenu from "../dropdownMenu";
import { dropdown } from "@/app/data/dropdownItems";

export default function MobileMenu({ onClose }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col w-full max-w-sm shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="text-xl font-bold">Nova</span>
        </div>
        <button onClick={onClose}>
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-4 px-6 py-6">
        <a href="#" className="text-gray-800 hover:text-teal-600">Home</a>
        <a href="#" className="text-gray-800 hover:text-teal-600">About</a>
        <a href="#" className="text-gray-800 hover:text-teal-600">Pricing</a>
        <a href="#" className="text-gray-800 hover:text-teal-600">How It Works</a>

        <div className="border-b border-gray-300 pb-2 text-gray-800 font-medium">Services</div>

        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center justify-between text-gray-800 hover:text-teal-600"
        >
          Dropdown
          <ChevronDown className={`w-5 h-5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
        </button>

        <DropdownMenu label="Dropdown" items={dropdown}/>
        <a href="#" className="text-gray-800 hover:text-teal-600">Contact</a>
      </nav>
    </div>
  );
}

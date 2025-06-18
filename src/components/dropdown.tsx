'use client';

import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { HiChevronRight } from 'react-icons/hi';

export interface DropdownItem {
  label: string;
  href?: string;
  children?: DropdownItem[];
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center cursor-pointer text-gray-800">
        <span>{label}</span>
        <RiArrowDropDownLine className="w-7 h-7" />
      </button>

      <div
        className={`absolute z-50 right-0 top-10 min-w-[200px] bg-white shadow-md rounded-md flex flex-col py-2 transition-all duration-200 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {items.map((item, index) => (
          <DropdownItemRenderer key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const DropdownItemRenderer: React.FC<{ item: DropdownItem }> = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group/item"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {item.children ? (
        <>
          <button className="flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-slate-100 text-gray-700">
            {item.label}
            <HiChevronRight className="ml-2 w-4 h-4" />
          </button>

          <div
            className={`absolute top-0 right-full mt-0 ml-1 min-w-[180px] bg-white shadow-md rounded-md flex flex-col transition-opacity duration-200 ${
              open ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            {item.children.map((child, index) => (
              <DropdownItemRenderer key={index} item={child} />
            ))}
          </div>
        </>
      ) : (
        <a
          href={item.href}
          className="block px-4 py-2 text-sm hover:bg-slate-100 text-gray-700"
        >
          {item.label}
        </a>
      )}
    </div>
  );
};

export default DropdownMenu;

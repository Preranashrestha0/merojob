"use client"
import Image from 'next/image'
import logo from '../../public/logo-dark.svg'
import SideBarMenu from '../../public/sidebarmenu.svg'
import Link from 'next/link'
import { Button } from '../ui/button';
import DropdownMenu from '../dropdownMenu';
import { dropdown } from '@/app/data/dropdownItems';
import MobileMenu from './sidebar';
import { useState } from 'react'
export default function Navbar (){
    const [isOpen, setIsOpen] = useState(false)
    const handleClick =()  => {
        alert("hello")
    };
    return(
        <div className="bg-white p-2 sticky top-0 left-0 right-0 text-white  z-10">
            <nav className="flex flex-row justify-between items-center shadow-sm p-2">
                <div className='flex flex-row gap-12'>
                    <Image 
                    src={logo}
                    alt='logo'
                    />
                <div className=' flex-row gap-5 justify-center items-center text-gray-600 lg:flex hidden sm:ml-10 ml-0'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Pricing</Link>
                    <Link href={'/'}>How It Works</Link>
                    <Link href={'/'}>Services</Link>
                    <DropdownMenu label="Dropdown" items={dropdown} />
                    <Link href={'/'}>Contact</Link>
                </div>
                </div>
               <div className='flex flex-row gap-2'>
                <Button variant={'default'} className='sm:flex hidden text-base p-6'>Get Started</Button>
              <button onClick={() => setIsOpen(true)}> <Image src={SideBarMenu} alt={'sidebar'} className='flex lg:hidden ' /></button>
               {isOpen && <MobileMenu />}
               </div>
            </nav>
        </div>
    )
}
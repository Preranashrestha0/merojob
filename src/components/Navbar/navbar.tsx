import Image from 'next/image'
import logo from '../../public/logo-dark.svg'
import Link from 'next/link'
import { RiArrowDropDownLine } from "react-icons/ri";
import DropdownMenu from '../dropdownMenu';
import { dropdown } from '@/app/data/dropdownItems';
import { Button } from '../ui/button';
export default function Navbar (){
    return(
        <div className="bg-white p-2 ">
            <nav className="flex flex-row justify-between items-center shadow-sm p-2">
                <div className='flex flex-row gap-12'>
                    <Image 
                    src={logo}
                    alt='logo'
                    />
                <div className=' flex-row gap-5 justify-center items-center text-gray-600 md:flex hidden sm:ml-10 ml-0'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Pricing</Link>
                    <Link href={'/'}>How It Works</Link>
                    <Link href={'/'}>Services</Link>
                    <DropdownMenu label='Dropdown' items={dropdown}/>
                    <Link href={'/'}>Contact</Link>
                </div>
                </div>
               <Button variant={'default'} className='text-base p-6'>Get Started</Button>
            </nav>
        </div>
    )
}
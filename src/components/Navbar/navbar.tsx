import Image from 'next/image'
import logo from '../../public/logo-dark.svg'
import Link from 'next/link'
import { servicesDropdown } from '../../data/dropdownItems';
import DropdownMenu from '../dropdown';
export default function Navbar (){
    return(
        <div className="bg-white p-2 ">
            <nav className="flex flex-row justify-evenly items-center shadow-sm p-2">
                <div className='flex flex-row gap-12'>
                    <Image 
                    src={logo}
                    alt='logo'
                    />
                <div className='flex flex-row gap-5 justify-center items-center text-gray-600'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Pricing</Link>
                    <Link href={'/'}>How It Works</Link>
                    <Link href={'/'}>Services</Link>
                    <DropdownMenu label="Dropdown" items={servicesDropdown} />
                    <Link href={'/'}>Contact</Link>
                </div>
                </div>
                <div className='bg-[#215c5c] px-7 py-3 font-bold text-white rounded-md'>Get Started</div>
            </nav>
        </div>
    )
}
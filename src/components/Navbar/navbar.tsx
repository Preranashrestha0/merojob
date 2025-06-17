import Image from 'next/image'
import logo from '../../public/logo-dark.svg'
import Link from 'next/link'
import { RiArrowDropDownLine } from "react-icons/ri";
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
                   
                    <div className='relative group'>
                        <p className='flex cursor-pointer items-center'>
                            <span>Dropdown</span>
                            <RiArrowDropDownLine className='w-7 h-10'/>
                        </p>
                        <div id='dropdown' className=' absolute  hidden right-2 top-10 w-auto flex-col gap-2 pr-16 pl-4 py-4 items-start bg-white text-gray-700 shadow-md group-hover:flex'>
                            <a className=' hover:bg-slate-200 w-full px-5 py-5'>Multipages</a>
                            <a>Services</a>
                            <a>Pricing</a>
                            <a>Dropstart</a>

                        </div>
                    </div>
                    <Link href={'/'}>Contact</Link>
                </div>
                </div>
                <div className='bg-[#215c5c] px-7 py-3 font-bold text-white rounded-md'>Get Started</div>
            </nav>
        </div>
    )
}
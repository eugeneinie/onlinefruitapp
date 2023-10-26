"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import CartIcon from './CartIcon'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(true);

  // Function to toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  }
  return (
    <nav className='bg-[#e55] sm:h-[80px] h-[300px] flex sm:items-center items-start justify-around text-white'>
      <aside className='flex items-center gap-x-2'>
        <Image src='/images/android-chrome-192x192.png' alt='logo' width={50} height={50}/>
        <h3>Fruits</h3>
      </aside>

      <ul className='flex sm:flex-row flex-col items-center justify-between capitalize gap-x-8'>
        <Link href='/contact' className='sm:hidden block' onClick={toggleMobileMenu}>
        <li>
          <GiHamburgerMenu />
        </li>
        </Link>
        
        { mobileMenuVisible && 
        <>
        <Link href='/' className="sm:block">
        <li>Home</li>
        </Link>

        <Link href='/about' className="sm:block">
        <li>about</li>
        </Link>

        <Link href='/shop' className="sm:block">
        <li>shop</li>
        </Link>

        <Link href='/donate' className="sm:block">
        <li>donate</li>
        </Link>

        <Link href='/contact' className="sm:block">
        <li>contact</li>
        </Link>


        <li className="sm:block">
          <CartIcon />
        </li>
        </>}
      </ul>
    </nav>
  )
}

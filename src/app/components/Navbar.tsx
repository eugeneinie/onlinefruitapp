import Image from 'next/image'
import React from 'react'
import CartIcon from './CartIcon'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='bg-[#e55] h-[80px] flex items-center justify-around text-white'>
      <aside className='flex items-center gap-x-2'>
        <Image src='/images/android-chrome-192x192.png' alt='logo' width={50} height={50}/>
        <h3>Fruits</h3>
      </aside>

      <ul className='flex items-center justify-between capitalize gap-x-8'>
        <Link href='/'>
        <li>Home</li>
        </Link>

        <Link href='/about'>
        <li>about</li>
        </Link>

        <Link href='/shop'>
        <li>shop</li>
        </Link>

        <Link href='/donate'>
        <li>donate</li>
        </Link>

        <Link href='/contact'>
        <li>contact</li>
        </Link>

        <li>
          <CartIcon />
        </li>
      </ul>
    </nav>
  )
}

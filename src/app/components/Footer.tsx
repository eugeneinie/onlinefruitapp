import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className='h-[200px] bg-black text-white flex flex-col justify-center mt-[200px]'>
        <div className='flex justify-around items-center '>
            <div className='flex items-center space-x-4'>
                <Image src='/images/android-chrome-192x192.png' alt='logo' width={50} height={50}/>
                <p>franc</p>
            </div>

            <div className='flex space-x-2 text-3xl'>
                <Link href=''>
                <AiFillGithub />
                </Link>

                <Link href=''>
                <AiFillLinkedin />
                </Link>

                <Link href=''>
                <AiFillInstagram />
                </Link>

            </div>
        </div>
        
        <p className='text-center'>
            Created by <Link href=''>coderite</Link> &copy;{new Date().getFullYear()}
        </p>
    </footer>
  )
}

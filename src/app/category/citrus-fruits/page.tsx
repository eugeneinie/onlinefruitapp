import React from 'react'
import { fruits } from '@/app/page'
import Image from 'next/image'
import Link from 'next/link'

const fruitsCards = fruits.filter(fruit => fruit.type === 'Citrus Fruits')

export default function Page() {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4'>
         {fruitsCards.map((fruit:any, index:any) => (
          <div key={index} className='text-center'>
            <Link href={`/fruits/${fruit.name}`}>
                <Image
                  src={`/images/${fruit.name}.jpg`}
                  alt={fruit.name}
                  width={300}
                  height={600}
                  className='h-[400px] rounded-md'
                />
            </Link>
            <h2 className='capitalize'>{fruit.name}</h2>
            <h2>&#8358;{fruit.price}</h2>
            <Link href='/'>
              <button className='bg-[#e55] rounded-md px-5 py-2 hover:bg-slate-950 hover:text-white'>
                Details
              </button>
            </Link>
          </div>
        ))}
    </div>
  )
}

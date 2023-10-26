import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type fruitProps={
  products:{
  name:string,
  price:number,
  description:string[],
  type:string
}[]
}
export default function Fruits({products}:fruitProps) {
  const fruitsCards = products.slice(0, 3);

  return (
    <section className='w-4/5 m-auto py-8 flex flex-col gap-y-4'>
      <h2 className='font-semibold'>Fruits products</h2>
      <h3 className='text-5xl font-bold'>Open 24 / 7 / 365</h3>
      <aside className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4'>
        {fruitsCards.map((fruit:any, index:any) => (
          <div key={index} className='text-center'>
            <Link href={`/fruits/${fruit.name}`}>
                <Image
                  src={`/images/${fruit.name}.jpg`}
                  alt={fruit.name}
                  width={400}
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
      </aside>

      <Link href='/shop'>
        <button className='text-center w-1/4  m-auto block bg-slate-900 text-white rounded-md p-3 mt-5'>
          <span>See all fruits</span>
        </button>
      </Link>
    </section>
  );
}
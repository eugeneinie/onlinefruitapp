import { fruits } from "../page"
import Link from "next/link"
import Image from "next/image"

export default function page() {
 
  return (
    <section className='w-4/5 m-auto py-8 flex flex-col gap-y-4'>
      <h2 className='font-semibold'>Fruits products</h2>
      <h3 className='text-5xl font-bold'>Open 24 / 7 / 365</h3>
      <aside className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4'>
      {fruits.map((fruit, index) => (
        <div key={index} className='text-center'>
          <Link href={`/fruits/${fruit.name}`}>
          <Image src={`/images/${fruit.name}.jpg`} alt={fruit.name} width={400} height={600} className='h-[400px] rounded-md'/>
          </Link>
         <h2 className='capitalize'>{fruit.name}</h2>
         <h2>&#8358;{fruit.price}</h2>
         <Link href='/'>
         <button className='bg-[#e55] rounded-md px-5 py-2 hover:bg-slate-950 hover:text-white'>Details</button>
         </Link>
        </div>
        ))}
      </aside>
    </section>
  )
}

import { fruits } from "@/app/page"
import Image from "next/image"

type paramsType = {
  params:string
  slug:string
}

type TfruitProps = {
  name: string;
  price: number;
  description: string[];
  type: string;
}

export default function Page({params}:any) {
    const fruitIndex:TfruitProps|undefined  = fruits.find(fruit => fruit.name === params.slug)

    if (!fruitIndex) {
      // Handle the case when fruitIndex is undefined (e.g., show a message or redirect)
      return <div>Fruit not found</div>;
    }
  return (
    <div className="min-h-screen w-4/5 m-auto pt-5">
      <section className="grid sm:grid-cols-2 grid-cols-1 gap-y-3 ">
      <Image src={`/images/${fruitIndex.name}.jpg`} alt={fruitIndex.name} width={400} height={600} className='h-[400px] w-[500px] rounded-md'/>
      <section className="grid grid-cols-1 gap-x-10">
      <h2 className="h-[100px] text-4xl capitalize py-6">{fruitIndex.name}</h2>
      <p>&#8358;{fruitIndex.price}</p>
      <p>Quantity</p>
      <div className="flex gap-y-8 justify-start items-start">

      <input title="Quantity" type="number" name="number" id="number" min={1} className="border-4 border-[#e55] border-solid outline-none rounded-md p-2 w-[70px]"/>

      <button className="hover:bg-[#e55] text-[#e55] hover:text-white py-3 px-5 ml-6 rounded-md border-2 hover:border-none">Add to Cart</button>
      </div>
        {fruitIndex.description.map((desc,index) =>(
          <p key={index}>{desc}</p>
          ))}
      </section>
      </section>
      </div>
  )
}

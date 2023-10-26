import { fruits } from "@/app/page"

type paramsType = {
  params:string 
}


export default function Page({params}:paramsType) {
    const fruitIndex = fruits.find(fruit => fruit.name === params.slug)
  return (
    <div className="min-h-screen">
      <h2 className="h-[200px] text-white bg-slate-950 text-4xl px-7 py-9">{fruitIndex.name}</h2>
      <p>{fruitIndex.price}</p>
      <section>
        {fruitIndex.description.map((desc,index) =>(
          <p key={index}>{desc}</p>
        ))}
      </section>
      </div>
  )
}

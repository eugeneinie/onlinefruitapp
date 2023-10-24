import Image from "next/image"
import styles from './components.module.css'

const support = [
    {
        id: 1,
        title: 'support shop',
        image: '/images/shop.jpg',
        statement: 'Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!'
    },
    {
        id: 2,
        title: 'donate',
        image: '/images/donate.jpg',
        statement: 'Since we\'ve changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.'
    },
    {
        id: 3,
        title: 'gift card',
        image: '/images/gift.jpg',
        statement: 'Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family.'
    }
]

const supportGrid = support.map((grid) => (
    <aside key={grid.id}>
        <Image src={grid.image} alt={grid.title} width={300} height={370}/>
        <h3>{grid.title}</h3>
        <p>{grid.statement}</p>
    </aside>
))

export default function Support() {
  return (
    <section className={`w-[80%] m-auto ${styles.support}`}>
        <h2 className="px-[2em] py-3 border-l-8 border-solid border-l-[#e55] my-6 ">Support</h2>

        <section className="grid sm:grid-cols-3 grid-cols-1 gap-[50px] ">
            {supportGrid}
        </section>
    </section>
  )
}

import styles from './components.module.css'

export default function Banner() {
  return (
    <section className={styles.banner}>
       <section className='text-[#ccc] w-[50%] p-[5em] '>
        <h2 className='text-[4em] font-sans '>Serving you since 1989.</h2>
        <p className='text-2xl font-sans'>We serve you the best fruits across tropical Africa and Eastern Asia. The best price you will ever get.</p>

        <button className='px-4 py-2 mt-4 rounded-md hover:bg-white hover:text-black border-2 border-white border-solid'>Shop Fruits</button>
       </section>
    </section>
  )
}

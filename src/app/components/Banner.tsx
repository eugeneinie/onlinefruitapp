import styles from './components.module.css'

export default function Banner() {
  return (
    <section className={styles.banner}>
       <section className='text-[#ccc] sm:w-[50%] w-4/5 sm:p-[5em] p-[3em] '>
        <h2 className='sm:text-[4em] text-6xl font-sans '>Serving you since 1989.</h2>
        <p className='sm:text-2xl text-xl font-sans'>We serve you the best fruits across tropical Africa and Eastern Asia. The best price you will ever get.</p>

        <button className='px-4 py-2 mt-4 rounded-md hover:bg-white hover:text-black border-2 border-white border-solid'>Shop Fruits</button>
       </section>
    </section>
  )
}

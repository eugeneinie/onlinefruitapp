"use client"
import React, { useState } from 'react'
import Data from './Data'

export default function Page() {
    const [number, setNumber] = useState(55)

function increase(){
  setNumber(prevState => prevState + 5)
}
function decrease(){
  setNumber(prevState => prevState - 5)
}

  return (
    <div className='m-auto w-1/2 p-[50px]'>
        <p>{number}</p>
        <button className=' p-4 bg-blue-700 text-white'
        onClick={increase}>increase</button>

        <button className=' p-4 bg-red-700 text-white'
        onClick={decrease}>decrease</button>

        <Data />
    </div>
  )
}

import Link from 'next/link'
import React from 'react'
import cate from './category.module.css'

export default function Category() {
  return (
    <aside className={cate.cat}>
        <ul>
            <Link href='/category/pits'>
            <li>Pits</li>
            </Link>

            <Link href='/category/citrus-fruits'>
            <li>Citrus Fruits</li>
            </Link>

            <Link href='/category/berries'>
            <li>Berries</li>
            </Link>

            <Link href='/category/tropical-fruits'>
            <li>Tropical Fruits</li>
            </Link>

            <Link href='/category/melon'>
            <li>Melon</li>
            </Link>

            <Link href='/category/core'>
            <li>Core</li>
            </Link>

            <Link href='/shop/'>
            <li>All Fruits</li>
            </Link>

        </ul>
    </aside>
  )
}

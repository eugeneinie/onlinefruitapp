import React from 'react'
import Category from '../components/Category'
import ShopHeader from './ShopHeader'

export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
    {/* <ShopHeader /> */}
    <div className='relative top-[40px] flex items-start w-4/5 mx-auto'>
        <Category />
        {children}
    </div>
    </>
  )
}

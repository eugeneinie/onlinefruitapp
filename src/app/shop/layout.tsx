import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Shop | Fruits app',
    description: 'Eat healthy fruits',
    keywords: 'avacado, pears, berries'
  }

export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className='min-h-screen'>
        {children}
    </div>
  )
}

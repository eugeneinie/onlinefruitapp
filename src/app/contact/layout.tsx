import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Contact | Fruits app',
    description: 'Eat healthy fruits',
    keywords: 'avacado, pears, berries'
  }

export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div>
        {children}
    </div>
  )
}

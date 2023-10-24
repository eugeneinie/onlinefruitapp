import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fruits app',
  description: 'Eat healthy fruits',
  keywords: 'avacado, pears, berries'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className='relative top-[150px]'>
          {children}
        </div>
        <Footer />
        </body>
    </html>
  )
}

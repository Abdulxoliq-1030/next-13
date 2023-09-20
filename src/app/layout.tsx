import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import Link from 'next/link'


const fira_code = Fira_Code({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Next App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={fira_code.className}>
        <Navbar />
        {/* <div className='navbar'>
          <Link href="/">Home Page</Link>
          <Link href="/about">About Page</Link>
          <Link href="/contact">Contact Page</Link>
        </div> */}
        {children}
      </body>
    </html>
  )
}

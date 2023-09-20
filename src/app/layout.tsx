import './globals.css'
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'

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
        {children}
      </body>
    </html>
  )
}

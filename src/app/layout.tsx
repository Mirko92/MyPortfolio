import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mirko Petrelli - My CV',
  description: `I'm `,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* The page will be rendered here  */}
        {children}

        {/* A simple script to add a mouse effect */}
        <Script 
          id="mouse-effect"
          src='/mouseEffect.js' 
          strategy='lazyOnload' 
        />
      </body>
    </html>
  )
}


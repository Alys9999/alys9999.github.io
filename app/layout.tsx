import './globals.css'
import type { Metadata } from 'next'
import { Jura } from 'next/font/google'




const jura = Jura({ subsets: ['latin'], display: 'swap',  })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jura.className}>
      <head>
        
      </head>
      <body>{children}</body>
    </html>
  )
}

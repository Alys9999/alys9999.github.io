import './globals.css'
import type { Metadata } from 'next'
import { Jura } from 'next/font/google'




const inter = Jura({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

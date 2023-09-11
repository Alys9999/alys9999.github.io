import './globals.css'

import { Jura } from 'next/font/google'


import Header from './header'


//when i put contacts in rootlayout it makes hydrations error, confused.

const jura = Jura({ subsets: ['latin'], display: 'swap',  })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jura.className}>
      <head>
         <title>Zhaoyang Lu&apos;s Portfolio</title>
      </head>
      <body>
      <Header></Header>
      {children}
        
        </body>
    </html>
  )
}

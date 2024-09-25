import './globals.css'
import type { Metadata } from 'next'
import {Raleway} from 'next/font/google'

export const metadata: Metadata = {
  title: 'Ashish Kumar',
  description: 'My Portfolio Website',
}

const rlw = Raleway({
  weight:"400",
  subsets:['cyrillic']
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rlw.className}`}>{children}</body>
    </html>
  )
}

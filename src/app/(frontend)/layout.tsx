import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'

export const metadata = {}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}

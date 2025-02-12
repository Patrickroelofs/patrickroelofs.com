import React, { type ReactElement } from 'react'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'

export const metadata = {}

export default function RootLayout(props: { children: React.ReactNode }): ReactElement {
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

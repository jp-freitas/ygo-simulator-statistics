import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YGO Simulator Statistics',
  description:
    'A YGO Duel Simulator that automatic apply the statistics to each duelist.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <div className="min-h-screen grid grid-cols-app">
          <Sidebar />
          <main className="px-8 pb-12 pt-8 w-max ml-96">{children}</main>
        </div>
      </body>
    </html>
  )
}

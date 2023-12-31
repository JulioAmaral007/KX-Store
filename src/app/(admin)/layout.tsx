import { NextAuthProvider } from '@/providers/auth'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Sidebar } from './dashboard/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <NextAuthProvider>
            <div className="flex overflow-hidden">
              <Sidebar />
              {children}
            </div>
          </NextAuthProvider>
        </div>
      </body>
    </html>
  )
}

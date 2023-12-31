import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { NextAuthProvider } from '@/providers/auth'
import { CartProvider } from '@/providers/cart'
import ToastProvider from '@/providers/toast'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '500', '900'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'KX Store',
  description:
    'Conectando clientes e produtos - Bem-vindo à nossa loja online, onde a sua próxima compra está a apenas um clique de distância. #EcommerceInovador 💻🌐🛍️',
  keywords: ['E-commerce'],
  openGraph: {
    images: [],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-full">
            <NextAuthProvider>
              <CartProvider>
                <ToastProvider>
                  <Header />
                  <div className="flex-1">{children}</div>
                  <Footer />
                </ToastProvider>
              </CartProvider>
            </NextAuthProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

import Footer from '@/compenents/Footer/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/compenents/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PURU\'s',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}

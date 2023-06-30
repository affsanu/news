import './globals.css'

import { Inter } from 'next/font/google'
import BannerNav from './components/hub/BannerNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Saidpur News',
  description: 'News & Magazin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BannerNav />
        {children}
        </body>
    </html>
  )
}

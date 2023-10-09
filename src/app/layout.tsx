import type { Metadata } from 'next'
import '@/globalStyles/index.scss'
import { Jost } from 'next/font/google'
import Sprite from '@/components/common/Sprite/Sprite'
import Header from '@/components/Layout/Header/Header'

const jostFont = Jost({
  variable: '--font-jost',
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Next blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${jostFont.variable}`}>
      <body>
        <div className="wrapper">
          <Header />
          {children}
          <Sprite />
        </div>
      </body>
    </html>
  )
}

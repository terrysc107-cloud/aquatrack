import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Clarix Analytics | AAMI ST108 Water Quality Consulting for SPDs',
  description:
    'ANSI/AAMI ST108:2023 compliant water quality monitoring and validation for sterile processing departments. Expert consulting from CRCST-certified SPD leaders.',
  metadataBase: new URL('https://clarixanalytics.net'),
  keywords: [
    'AAMI ST108',
    'water quality management',
    'sterile processing',
    'SPD consulting',
    'WQMP',
    'water quality management plan',
    'CRCST',
    'ASSE 12080',
  ],
  openGraph: {
    type: 'website',
    url: 'https://clarixanalytics.net',
    title: 'Clarix Analytics | AAMI ST108 Water Quality Consulting for SPDs',
    description:
      'ANSI/AAMI ST108:2023 compliant water quality monitoring and validation for sterile processing departments.',
    siteName: 'Clarix Analytics',
    images: [
      {
        url: '/clarix-logo.png',
        width: 1200,
        height: 630,
        alt: 'Clarix Analytics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clarix Analytics | AAMI ST108 Water Quality Consulting',
    description:
      'Expert AAMI ST108:2023 water quality consulting for sterile processing departments.',
    images: ['/clarix-logo.png'],
  },
  icons: {
    icon: [
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

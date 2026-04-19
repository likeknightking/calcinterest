import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Analytics from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

const otherMeta: Record<string, string> = {
  'google-adsense-account': 'ca-pub-7584346505499429',
}
if (process.env.NEXT_PUBLIC_SC_VERIFICATION) otherMeta['google-site-verification'] = process.env.NEXT_PUBLIC_SC_VERIFICATION
if (process.env.NEXT_PUBLIC_BING_VERIFICATION) otherMeta['msvalidate.01'] = process.env.NEXT_PUBLIC_BING_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL('https://calcinterest.com'),
  title: 'Compound Interest Calculator — See Your Money Grow Over Time',
  description:
    'Free compound interest calculator. Enter principal, rate, and time to see your investment grow with charts and a year-by-year breakdown. Supports monthly contributions and inflation adjustment.',
  openGraph: {
    title: 'Compound Interest Calculator — Free Investment Tool',
    description: 'See exactly how compound interest grows your money. Free, instant, no sign-up.',
    type: 'website',
    url: 'https://calcinterest.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compound Interest Calculator',
    description: 'Calculate compound interest with charts and year-by-year breakdown.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://calcinterest.com' },
  other: otherMeta,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased min-h-screen`}>
        {children}
        <Analytics />
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}

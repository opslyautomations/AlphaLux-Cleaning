import { Inter, Montserrat, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  metadataBase: new URL('https://www.alphaluxcleaning.com'),
  title: { default: 'Premium House Cleaning Services | AlphaLux Cleaning', template: '%s | AlphaLux Cleaning' },
  description: 'AlphaLux Cleaning delivers premium residential and commercial cleaning across NY, NJ, and CT.',
  openGraph: {
    siteName: 'AlphaLux Cleaning',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@alphaluxcleaning',
    creator: '@alphaluxcleaning',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${playfair.variable}`}>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-gold focus:text-navy focus:px-4 focus:py-2 focus:rounded">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69dd62882932316abb5ef838"
          strategy="afterInteractive"
        />
        <Script
          src="https://api.opslyautomations.com/js/form_embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}

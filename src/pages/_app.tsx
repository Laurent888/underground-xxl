import { GoogleAnalytics } from 'nextjs-google-analytics'
import { CookiesProvider } from 'react-cookie'
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import Head from 'next/head'

const montserrat = localFont({
  src: [
    {
      path: '../fonts/europa-light.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/europa-regular.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/europa-regular.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/europa-bold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/Montserrat-ExtraBold.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/Montserrat-ExtraBoldItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-montserrat',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <main className={montserrat.className}>
        <Head>
          <title>Bachata Underground XXL | Bachata weekend in Helsinki</title>
          <meta name="Bachata Underground XXL" content="Bachata weekend, festival in Helsinki, Finland" />
        </Head>
        <GoogleAnalytics trackPageViews gaMeasurementId="G-797GF2JHHZ" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </CookiesProvider>
  )
}

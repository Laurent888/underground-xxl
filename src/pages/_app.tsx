import { GoogleAnalytics } from 'nextjs-google-analytics'
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

const montserrat = localFont({
  src: [
    {
      path: '../fonts/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Montserrat-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Montserrat-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Montserrat-Bold.ttf',
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
    <main className={montserrat.className}>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-797GF2JHHZ" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}

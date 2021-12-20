/* eslint-disable prettier/prettier */
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
        <link rel="shortcut icon" href="/img/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/img/favicon-32x32.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Site para buscar endereços através do IP"
        />
      </Head>
      <Toaster />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App

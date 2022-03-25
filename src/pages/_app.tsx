import type { AppProps } from 'next/app'
import '../styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Listen Together</title>
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

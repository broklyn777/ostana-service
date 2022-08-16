import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="shortcut icon" href="/static/ostana-favicon.ico" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>

    <Layout>
      <Component {...pageProps} />
    </Layout></>
}

export default MyApp

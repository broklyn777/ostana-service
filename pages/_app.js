
/* eslint-disable @next/next/inline-script-id */
import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
 return <>
    <Head>
     <link rel="shortcut icon" href="/static/ostana-favicon.ico" />
     <meta content="width=device-width, initial-scale=1" name="viewport" />
   </Head>
 
     <Script strategy="afterInteractive"  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
     <Script>
 {`  window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());


 gtag('config', 'G-082LQ4GE44'); `}
</Script>


   <Layout>
     <Component {...pageProps} />
    
   </Layout>


   </>
}


export default MyApp






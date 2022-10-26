import '../styles/globals.scss'
import { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core' 
import '@fortawesome/fontawesome-svg-core/styles.css' 
import Head from 'next/head'
config.autoAddCss = false //


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
  <Head>
      <title> Agnieszka Jankowska </title>
      <meta name="description" content="Agnieszka Jankowska fizjoterapia i fotografia, w Zduńskiej Woli. Zajmuję się uroginekologią, fizjoterapią ortopedyczną, fizjoterapią neurologiczną oraz masażem leczniczym. Jako fotograf na terenie Zduńskiej Woli zajmuję fotografią ślubną, fotografią plenerową, fotografią chrztów świętych oraz uroczystości kościelnych, sesji rodzinnych oraz fotografuje komunie święte" />
      <link rel="icon" href="/logo.png" />
  </Head>
  <Component {...pageProps} />
    </>
  )

}

export default MyApp

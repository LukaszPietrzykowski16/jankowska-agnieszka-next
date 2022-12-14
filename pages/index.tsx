import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'

// paragraf p is just to improve SEO 

const Home: NextPage = () => {
  return (
<>
      <Head>
        <title> Agnieszka Jankowska Fizjoterapia i Fotografia w Zduńskiej Woli </title>
        <meta name="description" content="Agnieszka Jankowska fizjoterapia i fotografia, w Zduńskiej Woli. Zajmuję się uroginekologią, fizjoterapią ortopedyczną, fizjoterapią neurologiczną oraz masażem leczniczym. Jako fotograf na terenie Zduńskiej Woli zajmuję fotografią ślubną, fotografią plenerową, fotografią chrztów świętych oraz uroczystości kościelnych, sesji rodzinnych oraz fotografuje komunie święte" />
        <link rel="icon" href="/logo.png" />
      </Head>

     
      <main className="panel">
      
      <p className='paragraf'> Agnieszka Jankowska fizjoterapia i fotografia, w Zduńskiej Woli. Zajmuję się uroginekologią, fizjoterapią ortopedyczną, fizjoterapią neurologiczną oraz masażem leczniczym. Jako fotograf na terenie Zduńskiej Woli zajmuję fotografią ślubną, fotografią plenerową, fotografią chrztów świętych oraz uroczystości kościelnych, sesji rodzinnych oraz fotografuje komunie święte </p>
       <Link href="/fizjoterapia"> 
       <section className="panel-div">
         <img src={logo1.src} alt="fizjoterapia"/>
       </section> 
       </Link>
       <Link href="/fotografia"> 
       <section className="panel-div">
       <img src={logo2.src} alt="fotografia"/>
       </section>
       </Link>
      </main>
     
      </>  
  )
}

export default Home

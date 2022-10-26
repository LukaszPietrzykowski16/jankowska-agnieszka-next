import React from 'react'
import FizjoMenu from '../../components/fizjoterapia/FizjoMenu'
import Fizjo from '../../components/fizjoterapia/Fizjo'
import Cert from '../../components/fizjoterapia/Cert'
import ContactFizjo from '../../components/fizjoterapia/ContactFizjo'
import List from '../../components/fizjoterapia/List'
import Carousel from '../../components/fizjoterapia/Carousel'
import Footerelement from '../../components/fotografia/Footerelement'
import Head from 'next/head'

function index() {
  
    
  return (
    <>

    <Head>
      <title> Agnieszka Jankowska Fizjoterapia Zduńska Wola | Wizyta domowa na terenie Zduńskiej Woli </title>
      <meta name="description" content="Agnieszka Jankowska fizjoterapia, wykonuję fizjoterapię na terenie Zduńskiej Woli. Podczas wizyty domowej staram się pomóc w powrocie do dawnej sprawności fizycznej. Jednym z obszarów pracy, którym się zajmuje jako fizjoterapeuta jest uroginekologia. Prowadzę terapię kobiet w ciąży, z dolegliwościami bólowymi w obrębie miednicy oraz kręgosłupa. Zbadam stan mięśni dna miednicy po ciąży, poprowadzę terapię w rozejściu mięśni prostych brzucha, blizny po cesarskim cięciu, nietrzymaniu moczu oraz bolesnym miesiączkowaniu." />
      <link rel="icon" href="/logo.png" />
    </Head>

    <FizjoMenu/>
    <Fizjo/>
    <List/>
    <Cert/> 
    <Carousel/>
    <ContactFizjo/>
    <Footerelement/>
    </>
    
  )
}

export default index
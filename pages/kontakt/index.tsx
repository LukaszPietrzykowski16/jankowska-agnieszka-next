import React from 'react'
import Footerelement from '../../components/fotografia/Footerelement'
import Kontakt from '../../components/fotografia/Kontakt'
import Menu from '../../components/fotografia/Menu'
import Head from 'next/head'
function index() {
  
 

  return (
    <>
     <Head>
  <title> Agnieszka Jankowska </title>
  <meta name="description" content="Agnieszka Jankowska fotografia dane kontaktowe" />
  <link rel="icon" href="/logo.png" />
  </Head>
    <Menu/>
    <Kontakt/>
    <Footerelement/>
    </>
  )
}

export default index
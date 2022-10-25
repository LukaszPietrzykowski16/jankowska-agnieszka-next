import React from 'react'
import Footerelement from '../../components/fotografia/Footerelement'
import Menu from '../../components/fotografia/Menu'
import Oferta from '../../components/fotografia/Oferta'
import Head from 'next/head'


function index() {

  <Head>
  <title> Agnieszka Jankowska </title>
  <meta name="description" content="Agnieszka Jankowska fotografia dane kontaktowe" />
  <link rel="icon" href="/logo.png" />
  </Head>

  return (
    <>
    <Menu/>
    <Oferta/>
    <Footerelement/>
    </>
  )
}

export default index
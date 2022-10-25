import React from 'react'
import About from '../../components/fotografia/About'
import Content from '../../components/fotografia/Content'
import Footerelement from '../../components/fotografia/Footerelement'
import Menu from '../../components/fotografia/Menu'
import Offer from '../../components/fotografia/Offer'
import Portfolio from '../../components/fotografia/Portfolio'
import Social from '../../components/fotografia/Social'
import Head from 'next/head'


function index() {

  

  return (
    <>
    <Head>
    <title> Agnieszka Jankowska </title>
    <meta name="description" content="Agnieszka Jankowska fotografia" />
    <link rel="icon" href="/logo.png" />
    </Head>

    <Menu/>
    <Content/>
    <About/>
    <Portfolio/>
    <Offer/>
   
    <Social/>
    <Footerelement/>
    </>
   
  )
}

export default index
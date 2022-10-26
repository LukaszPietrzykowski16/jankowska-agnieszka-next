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
    <title> Agnieszka Jankowska Fotografia </title>
    <meta name="description" content="Jestem Agnieszka i mieszkam w Zduńskiej Woli. Fotografią zajmuję się od ponad 10 lat – w głównej mierze jest to fotografia reportażowa oraz portretowa. Chętnie wykonam dla Ciebie sesje indywidualną, w parze lub rodzinną, w swojej ofercie mam również reportaże z chrzcin, komunii czy wesel." />
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
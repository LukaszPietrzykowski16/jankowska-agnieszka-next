import React from 'react'
import About from '../../components/fotografia/About'

import Content from '../../components/fotografia/Content'
import Footerelement from '../../components/fotografia/Footerelement'
import Menu from '../../components/fotografia/Menu'
import Offer from '../../components/fotografia/Offer'
import Portfolio from '../../components/fotografia/Portfolio'
import Social from '../../components/fotografia/Social'



function index() {
  return (
    <>
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
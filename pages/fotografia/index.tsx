import React from 'react'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Content from '../../components/Content'
import Footerelement from '../../components/Footerelement'
import Menu from '../../components/Menu'
import Offer from '../../components/Offer'
import Portfolio from '../../components/Portfolio'
import Social from '../../components/Social'



function index() {
  return (
    <>
    <Menu/>
    <Content/>
    <About/>
    <Portfolio/>
    <Offer/>
    <Contact/>
    <Social/>
    <Footerelement/>
    </>
   
  )
}

export default index
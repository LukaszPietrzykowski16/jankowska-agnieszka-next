import React from 'react'
import FizjoMenu from '../../components/fizjoterapia/FizjoMenu'
import Fizjo from '../../components/fizjoterapia/Fizjo'
import Cert from '../../components/fizjoterapia/Cert'
import ContactFizjo from '../../components/fizjoterapia/ContactFizjo'
import List from '../../components/fizjoterapia/List'
import Footerelement from '../../components/Footerelement'
import Carousel from '../../components/fizjoterapia/Carousel'

function index() {
  return (
    <>
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
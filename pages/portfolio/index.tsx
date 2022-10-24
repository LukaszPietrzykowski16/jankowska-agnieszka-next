import React, {useEffect} from 'react'
import Footerelement from '../../components/fotografia/Footerelement'
import Galerry from '../../components/fotografia/Galerry'
import Menu from '../../components/fotografia/Menu'

function index() {
  
  useEffect(() => {
    const pathname = window.location.pathname
    console.log(pathname)
  })
  
  return (
    <>
    <Menu/>
    <Galerry/>
    <Footerelement/>
    </>
  )
}

export default index
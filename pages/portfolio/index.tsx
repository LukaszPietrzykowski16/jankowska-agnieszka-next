import React, {useEffect} from 'react'
import Footerelement from '../../components/fotografia/Footerelement'
import Galerry from '../../components/fotografia/Galerry'
import Menu from '../../components/fotografia/Menu'

function index() {
  return (
    <>
    <Menu/>
    <Galerry/>
    <Footerelement/>
    </>
  )
}

export default index
import React, {useEffect, useState, useRef} from 'react';
import logo from '../../images/logoFoto.png';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Menu() {
    const [menu, setMenu] = useState(false);

    const hideMenu = (menu: boolean) => {
      if (menu === true) {
        setMenu(false);
      } else {
        setMenu(true);
      }
      
    }
    
    return (
        <>
         <nav className='navigation'>
        <div className='logo'>
        <Link href="/" aria-label="Wróć na stronę główną"><img src={logo.src} alt="logo"/></Link>
        </div>
        <ul className='navigation-desktop'>
          <li className='sub-nav'><Link href="/fotografia"  aria-label="Stronę główną"> STRONA GŁÓWNA </Link> </li>
          <li className='sub-nav'><Link href="/portfolio" aria-label="Portfolio"> PORTFOLIO </Link> </li>
          <li className='sub-nav'><Link href="/oferta" aria-label="Oferta"> OFERTA </Link> </li>
          <li className='sub-nav'><Link href="/kontakt" aria-label="Kontakt"> KONTAKT </Link> </li>
          <li className='sub-nav'><Link href="/o-mnie" aria-label="O mnie"> O MNIE </Link> </li>
        </ul>

     
          <div className='sub-nav-mobile-x' onClick={() => hideMenu(menu)}> 
            <FontAwesomeIcon icon={ menu ?  faXmarkCircle  : faBars} />
          </div>
         
          </nav>
          <nav className='box'>
            <div className={menu ?  "menu-open": "menu-close"}>
            <div className='navigation-mobile'>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link href="/fohrefgrafia"> STRONA GŁÓWNA </Link> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link href="/portfolio"> PORTFOLIO </Link> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link href="/oferta"> OFERTA </Link> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link href="/kontakt"> KONTAKT </Link> </div>
              <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link href="/o-mnie"> O MNIE </Link> </div>
            </div>
        </div>
        
        </nav>
        </>
    )
}

export default Menu
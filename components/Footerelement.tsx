import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import logo from '../images/logoSzare.png'

function Footerelement() {
   return (
   <>
   <footer>
     <div className='footer-up'>
     <div className='footer-class'>
       <img src={logo.src} alt="logo"/>
     </div>
     <div className='footer-class-svg'>
       <p className='social-footer'> <a href='https://www.facebook.com/Jankowska.A.Fotografia'>  <FontAwesomeIcon icon={ faFacebook } /> </a>  <a href='https://www.instagram.com/jankowska_agnieszka_fotografia/'> <FontAwesomeIcon icon={ faInstagram } /> </a> </p>
       <p>  <FontAwesomeIcon icon={ faPhoneAlt  } /> 725 209 997 </p>
       <p> <FontAwesomeIcon icon={ faEnvelope  } /> f.f.agnieszkajankowska@gmail.com </p>
     </div>
     <div className='policy'>
     Wszelkie prawa zastrzeżone, strona stworzona przez Łukasza Pietrzykowskiego
     </div>
    
     </div>
    
    </footer> 
    </>
    );
 
 
}

export default Footerelement;

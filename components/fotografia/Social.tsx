import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'

function Social() {
  return (
      <>
      <section className='pink'>
      <div className='header-one'>
        <h1> Zapraszam na social media! </h1>
    </div>
     <div className='social'>
     <Link href='https://www.facebook.com/Jankowska.A.Fotografia'><div className='social-fb'> <FontAwesomeIcon icon={ faFacebook }  /> <p> Facebook </p></div></Link> 
     <Link href='https://www.instagram.com/jankowska_agnieszka_fotografia/'><div className='social-ig'> <FontAwesomeIcon icon={ faInstagram } /> <p> Instagram </p> </div></Link>
     </div>
      </section>
   
     </>
 );
}

export default Social;

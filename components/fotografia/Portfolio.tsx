import React from 'react';
import img2 from '../../images/portfolio/IMG_6122.webp';
import img3 from '../../images/portfolio/IMG_2887.webp';
import img4 from '../../images/portfolio/7.webp';
import img5 from '../../images/portfolio/1.webp';
import img6 from '../../images/portfolio/3.webp';
import img7 from '../../images/portfolio/sesje portretowe.webp';
import img8 from '../../images/portfolio/sesje rodzinne.webp';
import img9 from '../../images/portfolio/komunia.webp';
import img10 from '../../images/portfolio/chrzest plener.webp';
import Link from 'next/link'

function Portfolio() {
  return (
   <>
    
        <section className='portfolio'>
        <Link href="/portfolio/reportaz-slubny" ><div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div><img src={img3.src} alt="Reporaz slubny"/><p>  Reportaż ślubny </p>  </div></Link>
        <Link href="/portfolio/slub-plener"><div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div>  <img src={img2.src} alt="Plenerowe sesje ślubne"/><p>  Plenerowe sesje ślubne </p>  </div></Link>
        <Link href="/portfolio/chrzest-reportaz"><div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div>  <img src={img4.src} alt="Chrzest Święty - reportaż"/><p>  Chrzest Święty - reportaż</p>  </div></Link>
        <Link href="/portfolio/chrzest-plener"><div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div> <img src={img10.src} alt="Chrzest Święty - plene"/><p>  Chrzest Święty - plener</p> </div></Link> 
        <Link href="/portfolio/komunia"><div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div>  <img src={img9.src} alt="komunia"/><p>  Komunia Święta </p>  </div></Link>
        <Link href="/portfolio/imprezy-okolicznosciowe"><div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div>  <img src={img5.src} alt="Chrzest Święta - plener"/><p>  Imprezy okolicznościowe </p> </div></Link> 
        <Link href="/portfolio/sesja-portretowa"><div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div>  <img src={img7.src} alt="Sesja portehrefwa"/> <p>  Sesja portetowa </p> </div></Link>
        <Link href="/portfolio/rodzinne"><div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div>  <img src={img8.src} alt=" Sesje rodzinne"/><p>  Sesje rodzinne </p>  </div></Link>
        <Link href="/portfolio/ciazowe"><div className='sub-portfolio'> <div className='more'>  WIĘCEJ  </div>  <img src={img6.src} alt="Sesje brzuszkowe"/><p>  Sesje brzuszkowe </p>  </div></Link>
        </section>
       
           
        <section className='porfolio-button-div'>
        <Link href="/portfolio"><button className='center' aria-label='Zobacz portfolio'>  Zobacz portfolio </button></Link> 
        </section>
  
        </>
 );
}

export default Portfolio;

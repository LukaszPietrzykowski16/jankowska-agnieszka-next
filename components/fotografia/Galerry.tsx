import React, {useEffect} from 'react';
import img1 from '../../images/portfolio/sesje portretowe.webp';
import img2 from '../../images/portfolio/IMG_6122.webp';
import img3 from '../../images/portfolio/IMG_2887.webp';
import img4 from '../../images/portfolio/7.webp';
import img5 from '../../images/portfolio/chrzest plener.webp';
import img6 from '../../images/portfolio/13.webp';
import img7 from '../../images/portfolio/3.webp';
import img8 from '../../images/portfolio/sesje rodzinne.webp'
import img11 from '../../images/portfolio/1.webp';
import Link from 'next/link'


export default function Galerry() {
    /*
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
     
    gsap.from('.test-gallery-subsection', {scrollTrigger: {
      trigger: '.test-gallery-subsection',
      toggleActions: 'play none none none'},
      duration: 1.5, 
      ease: "slow(0.7, 0.7, false)", 
    
      y: 150 
    })
          
  }, [])

  useEffect(() => {
     
    gsap.from('.test-gallery-subsection-reverse', {scrollTrigger: {
      trigger: '.test-gallery-subsection-reverse',
      toggleActions: 'play none none none'},
      duration: 1.5, 
      ease: "slow(0.7, 0.7, false)", 
    
      y: 150 
    })
          
  }, [])
*/
  return ( <>  
  <section className='test-gallery'>
   
    <Link href="/portfolio/reportaz-slubny">
    <div className='test-gallery-subsection'>
      <div className='test-gallery-subsection-img'>
        <img src={img2.src} alt="Reportaż ślubny"/>
      </div>
      <div className='test-gallery-subsection-txt'>
    
       
        <h1> Reportaż ślubny </h1>
        <p> W tym dniu będę Wam towarzyszyć podczas przygotowań, ceremonii ślubu oraz wesela. Może to być tradycyjny ślub kościelny, cywilny bądź w plenerze? Niezależnie od tego gdzie chcecie złożyć przysięgę chętnie do Was dołączę i uchwycę ten moment. Zakres moich usług fotograficznych jest kompleksowy, ale również elastyczny co oznacza, że Ty decydujesz o zakresie mojej pracy oraz to co chcesz otrzymać później – odbitki, pendrive czy album. A może wszystko? Nie ma problemu </p>
      </div>
    </div>
    </Link>
    <Link href="/portfolio/slub-plener"> 
    <div className='test-gallery-subsection-reverse'>

  
    <div className='test-gallery-subsection-txt'>
    
    
    <h1> Plenerowe sesje ślubne </h1><p> 
    W tym dniu będę Wam towarzyszyć podczas przygotowań, ceremonii ślubu oraz wesela. Może to być tradycyjny ślub kościelny, cywilny bądź w plenerze? Niezależnie od tego gdzie chcecie złożyć przysięgę chętnie do Was dołączę i uchwycę ten moment. Zakres moich usług fotograficznych jest kompleksowy, ale również elastyczny co oznacza, że Ty decydujesz o zakresie mojej pracy oraz to co chcesz otrzymać później – odbitki, pendrive czy album. A może wszystko? Nie ma problemu </p>
        
  </div>
  
  <div className='test-gallery-subsection-img'>
        <img src={img3.src} alt="Plenerowe sesje ślubne"/>
      </div>
     
      
    </div>
    </Link>
    <Link href="/portfolio/chrzest-reportaz"> 
    <div className='test-gallery-subsection'>
      <div className='test-gallery-subsection-img'>
        <img src={img4.src} alt="Chrzest święty - reportaż"/>
      </div>
      <div className='test-gallery-subsection-txt'>
    
       
        <h1> Chrzest święty - reportaż </h1> <p> 
        Chrzest święty to wyjątkowe wydarzenie w Waszej rodzinie, dlatego zróbcie sobie i swojemu dziecku piękną pamiątkę na całe życie. Wykonam dla Was reportaż z przygotowań w domu, ceremonii chrztu świętego w kościele oraz podczas uroczystości na Sali. Jeśli pogoda pozwoli możemy zrobić zdjęcia w plenerze bądź poprzestać na naturalnych fotografiach z przyjęcia rodzinnego. 
  </p>
      </div>
    </div>
    </Link>
    <Link href="/portfolio/chrzest-plener"> 
    <div className='test-gallery-subsection-reverse'>
     
      <div className='test-gallery-subsection-txt'>
    
       
        <h1>  Chrzest święty - plener </h1> <p> 
        Chrzest święty to wyjątkowe wydarzenie w Waszej rodzinie, dlatego zróbcie sobie i swojemu dziecku piękną pamiątkę na całe życie. Wykonam dla Was reportaż z przygotowań w domu, ceremonii chrztu świętego w kościele oraz podczas uroczystości na Sali. Jeśli pogoda pozwoli możemy zrobić zdjęcia w plenerze bądź poprzestać na naturalnych fotografiach z przyjęcia rodzinnego. 
</p>
      </div>
      <div className='test-gallery-subsection-img'>
        <img src={img5.src} alt="Chrzest święty plener"/>
      </div>
    </div>
    </Link>
    <Link href="/portfolio/komunia"> 
    <div className='test-gallery-subsection'>
    <div className='test-gallery-subsection-img'>
        <img src={img6.src} alt="Chrzest święty plener"/>
      </div>
      <div className='test-gallery-subsection-txt'>
    
       
        <h1>  Komunia Święta  </h1> <p> 
        Komunia święta dla dzieci to z pewnością duże przeżycie. Warto to wydarzenie sfotografować, aby dobrze zapamiętać ten dzień. Moja oferta może zawierać reportaż z przygotowań w domu, ceremonii przyjęcia komunii w kościele oraz podczas uroczystości na sali. Jestem elastyczna i możecie wybrać poszczególne elementy oferty jeśli np. w Waszym kościele jest zamówiony fotograf dla całej grupy to mogę przyjechać pod kościół zrobić rodzinne zdjęcia tylko dla Was przed uroczystością bądź tylko na salę po uroczystości. To Wy decydujecie czego potrzebujecie w tym dniu.  </p>
      </div>
    
    </div>
    </Link>
    
    <Link href="/portfolio/imprezy-okolicznosciowe"> 
    <div className='test-gallery-subsection-reverse'>
    <div className='test-gallery-subsection-txt'>
    
   
    <h1> Imprezy okolicznościowe </h1> <p> 
    Jest wiele okazji, które mogę zatrzymać w kadrze swojego obiektywu. Zapiszę w kadrach Wasze uroczystości urodzinowe czy imprezy rocznicowe. Tort, dmuchanie świeczek, zabawy i radość dzieci biegających w kółko. Nie ukrywam, że najlepiej się czuję, gdy mogę złapać takie niespodziewane momenty, które są niezaplanowane i niejednokrotnie staną się Waszymi ulubionymi momentami na zdjeciach. Na pozowane ujęcia oczywiście też znajdzie się miejsce. </p>
  </div>
      <div className='test-gallery-subsection-img'>
        <img src={img11.src}  alt="Imprezy okolicznosciowe"/>
      </div>
      
    </div>
    </Link>


    <Link href="/portfolio/ciazowe"> 
    <div className='test-gallery-subsection'>
    
      <div className='test-gallery-subsection-img'>
        <img src={img7.src} alt="Ciazowe" />
      </div>
      <div className='test-gallery-subsection-txt'>
    
     
        <h1> Sesje ciążowe </h1>   <p> 
        Ciąża to niewątpliwie niezwykły czas dla każdej kobiety. Zdjęcia ciążowe to piękna pamiątka zarówno dla mamy i taty z tego wyjątkowego okresu. Podczas sesji ciążowej staram się uwiecznić wszystkie Wasze emocje, jakie towarzyszą oczekującym rodzicom na swojego maluszka. </p>
      </div>
    </div>
    </Link>

    

    <Link href="/portfolio/sesja-portretowa"> 
    <div className='test-gallery-subsection-reverse'>
     
      <div className='test-gallery-subsection-txt'>
    
      
        <h1>  Sesje portretowe </h1>  <p> 
        Przyda się każdej osobie. Potrzebujesz zdjęć biznesowych na swoją stronę? A może przeszłaś/przeszedłeś zmiany w swoim życiu i chcesz pokazać światu swój nowy wizerunek? Sesję zdjęciową przeżyj jako nowe niesamowite doświadczenie. Pokażę Ci, że możesz wyglądać fantastycznie przed obiektywem, wyeksponuje Twoje zalety, których Ty nie dostrzegasz w sobie na co dzień. Poczuj radość podczas sesji zdjęciowej i uzyskaj piękne portrety, które staną się Twoimi ulubionymi. </p>
      </div>
      <div className='test-gallery-subsection-img'>
        <img src={img1.src} alt="Chrzest święty plener"/>
      </div>
    </div>
    </Link>

    <Link href="/portfolio/imprezy-okolicznosciowe"> 
    <div className='test-gallery-subsection'>
     
      <div className='test-gallery-subsection-img'>
        <img src={img8.src} alt="Chrzest święty plener"/>
      </div>
      <div className='test-gallery-subsection-txt'>
        
        <h1>  Sesje rodzinne </h1><p> 
        Przyda się każdej osobie. Potrzebujesz zdjęć biznesowych na swoją stronę? A może przeszłaś/przeszedłeś zmiany w swoim życiu i chcesz pokazać światu swój nowy wizerunek? Sesję zdjęciową przeżyj jako nowe niesamowite doświadczenie. Pokażę Ci, że możesz wyglądać fantastycznie przed obiektywem, wyeksponuje Twoje zalety, których Ty nie dostrzegasz w sobie na co dzień. Poczuj radość podczas sesji zdjęciowej i uzyskaj piękne portrety, które staną się Twoimi ulubionymi. </p>
      </div>
      
    </div>
    </Link>

    
    
  
  </section>
  </>
  )
}



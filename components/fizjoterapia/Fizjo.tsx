import React from 'react';
import img1 from '../../images/fizjo.jpg'
import Link from 'next/link'

function Fizjo() {
    return (
        <>
        <main id='about-section2'> 
        <div className='about-photo'>
          <img src={img1.src} alt="Zdjecię przedstawiające Agnieszkę Jankowską" />
        </div>
        <div className='about-text'>
          <h1> Cześć! </h1>
          <p className='pad'> Nazywam się Agnieszka Jankowska i jestem magistrem fizjoterapii. Ukończyłam Uniwersytet Medyczny w Łodzi na tym kierunku, ale zawodowo jestem związana ze Zduńską Wolą. Po zakończeniu studiów w dalszym ciągu zdobywam wiedzę na licznych szkoleniach. (Zobacz tutaj) </p>
          <p className='pad'> Od 2017 roku zaczęłam pracować w przychodni jako fizjoterapeuta, a od 2021 roku prowadzę własną praktykę fizjoterapeutyczną. Wychodząc naprzeciw potrzebom pacjentów – dojeżdżam do Waszych domach. </p>
          <p className='pad'> Podczas wizyty domowej staram się pomóc w powrocie do dawnej sprawności fizycznej, ale również szeroko pojętą profilaktyką, oraz promowaniem zdrowego stylu życia. Pracuję zarówno z dziećmi, dorosłymi oraz osobami starszymi. </p>
          <p className='pad'> Jednym z obszarów pracy, którym się zajmuje jako fizjoterapeuta jest uroginekologia. Prowadzę terapię kobiet w ciąży, z dolegliwościami bólowymi w obrębie miednicy oraz kręgosłupa. Zbadam stan mięśni dna miednicy po ciąży, poprowadzę terapię w rozejściu mięśni prostych brzucha, blizny po cesarskim cięciu, nietrzymaniu moczu oraz bolesnym miesiączkowaniu.  </p>
          <p className='pad'> W swojej pracy wykorzystuje techniki nabyte na szkoleniach. Głównie pracuje swoimi dłońmi, ale również używam innych niezbędnych urządzeń potrzebnych do profesjonalnego masażu i ćwiczeń. </p>
          <p className='bo'> Zajmuję się również fotografią </p>
          <button> <Link href='/fotografia'> Sprawdź! </Link>  </button>
        </div>
        </main>
       
        </>
        
    )
}

export default Fizjo;
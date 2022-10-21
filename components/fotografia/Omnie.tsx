import React from 'react';
import img1 from '../../images/fizjo.jpg';


function OMnie() {
  return (
      <>
    <main className='about-section'> 
      <div className='about-photo'>
          <img src={img1.src} alt="Zdjecię przedstawiające Agnieszkę Jankowską" />
      </div>
      <div className='about-text'>
          <h1> Cześć! </h1>
          <p> Jestem Agnieszka i mieszkam w Zduńskiej Woli. Fotografią zajmuję się od ponad 10 lat – w głównej mierze jest to fotografia reportażowa oraz portretowa. Chętnie wykonam dla Ciebie sesje indywidualną, w parze lub rodzinną, w swojej ofercie mam również reportaże z chrzcin, komunii czy wesel. Podczas fotografowania staram się uchwycić Waszą codzienność, bliskość i emocje. Jeśli chodzi o zakres mojej pracy to jestem elastyczna i staram się odpowiedzieć na Wasze potrzeby, gdyż wiem, że każdy z nas się różni i potrzebuje zupełnie czegoś innego. Dojeżdżam do Waszych domów oraz w miejsca uroczystości.</p>
          <h2 className='bo'> Zajmuję się również fizjoterapią </h2>
          <button> <a href='/fizjoterapia'> Sprawdź! </a>  </button>
      </div>
    </main>
    </>);
    
}

export default OMnie;
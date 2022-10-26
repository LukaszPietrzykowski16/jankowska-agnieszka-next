import React from 'react';


function List() {
    return (
        <>

      <section id='about-info'>
      <h2 id="range"> Zakres fizjoterapii </h2>
        <div className='range-grid'>
        
          <div className="range-div1">
          <p> Fizjoterapia uroginekologiczna </p>
          <ul>
            <li> Rozejście mięśni prostych brzucha </li>
            <li> Terapia blizny po cesarskim cięciu </li>
            <li> Nietrzymanie moczu </li>
            <li> Badanie dysfunkcji dna miednicy </li>
            <li> Bolesne miesiączki </li>
            <li> Dolegliwości bólowe w ciąży </li>
          </ul>
          </div>
          <div className="range-div2">
          <p> Fizjoterapia ortopedyczna </p>
          <ul>
            <li> Bóle kręgosłupa, rwa kulszowa </li>
            <li> Przeciążenia tkanek w wyniku długotrwałej postawy siedzącej, stojącej, uprawiania sportu, dźwigania, </li>
            <li> Stany po urazach, złamaniach, endoprotezoplastyce, unieruchomieniu kończyn, ograniczenia zakresu ruchu, </li>
            <li> Usprawnienie po operacji, po przebytej chorobie, pionizacja, nauka chodzenia, ćwiczenia oddechowe, ogólnousprawniające </li>
          </ul>
          </div>
          <div className='range-div3'>
            <p> Fizjoterapia neurologiczna </p>
            <ul>
              <li> stany po udarze mózgu </li>
              <li> w chorobie Parkinsona, Alzheimera, stwardnienie rozsiane, mózgowe porażenie dziecięce </li>
            </ul>
          </div>
          <div className='range-div4'>
            <p> Masaż leczniczy </p>
           
            <ul>
              <li> Terapia wad postawy u dzieci i młodzieży </li>
              <li> Instruktaż ćwiczeń korekcyjnych, rozluźniających, wzmacniających, </li>
            </ul>
          </div>
          </div>
      </section>
       
        </>
    )
}


export default List
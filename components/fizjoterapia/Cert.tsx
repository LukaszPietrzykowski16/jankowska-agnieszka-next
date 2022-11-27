
import React, { useState, useEffect } from "react";
import img0 from '../../images/Fizjoterapia-8.jpg';
import img1 from '../../images/Fizjoterapia-9.jpg';
import img2 from '../../images/Fizjoterapia-20.jpg';




const images = [img0, img1, img2]



function Offer() {

  {images.map((image, index) => (
    <img
      key={index}
      className="image"
      src={image.src}
      style={{
        animationDelay: `${index * 4}s`, 
        zIndex: `-${index + 1}` 
        }}
     alt="albumy ze zdjęciami"/>
  ))}
const slidePresentationTime = 6000 
const [currentSlide, setCurrentSlide] = useState(0) 


useEffect(() => {
  const sliderInterval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length); 
    }, slidePresentationTime);

    return () => {
      clearInterval(sliderInterval)
    }
})

  return (
    <>
    <section className="content-gallery">
      <div className="content">
        <div  className="content-img">
          {images.map((image, index) => (
            <img
              
              key={index}
              className={index === currentSlide ? 'image active' : 'image'}
              src={image.src}
              style={{
                zIndex: `-${index + 1}`
              }}
            alt="Zdjęcie przedstawiające albumy ze zdjęciami"/>
          ))}
        </div>
        <div className="content-text-mobile">
         <p>    W mojej ofercie znajdziecie również masaże, posiadam profesjonalny przenośny stół do takiego rodzaju zabiegów. Posiadam również wyspecjaliozwane narzędzie do masażu klasycznego jak i masażu tkanek głebokich. Pomagają również w rehabilitacji pacjentów. </p>
        </div>
      </div>
      <div className="content-text-fizjo">
        <p>     W mojej ofercie znajdziecie również masaże, posiadam profesjonalny przenośny stół do takiego rodzaju zabiegów. Posiadam również wyspecjaliozwane narzędzie do masażu klasycznego jak i masażu tkanek głebokich. Pomagają również w rehabilitacji pacjentów. </p>
      </div>

    </section>   
  
    </>
  );
}


export default Offer;
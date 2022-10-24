import React, { useEffect, useState, useCallback}  from 'react';
import {
    ref,
    getDownloadURL,
    listAll,
  } from "firebase/storage";
import { projectStorage} from "../../config";
import { faArrowLeft, faXRay, faArrowRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Reportaz = () => {
    const [image, setImageUrls] = useState([]);
    const [ready, setReady] = useState(false)
    const [index, setIndex] = useState(0)
    
    
   
    useEffect(() => {
        const pathname = window.location.pathname
        // fetching data from storage in firebase
        const imagesListRef = ref(projectStorage, `${pathname.replace('/portfolio', '')}`);
      try {
        listAll(imagesListRef)
        .then((response) => {response.items.forEach((item) => {getDownloadURL(item)
 
        .then((url) => {setImageUrls((prev) => [...prev, url]);
        });
        });
        });
        
      } catch {
        console.log('error')
      }
     
    }, []);
    // displaying images on the screen 
    useEffect(() => {
      const timer = setTimeout(() => {
        setReady(true)
      }, 2000);
      return () => clearTimeout(timer);
    }, []);
    const [lightbox, setLightbox] = useState(false);
    
    const showGallery = (url: never) => {
      image.some(exactImage => {
        if (exactImage === url) {
          setIndex(image.indexOf(exactImage))
        }
        else {
          return;
        }
      });
      setLightbox(true)
        
    }
    
    const hideGallery = () => {
        setLightbox(false)
    }
    
    const leftSlide = (index: number) => {
        if (index === 0) {
            index = image.length;
          }
          setIndex(index - 1)  
    }

    const rightSlide = (index: number) => {
        if (index === image.length) {
            index = -1;
          }
          setIndex(index + 1)  
    }

    const handleKeyPress = useCallback((event: { key: string; }) => {
        if (event.key === 'ArrowRight'){
            rightSlide(index)
        } else if (event.key === 'ArrowLeft') {
            leftSlide(index)
        }
      }, [index]);
    
      useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, [handleKeyPress]);


      const Galleria = () => {
        image.sort();
        return (
          image.map((url) => {
            return (
                <div className={"pic"}  onClick={() => showGallery(url)}>
                <img src={url} alt="Zdjęcie autorstwa Agnieszki Jankowskiej"/>
                </div>
            );
          })
        )
        
      }


  return (
    <>

        <div className={lightbox ? "gallery-open": "gallery-close"}  >
            <img src={image[index]}/>
            <div className='exit' onClick={() => hideGallery()}><FontAwesomeIcon icon={ faTimesCircle }/> </div>
            <div className='left-arrow' onClick={() =>  leftSlide(index)} >  <FontAwesomeIcon icon={ faArrowLeft }/> </div>
            <div className='right-arrow' onClick={() => rightSlide(index)}>  <FontAwesomeIcon icon={ faArrowRight  }/> </div>
        </div>

     
      <div className='gallery-portfolio'>
      {ready === true ? Galleria() : <div className='roller-conatiner'>  <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> </div>}
      
      </div>
    
    </>
  );
    
}


export default Reportaz; 
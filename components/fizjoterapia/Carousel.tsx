import { useState, useEffect, useRef, SetStateAction } from 'react';
import img0 from '../../images/uprawnienia/img0.jpg';
import img1 from '../../images/uprawnienia/img1.jpg';
import img2 from '../../images/uprawnienia/img2.jpg';
import img3 from '../../images/uprawnienia/img3.jpg';
import img4 from '../../images/uprawnienia/img4.jpg';
import img5 from '../../images/uprawnienia/img5.jpg';
import img6 from '../../images/uprawnienia/img6.jpg';


// there will be carousel element
function Carousel() {
    const [images, setImages] = useState([img0.src, img1.src, img2.src, img3.src, img4.src, img5.src, img6.src])
    const [index, setIndex] = useState(0)
    const [value, setValue] = useState(0)
    const [stop, setStop] = useState(false)
   
    if (index === images.length) {
        setIndex(0)
    }
    
    if (images[index]=== undefined){
        setIndex(0)
    }


    useEffect(() => {
        const interval = setInterval(() => {
        if (stop === true){
           clearInterval(interval)
        }
        // in setInterval we must do something like this
        setIndex(index => index + 1)
        setValue(0)
       
        }, 7000);
            return () => clearInterval(interval);
          }, []);
  
   
    useEffect(() => {
        const interval = setInterval(() => {
            setValue(value => value + 1);
        }, 66);
        return () => {
            clearInterval(interval);
        };
          });

    function check(number: SetStateAction<number>){
        
        setIndex(number)
        setValue(0)
    }


    return (
    <>
    


    <div id="carousel">
        <div className="carousel-img">
            <img src={images[index]}/>
        </div>
        <div className="carousel-bar">
            <div className='bar' >
                <span style={{width:`${value}%`}}> </span>
            </div>
        </div>

        <div className='dots'>
            <div className={index === 0 ? 'dot pink' : 'dot'} onClick={() => check(0)}>

            </div>
            <div className={index === 1 ? 'dot pink' : 'dot'} onClick={() => check(1)}>
                
            </div>
            <div className={index === 2 ? 'dot pink' : 'dot'} onClick={() => check(2)}>
                
            </div>
            <div className={index === 3 ? 'dot pink' : 'dot'} onClick={() => check(3)}>
                
            </div>
            <div className={index === 4 ? 'dot pink' : 'dot'} onClick={() => check(4)}>
                
            </div>
            <div className={index === 5 ? 'dot pink' : 'dot'} onClick={() => check(5)}>
                
            </div>
            <div className={index === 6 ? 'dot pink' : 'dot'} onClick={() => check(6)}>
                
            </div>
        </div>
        
    </div>

    </>
    )
}

export default Carousel;
import { useState, useEffect, useRef, SetStateAction } from 'react';
import img0 from '../images/uprawnienia/img0.jpg';
import img1 from '../images/uprawnienia/img1.jpg';
import img2 from '../images/uprawnienia/img2.jpg';
import img3 from '../images/uprawnienia/img3.jpg';
import img4 from '../images/uprawnienia/img4.jpg';
import img5 from '../images/uprawnienia/img5.jpg';
import img6 from '../images/uprawnienia/img6.jpg';


// there will be carousel element
function Carousel() {
    const [images, setImages] = useState([img0, img1, img2, img3, img4, img5, img6])
    const [index, setIndex] = useState(0)
    const [value, setValue] = useState(0)

    let intervalRef = useRef()
   
    if (index === images.length) {
        setIndex(0)
    }

    useEffect(() => {
        intervalRef = setInterval(() => {
        // in setInterval we must do something like this
        setIndex(index => index + 1)
        setValue(0)
       
        }, 7000);
            return () => clearInterval();
          }, []);
  
   
    useEffect(() => {
        const interval = setInterval(() => {
            setValue(value => value + 1);
        }, 66);
        return () => {
            clearInterval(interval);
        };
          });

          // i need to clean up the interval right here
    function check(number: SetStateAction<number>){
        setIndex(number)
        setValue(0)
       
    }


    return (
    <>
    


    <div className="carousel">
        <div className="carousel-img">
            <img src={images[index].src}/>
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
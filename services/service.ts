import React, { useEffect, useState, useCallback}  from 'react';
import {
    ref,
    getDownloadURL,
    listAll,
  } from "firebase/storage";
  import { projectStorage} from "../config";

const Service = () => {
    const [image, setImageUrls] = useState([]);
   
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
    return image
}

export default Service
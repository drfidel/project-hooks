import React, { useRef, useEffect, useState } from 'react'

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  
    const imageRef = useRef(null);

    const [isLoading, setisLoading] = useState(true);

    const isInView = () =>{
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    const [inView, setinView] = useState(false);

    useEffect(() => {
        setisLoading(false);
        setinView(isInView());
      window.addEventListener("scroll", scrollHandler);
    
      return () => {
        window.removeEventListener("scroll", scrollHandler);
      };
    },[]);

    const scrollHandler = () => {
        setinView(isInView());
    };
    

    return (
    <img 
        src={
            isLoading ? "data:image/gif;base64,R":  
            inView ? secondaryImg : primaryImg }
        alt="" 
        ref = {imageRef}
        width={350}
        />
  );
};

export default ImageToggleOnScroll;
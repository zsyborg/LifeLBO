import React, { useEffect } from 'react';
import Image from 'next/image';
import {motion, Transition} from 'motion/react';
import ImageSlider from "react-image-gallery";


function Intro() {


    const transition = {
        duration: 1.5,
        delay: 0.5,
        ease: [0.5, 0.71, 0.2, 1.01],
      }


  return (
    <>
        <div className='container'>
             <ImageSlider
                items={images}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                showNav={true}
                autoPlay={true}
                autoPlayInterval={3000}
                />
        </div>
    </>
  );
}

export default Intro;
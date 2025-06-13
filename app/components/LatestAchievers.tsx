import React, { useEffect } from 'react';
import Image from 'next/image';
import {motion, Transition} from 'motion/react';
import ImageSlider from "react-image-gallery";


function LatestAchievers() {



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

export default LatestAchievers;
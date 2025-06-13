import React, { useEffect } from 'react';
import Image from 'next/image';
import {motion, Transition} from 'motion/react';


function Intro() {


    const transition = {
        duration: 1.5,
        delay: 0.5,
        ease: [0.5, 0.71, 0.2, 1.01],
      }


  return (
    <>
    <div className='cinema'>

            <motion.img
                    src="/logo.png"
                    alt="Logo"
                    width={180}
                    height={50}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{scale: 1}}
                    initial={{scale: 0}}
                    transition={transition}
                    className='logo'
                    id='logo'
                    />
            </div>
    </>
  );
}

export default Intro;
import { Inter } from 'next/font/google';

import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import About from './main/About';
import Contact from './main/Contact';
import Pricing from './main/Pricing';
import Skills from './main/Skills';

import { motion, useAnimationControls, useAnimation} from "framer-motion"
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer"


const inter = Inter({ subsets: ['latin'] })


function Main(){
  const controls = useAnimationControls();

  useEffect(() => {
    controls.set({
      borderRadius: "0rem",
    })
    controls.start({
      borderRadius: "1rem",
      transition: {duration: 0.2},
    });
  }, [])

return (
    <>
        <About controls={controls} />
        <About controls={controls} />
        <Skills controls={controls} />
        <Pricing controls={controls} />
        <Contact controls={controls} />
    </>
)
}

export default Main;
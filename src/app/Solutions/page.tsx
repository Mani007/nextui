"use client"
import React from 'react'
import Navani from '../components/Navani'
import Footer from '../components/Footer'
import Image from "next/image";
import llm from '../../../public/images/pexels-google-deepmind-18069697.jpg'
import vision from '../../../public/images/pexels-google-deepmind-18069371.jpg'
import video from '../../../public/images/pexels-google-deepmind-18069365.jpg'
import audio from '../../../public/images/pexels-kenji-ogami-17400199.jpg'
import stock from '../../../public/images/pexels-kampus-production-8353793.jpg'
import gene from '../../../public/images/pexels-google-deepmind-18069424.jpg'
import forecast from '../../../public/images/pexels-tima-miroshnichenko-7567554.jpg'
import location from '../../../public/images/pexels-pixabay-38271.jpg'
import space from '../../../public/images/pexels-pixabay-256381.jpg'
import iot from '../../../public/images/pexels-jakub-zerdzicki-19089175.jpg'
import Solutions from '../basepages/Solutions';
function page() {
  return (
    <>
    <Navani/> <br /><br /><br /><br /><br />
    <Solutions/>
    <Footer/>
    </>
  )
}

export default page
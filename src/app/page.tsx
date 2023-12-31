"use client"
import Image from 'next/image'
// 1. import `NextUIProvider` component
import { NextUIProvider} from "@nextui-org/react";
import First from './components/First';
import Navbarset from './components/Navbarset';
import Navtail from './components/Navtail';
import Hero from './components/Hero';
import Sevices from './components/Sevices';
import Card from './components/Card';
import Mcard from './components/Mcard';
import Corsal from './components/Corsal';
import Swip from './components/Swip';
import Topbar from './components/Topbar';
import Grid from './components/Grid';
import Casenav from './components/Casenav';
import Rightcard from './components/Rightcard';
import Textcon from './components/Textcon';
import Navani from './components/Navani';
import Footer from './components/Footer';
import Locations from './basepages/Locations';
export default function Home() {
  return (
    <NextUIProvider>
   {/* <First></First> */}
   {/* <Navbarset></Navbarset> */}
   <Navani/>
   {/* <Navtail/> */}
   {/* <Hero/>
   <Sevices/> */}
   {/* <Mcard/> */}
   {/* <Corsal/> */}
   {/* <Swip/> */}
   {/* <Topbar/> */}
   {/* <Casenav/> */}
   {/* <Rightcard/> */}
   {/* <Textcon/> */}
   <Locations/>
   <Grid/>
   <Footer/>
    </NextUIProvider>
  )
}

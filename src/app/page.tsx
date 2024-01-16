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
import Flowbitecorsol from './components/Flowbitecorsol';
import Rightcard from './components/Rightcard';
import Textcon from './components/Textcon';
import Navani from './components/Navani';
import Footer from './components/Footer';
import Locations from './basepages/Locations';
import Services from './basepages/Services';
import Techitem from './components/Techitem';
import Contact from './components/Contact';
import Bgvideo from './components/Bgvideo';
import Landingsolution from './components/Landingsolution';
export default function Home() {
  return (
    <NextUIProvider>
   {/* <First></First> */}
   {/* <Navbarset></Navbarset> */}
   <Navani/>
   {/* <Navtail/> */}
   <Bgvideo/> 
    {/* <Hero/> */}
   {/* <Sevices/> */} 
   {/* <Mcard/> */}
   {/* <Corsal/> */}
   {/* <Swip/> */}
   {/* <Topbar/> */}
   {/* <Casenav/> */}
   {/* <Rightcard/> */}
   {/* <Textcon/> */}
   {/* <Techitem/> */}
   <Flowbitecorsol/>
   <Services/>
   <Landingsolution/>
   <Hero/>
   {/* <Locations/> */}
   <Contact/>
   {/* <Grid/> */}
   <Footer/>
    </NextUIProvider>
  )
}

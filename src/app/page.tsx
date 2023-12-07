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
export default function Home() {
  return (
    <NextUIProvider>
   {/* <First></First> */}
   {/* <Navbarset></Navbarset> */}
   <Navtail/>
   {/* <Hero/>
   <Sevices/> */}
   {/* <Mcard/> */}
   {/* <Corsal/> */}
   {/* <Swip/> */}
   <Topbar/>
    </NextUIProvider>
  )
}

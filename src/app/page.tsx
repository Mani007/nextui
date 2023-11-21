"use client"
import Image from 'next/image'
// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import First from './components/First';
import Navbarset from './components/Navbarset';
export default function Home() {
  return (
    <NextUIProvider>
   {/* <First></First> */}
   <Navbarset></Navbarset>
    </NextUIProvider>
  )
}

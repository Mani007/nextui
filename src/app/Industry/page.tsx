"use client"
import React from 'react'
import Image from 'next/image'
import Navani from '../components/Navani'
import Footer from '../components/Footer'
import {data1,data2,data3,data4} from '../data/indusdata'
import Card from '../components/Card'
import Industry from '../basepages/Industry'
function page() {
  return (
    <>
    <Navani/> <br /><br /><br /><br /><br />
   <Industry/>
    <Footer/>
    </>
  )
}

export default page
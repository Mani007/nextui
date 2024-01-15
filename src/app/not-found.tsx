"use client"
import React from 'react'
import Navani from '../app/components/Navani'
import Contact from '../app/components/Contact'
import Footer from '../app/components/Footer'
function NotFound() {
  return (
    <>
    
     <Navani/>
     <br />
    <h2 className="text-6xl mt-28 text-center underline "> 404 Page not found </h2> <br />
    <h2 className="text-4xl  text-center underline "> Please Contact OPScraft Team </h2> <br /> <br />
    <Contact/>
    <Footer/>
    </>
  )
}

export default NotFound
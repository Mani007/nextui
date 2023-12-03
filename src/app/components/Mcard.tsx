import React from 'react'
import Card from './Card'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function Mcard() {
  return (
    <>
    <div className="container justify-center mx-auto flex px-5 py-7 md:flex-row flex-col items-center">
        {/* <Carousel showArrows={true} > */}
        <div className='mx-3'>
            <Card/>
        </div>
        <div className='mx-3'>
            <Card/>
        </div>
        <div className='mx-3'>
            <Card/>
        </div>
        {/* </Carousel> */}
        
    </div>
    </>
  )
}

export default Mcard
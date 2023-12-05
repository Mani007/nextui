import React, {useState} from 'react'
import Card from './Card'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import {items} from '../data/datacard'
function Mcard() {
    
  return (
    <>
    <div className="container justify-center mx-auto flex px-5 py-7 md:flex-row flex-col items-center">
        
      {
        items.map( (item) =>
        {
            
            return (
                <div className='mx-3'>
                    <Card images = {item.images} title = {item.title} description = {item.description} />
                 </div>
            )
        } )
      }  
        {/* <div className='mx-3'>
            <Card/>
        </div> */}
        {/* <div className='mx-3'>
            <Card/>
        </div>
        <div className='mx-3'>
            <Card/>
        </div> */}
      
       
        
    </div>
    </>
  )
}

export default Mcard
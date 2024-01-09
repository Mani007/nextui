import React from 'react'
import Card from './Card'

import {items} from '../data/datacard'
function Grid() {
  return (
    <>
    <div className="container relative mx-auto px-5 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 items-center justify-center ">
      
        {/* <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>
 
        <div>09</div> */}
        {
        items.map( (item) =>
        {
            
            return (
                <div className='mx-3 '>
                    <Card images = {item.images} title = {item.title} description = {item.description} />
                 </div>
            )
        } )
      } 
    </div>
    </>
  )
}

export default Grid
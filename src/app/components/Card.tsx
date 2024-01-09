import React, {useState} from 'react'
import Image from 'next/image'

interface Carddata{
    images: string,
    title: string,
    description: string
    //width: number
}
function Card(props: Carddata) {
   
  return (
    <>
    <div className="container max-w-sm rounded overflow-hidden shadow-lg" >
  {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
  <Image
      src={props.images}
      width={720}
      height={600}
      alt="Picture of the author"
    />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.title}</div>
    <p className="text-gray-700 text-base">
      {props.description}
    </p>
  </div>

  
  {/* <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div> */}
</div>
    </>
  )
}

export default Card
import React from 'react'
import { FcReading } from "react-icons/fc";
function Services() {
  return (
    <>
    <div className='container relative mx-auto flex flex-col justify-between items-center  mt-4 px-4 gap-2 text-center md:flex-row'>
        <div  className='w-1/5 bg-gray-200 h-[400px]'>001
            <div className='w-32 h-32'>

        <FcReading />
            </div>
        </div>
        <div className='w-1/5 bg-gray-200 h-[400px]'>002</div>
        <div className='w-1/5 bg-gray-200 h-[400px]'>003</div>
        <div className='w-1/5 bg-gray-200 h-[400px]'>004</div>
        <div className='w-1/5 bg-gray-200 h-[400px]'>005</div>
    </div>
    </>
  )
}

export default Services
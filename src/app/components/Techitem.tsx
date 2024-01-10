import React from 'react'
import Image from "next/image";
import dvc from '../../../public/images/Data vc.png'
function Techitem() {
  return (
    <>
    <div className='container relative mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col md:flex-row'>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
            <h2 className='text-2xl md:text-4xl'> Data Versioning and Controls</h2>

        </div>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={dvc}
              width={720}
              height={600}
              alt="Data version control system to track changes in data while performing the ML operations. It also track complete data lineage with ease."
            />
          </div>
        </div>

    </div>
    </>
  )
}

export default Techitem
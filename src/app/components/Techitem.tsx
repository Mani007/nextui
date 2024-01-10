import React from 'react'
import Image from "next/image";
import dvc from '../../../public/images/Data vc.png'
import model from '../../../public/images/ML Codes.png'
import training from '../../../public/images/SVM.png'
import testing from '../../../public/images/model ops.png'
import prod from '../../../public/images/Training and Evaluation.png'
import responsible from '../../../public/images/Testing craft.png'
function Techitem() {
  return (
    <>
    <br />
    <h2 className="text-4xl text-center underline "> Technology</h2> <br />
    <div className='container relative mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col md:flex-row'>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
            <h2 className='text-2xl md:text-4xl'> Data Craft Data Versioning and Controls</h2>

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
    <div className='container relative mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col md:flex-row'>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={training}
              width={720}
              height={600}
              alt="parallel model training system to track changes in models while performing the ML operations. It also track complete ML model lineage with ease."
            />
          </div>
        </div>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
            <h2 className='text-2xl md:text-4xl'> Model Craft</h2>

        </div>

    </div>
    <div className='container relative mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col md:flex-row'>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
            <h2 className='text-2xl md:text-4xl'> Production Craft</h2>

        </div>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={testing}
              width={720}
              height={600}
              alt="Production version control system to track changes in development while performing the ML operations. It also track complete production model lineage with ease."
            />
          </div>
        </div>

    </div>
    <div className='container relative mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col md:flex-row'>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={model}
              width={720}
              height={600}
              alt="Data version control system to track changes in data while performing the ML operations. It also track complete data lineage with ease."
            />
          </div>
        </div>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
            <h2 className='text-2xl md:text-4xl'> Training Craft</h2>

        </div>

    </div>
    <div className='container relative mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col md:flex-row'>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
            <h2 className='text-2xl md:text-4xl'> Monitoring Craft</h2>

        </div>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={prod}
              width={720}
              height={600}
              alt="Data version control system to track changes in data while performing the ML operations. It also track complete data lineage with ease."
            />
          </div>
        </div>

    </div>
    <div className='container relative mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col md:flex-row'>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={responsible}
              width={720}
              height={600}
              alt="Data version control system to track changes in data while performing the ML operations. It also track complete data lineage with ease."
            />
          </div>
        </div>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
            <h2 className='text-2xl md:text-4xl'> Testing and Evaluation Craft</h2>

        </div>

    </div>
    </>
  )
}

export default Techitem
import React from 'react'
import Image from "next/image";
import llm from '../../../public/images/pexels-google-deepmind-18069697.jpg'
import vision from '../../../public/images/pexels-google-deepmind-18069371.jpg'
import video from '../../../public/images/pexels-google-deepmind-18069365.jpg'
import audio from '../../../public/images/pexels-kenji-ogami-17400199.jpg'
import stock from '../../../public/images/pexels-kampus-production-8353793.jpg'
import gene from '../../../public/images/pexels-google-deepmind-18069424.jpg'
import forecast from '../../../public/images/pexels-tima-miroshnichenko-7567554.jpg'
import location from '../../../public/images/pexels-pixabay-38271.jpg'
import space from '../../../public/images/pexels-pixabay-256381.jpg'
import iot from '../../../public/images/pexels-jakub-zerdzicki-19089175.jpg'
function Solutions() {
  return (
    <>
    <br />
    <h2 className="text-4xl text-center underline "> Solutions </h2> <br />
    <div className='container relative mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col md:flex-row'>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
            <h2 className='text-2xl md:text-4xl'> Large Language Models (Text Data) OPS </h2>
            <p>Complete Large Language models (LLM) end-to-end fully operational solution with multiple opensource or non opensource LLM models to be fully customized to meet your need. </p>

        </div>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={llm}
              width={720}
              height={600}
              alt="Complete Large Language models (LLM) end-to-end fully operational solution with multiple opensource or non opensource LLM models to be fully customized to meet your need."
            />
          </div>
        </div>

    </div>
    <div className='container relative mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col-reverse md:flex-row'>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={vision}
              width={720}
              height={600}
              alt="Complete customizable solution using our MLops framework to meet your need in any type of image data such as image classification or text-to-image etc."
            />
          </div>
        </div>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
            <h2 className='text-2xl md:text-4xl'> Vision Data OPS</h2>
            <p>Complete customizable solution using our MLops framework to meet your need in any type of image data such as image classification or text-to-image etc. </p>
        </div>

    </div>
    <div className='container relative mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col md:flex-row'>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
            <h2 className='text-2xl md:text-4xl'> Video Data OPS </h2>
            <p>Complete customizable solution using our MLops framework to meet your need in any type of video data processing such as object detection or video information extraction etc. </p>

        </div>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={video}
              width={720}
              height={600}
              alt="Complete customizable solution using our MLops framework to meet your need in any type of video data processing such as object detection or video information extraction etc."
            />
          </div>
        </div>

    </div>
    <div className='container relative mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col-reverse md:flex-row'>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={audio}
              width={720}
              height={600}
              alt="Complete customizable solution using our MLops framework to meet your need in any type of audio data such as voice detection or voice-to-text etc."
            />
          </div>
        </div>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
            <h2 className='text-2xl md:text-4xl'> Audio Data OPS</h2>
            <p>Complete customizable solution using our MLops framework to meet your need in any type of audio data such as voice detection or voice-to-text etc. </p>
        </div>

    </div>
    <div className='container relative mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col md:flex-row'>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
            <h2 className='text-2xl md:text-4xl'> Numeric Data OPS </h2>
            <p>Complete customizable solution using our MLops framework to meet your need in any type of numerical data processing such as financial data or accounts information extraction etc. </p>

        </div>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={stock}
              width={720}
              height={600}
              alt="Complete customizable solution using our MLops framework to meet your need in any type of numerical data processing such as financial data or accounts information extraction etc."
            />
          </div>
        </div>

    </div>
    <div className='container relative mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col-reverse md:flex-row'>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={gene}
              width={720}
              height={600}
              alt="Complete customizable solution using our MLops framework to meet your need in any bioinformatics data such as genetic similarity analysis etc.."
            />
          </div>
        </div>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
            <h2 className='text-2xl md:text-4xl'> Bioinformatics Data OPS</h2>
            <p>Complete customizable solution using our MLops framework to meet your need in any bioinformatics data such as genetic similarity analysis etc. </p>
        </div>

    </div>
    <div className='container relative mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col md:flex-row'>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
            <h2 className='text-2xl md:text-4xl'> Time Seties Data OPS </h2>
            <p>Complete customizable solution using our MLops framework to meet your need in any type of time-series data processing such as forcasting etc. </p>

        </div>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={forecast}
              width={720}
              height={600}
              alt="Complete customizable solution using our MLops framework to meet your need in any type of time-series data processing such as forcasting etc."
            />
          </div>
        </div>

    </div>
    <div className='container relative mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col-reverse md:flex-row'>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={location}
              width={720}
              height={600}
              alt="Complete customizable solution using our MLops framework to meet your need in any locations data such as nodes clusturing etc."
            />
          </div>
        </div>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
            <h2 className='text-2xl md:text-4xl'> Locations Data OPS</h2>
            <p>Complete customizable solution using our MLops framework to meet your need in any locations data such as nodes clusturing etc. </p>
        </div>

    </div>
    <div className='container relative mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col md:flex-row'>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
            <h2 className='text-2xl md:text-4xl'> Space Data OPS </h2>
            <p>Complete customizable solution using our MLops framework to meet your need in any type of Space data processing such as Space image integration etc. </p>

        </div>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={space}
              width={720}
              height={600}
              alt="Complete customizable solution using our MLops framework to meet your need in any type of Space data processing such as Space image integration etc."
            />
          </div>
        </div>

    </div>
    <div className='container relative mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col-reverse md:flex-row'>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={iot}
              width={720}
              height={600}
              alt="Complete customizable solution using our MLops framework to meet your need in any IoTs based data such as fault detection etc."
            />
          </div>
        </div>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
            <h2 className='text-2xl md:text-4xl'> IoT Data OPS</h2>
            <p>Complete customizable solution using our MLops framework to meet your need in any IoTs based data such as fault detection etc. </p>
        </div>

    </div>
    <br />
    <h2 className="text-4xl text-center underline "> And many more......  </h2> <br />
    <br />
    <h2 className="text-sm text-center  "> *Please note all these solution are made for testing our MLops framework.  </h2> <br />
    </>
  )
}

export default Solutions
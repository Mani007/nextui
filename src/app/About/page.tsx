"use client"
import React from 'react'
import Navani from '../components/Navani'
import Image from "next/image";
import mainimg from '../../../public/images/pexels-google-deepmind-17483870.jpg'
import Team from '../components/Team';
import Footer from '../components/Footer';
import Locations from '../basepages/Locations';
function page() {
  return (
    <>
    <Navani/>
    <div className='container  relative mx-auto px-5 py-5 text-center items-center justify-center flex flex-col'>
    <div className="container   rounded  shadow-lg">
            <Image
              src={mainimg}
              className='box-border w-full h-60'
              width={1440}
              height={300}
              alt="Data version control system to track changes in data while performing the ML operations. It also track complete data lineage with ease."
            />
          </div>

    </div>
    <div className='container  relative mx-auto px-5 py-5 text-center items-center justify-center flex flex-col'>
      <h2 className='text-6xl underline'> About OPScraft</h2> <br />
      <p className='text-xl'> We are your top-notch team for highly rapid and scalable machine learning solutions
development. Our team includes some of the best software craftsmen including data scientists
and Machine Learning Engineers with doctorate in Applied Mathematics to deliver Artificial

intelligence or Machine Learning solutions at scale for various industries. We provide an end-to-
end machine learning development process to design, build and manage reproducible, testable,

evolvable and highly scalable ML-powered software at an unprecedented speed.</p>

    </div>
    <Team/>
    <Locations/>
    <Footer/>
    </>
  )
}

export default page
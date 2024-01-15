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
    <Navani/> <br /><br /><br /><br /><br />
    <div className='container relative mx-auto px-5 py-5 text-center items-center justify-center flex flex-col'>
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
      <p className='text-xl'> We are a team of elite software craftsmen specializing in large-scale AI and
machine-learning technology consulting. We have expertise for your entire
Innovation life cycle management for the next coming decades.
We provide an end-to-end machine learning development process to design,

build and manage reproducible, testable, evolvable and highly scalable ML-
powered software at an unprecedented speed. Our team includes some of the best

software craftsmen including data scientists and Machine Learning Engineers
with doctorate in Applied Mathematics to deliver Artificial intelligence or
Machine Learning solutions at scale for various industries.
If you are planning to dominate your industry for next few decades with
artificial intelligence and machine learning solutions, with our capability, you
will have scalable yet very cost effective solution that does not require any
changes in your existing system. Our solutions are effortlessly adaptable to any
future changes, even if your data keeps changing and evolving. With us your will
be assured to be completely GDPR(or any other law) compliant at an
unprecedented pace. Even if your solution needs to be deployed in on-premise,
so that you will have total control over your data.
We are your complete AI/ML Innovation life-cycle management that boldly
promise and guarantee to keep you ahead of your competition.</p>

    </div>
    <Team/>
    <Locations/>
    <Footer/>
    </>
  )
}

export default page
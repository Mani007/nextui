"use client"
import React from 'react'
import Navani from '../components/Navani'
import Image from "next/image";
import mainimg from '../../../public/images/pexels-google-deepmind-17483870.jpg'
import Team from '../components/Team';
import Footer from '../components/Footer';
import Locations from '../basepages/Locations';
import Ourvalues from '../components/Ourvalues';
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
      <p className='text-xl leading-loose'> We are a team of elite software craftsmen specializing in large-scale AI and
machine-learning technology consulting. We have expertise for your entire
Innovation life cycle management for the next coming decades and guarantee to keep you ahead of your competition.
We provide an end-to-end machine learning development process to design, build and manage reproducible, testable, evolvable and highly scalable Machine Learning
powered software at an unprecedented speed. </p> <br />
<p className='text-xl leading-loose'>
Our team includes some of the best software experts including data scientists and Machine Learning Engineers
with doctorate in Applied Mathematics to deliver any type of Artificial intelligence and
Machine Learning solutions at scale for various industries.Our solutions are effortlessly adaptable to any
future changes, even if your data keeps changing and evolving.
</p> <br />
<p className='text-xl leading-loose'>
If you are planning to dominate your industry for next few decades with
artificial intelligence and machine learning solutions, with our capability, you
will have scalable yet very cost effective solutions in just few weeks. And it does not require any
changes in your existing system.  With us you will
be assured to be completely GDPR(or any other law) compliant by default, even for on-premise solutions. This will give you total control over your data.
</p>

    </div>
    <Team/>
    <Ourvalues/>
    <Locations/>
    <Footer/>
    </>
  )
}

export default page
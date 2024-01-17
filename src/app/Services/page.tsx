"use client"
import React from 'react'
import Image from "next/image";
import undraw_success_factors_re_ce93 from "../../../public/maps/illustration/undraw_success_factors_re_ce93.svg";
import undraw_programming_re_kg9v from "../../../public/maps/illustration/undraw_programming_re_kg9v.svg";
import undraw_coworking from "../../../public/maps/illustration/undraw_co-working_re_w93t.svg";
import undraw_questions_re_1fy7 from "../../../public/maps/illustration/undraw_questions_re_1fy7.svg";
import undraw_teaching_re_g7e3 from "../../../public/maps/illustration/undraw_teaching_re_g7e3.svg";
import Navani from '../components/Navani';
import Footer from '../components/Footer';

function page() {
  return (
    <>
    <Navani/> 
    <br />
    <h2 className="text-4xl text-center mt-24 underline "> Services</h2> <br />
    <div className='container relative hover:bg-[#7FFFD4] mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col md:flex-row'>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
        <h2 className="text-2xl underline">Consulting</h2>
            <p className="text-xl"> No matter how much the AI technolgy evolve in upcoming days, our AI strategies will 10x your profits for next 25 years. </p> <br /> 
        </div>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={undraw_success_factors_re_ce93}
              width={720}
              height={600}
              alt="Data version control system to track changes in data while performing the ML operations. It also track complete data lineage with ease."
            />
          </div>
        </div>

    </div>
    <div className='container relative hover:bg-[#7FFFD4] mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col-reverse md:flex-row'>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={undraw_coworking}
              width={720}
              height={600}
              alt="parallel model training system to track changes in models while performing the ML operations. It also track complete ML model lineage with ease."
            />
          </div>
        </div>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
        <h2 className="text-2xl underline">Development</h2>
            <p className="text-xl"> Complete end-to-end AI/ML technology development that reduced your development costs and time upsto 90 %. And with complete data protection. </p> <br />
       </div>

    </div>
    <div className='container relative hover:bg-[#7FFFD4] mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col md:flex-row'>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
        <h2 className="text-2xl underline">Staffing</h2>
            <p className="text-xl"> No more long hiring cycle for recruiting an AI/ML expert. Our team can deliver anything in AI/ML.  </p> <br />
     </div>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={undraw_questions_re_1fy7}
              width={720}
              height={600}
              alt="Production version control system to track changes in development while performing the ML operations. It also track complete production model lineage with ease."
            />
          </div>
        </div>

    </div>
    <div className='container relative hover:bg-[#7FFFD4] mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col-reverse md:flex-row'>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={undraw_teaching_re_g7e3}
              width={720}
              height={600}
              alt="Data version control system to track changes in data while performing the ML operations. It also track complete data lineage with ease."
            />
          </div>
        </div>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
        <h2 className="text-2xl underline">Troubleshooting</h2>
            <p className="text-xl"> Your current AI/ML system failed and you need to fix it immidiately. Try our premium trouble shooting services for mission critical applications.</p> <br />
       
        </div>

    </div>
    <div className='container relative hover:bg-[#7FFFD4] mx-auto px-5 py-5 items-center justify-center mt-4 gap-6 flex flex-col md:flex-row'>
        <div className='w-3/4    text-center md:flex-row  md:w-screen'>
        <h2 className="text-2xl underline">Training</h2>
            <p className="text-xl"> Tailor made corporate traing in state-of-the-art MLops to skyrocket your teams productivity. </p> <br />
      
        </div>
        <div className=' w-screen px-5 py-5  mt-4 flex justify-center items-center  md:w-screen '>
        <div className="container max-w-sm  rounded  shadow-lg">
            <Image
              src={undraw_teaching_re_g7e3}
              width={720}
              height={600}
              alt="Data version control system to track changes in data while performing the ML operations. It also track complete data lineage with ease."
            />
          </div>
        </div>

    </div>
    <Footer/>
    </>
  )
}

export default page
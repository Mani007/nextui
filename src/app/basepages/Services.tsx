import React from "react";
import Image from "next/image";
import undraw_success_factors_re_ce93 from "../../../public/maps/illustration/undraw_success_factors_re_ce93.svg";
import undraw_programming_re_kg9v from "../../../public/maps/illustration/undraw_programming_re_kg9v.svg";
import undraw_coworking from "../../../public/maps/illustration/undraw_co-working_re_w93t.svg";
import undraw_questions_re_1fy7 from "../../../public/maps/illustration/undraw_questions_re_1fy7.svg";
import undraw_teaching_re_g7e3 from "../../../public/maps/illustration/undraw_teaching_re_g7e3.svg";
function Services() {
  return (
    <>
    <br />
    <h2 className="text-4xl text-center mt-4 underline "> Services</h2> <br />
      <div className="container relative mx-auto flex flex-col justify-between items-stretch content-center mt-4 mb-4 px-4 gap-6 text-center md:flex-row   w-screen">
        
        <div className="w-screen bg-slate-50 hover:bg-[#7FFFD4] overflow-hidden shadow-lg md:w-screen">
          <div className="container max-w-sm rounded  shadow-lg">
            <Image
              src={undraw_success_factors_re_ce93}
              width={720}
              height={600}
              alt="No matter how much the AI technology evolve in upcoming days, our AI strategies will 10x your profits for next 25 years."
            />
          </div>
            <h2 className="text-2xl underline">Consulting</h2>
            <p className="text-xl"> No matter how much the AI technology evolve in upcoming days, our AI strategies will 10x your profits for next 25 years. </p> <br />
          {/* <button className="bg-gray-500  hover:bg-[#00df9a] text-white font-bold py-2 px-4 rounded mt-auto ">
            Read More
          </button> */}
        </div>
        <div className="w-screen bg-slate-50 hover:bg-[#7FFFD4] overflow-hidden shadow-lg  md:w-screen">
          <div className="container max-w-sm rounded  shadow-lg">
            <Image
              src={undraw_programming_re_kg9v}
              width={720}
              height={600}
              alt="No matter how much the AI technology evolve in upcoming days, our AI strategies will 10x your profits for next 25 years."
            />
          </div>
            <h2 className="text-2xl underline">Development</h2>
            <p className="text-xl"> Complete end-to-end AI/ML technology development that reduced your development costs and time upto 90 %. And with complete data protection. </p> <br />
          {/* <button className="bg-gray-500  hover:bg-[#00df9a] text-white font-bold py-2 px-4 rounded">
            Read More
          </button> */}
        </div>
        <div className="w-screen bg-slate-50 hover:bg-[#7FFFD4] overflow-hidden shadow-lg  md:w-screen">
          <div className="container max-w-sm rounded  shadow-lg">
            <Image
              src={undraw_coworking}
              width={720}
              height={600}
              alt="Complete end-to-end AI/ML technology development that reduced your development costs and time upto 90 %. And with complete data protection."
            />
          </div>
            <h2 className="text-2xl underline">Staffing</h2>
            <p className="text-xl"> No more long hiring cycle for recruiting an AI/ML expert. Our team can deliver anything in AI/ML.  </p> <br />
          {/* <button className="bg-gray-500  hover:bg-[#00df9a] text-white font-bold py-2 px-4 rounded">
            Read More
          </button> */}
        </div>
        <div className="w-screen bg-slate-50 hover:bg-[#7FFFD4] overflow-hidden shadow-lg  md:w-screen">
          <div className="container max-w-sm rounded  shadow-lg">
            <Image
              src={undraw_questions_re_1fy7}
              width={720}
              height={600}
              alt="Picture of the author"
            />
          </div>
            <h2 className="text-2xl underline">Troubleshooting</h2>
            <p className="text-xl"> Your current AI/ML system failed and you need to fix it immediately. Try our premium trouble shooting services for mission critical applications.</p> <br />
          {/* <button className="bg-gray-500  hover:bg-[#00df9a] text-white font-bold py-2 px-4 rounded">
            Read More
          </button> */}
        </div>
        <div className="w-screen bg-slate-50 hover:bg-[#7FFFD4] overflow-hidden shadow-lg  md:w-screen">
          <div className="container max-w-sm rounded  shadow-lg">
            <Image
              src={undraw_teaching_re_g7e3}
              width={720}
              height={600}
              alt="Picture of the author"
            />
          </div>
            <h2 className="text-2xl underline">Training</h2>
            <p className="text-xl"> Tailor made corporate training in state-of-the-art MLops to skyrocket your teams productivity. </p> <br />
          {/* <button className="bg-gray-500  hover:bg-[#00df9a] text-white font-bold py-2 px-4 rounded">
            Read More
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Services;

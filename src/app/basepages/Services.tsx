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
      <div className="container relative mx-auto flex flex-col justify-between items-center  mt-4 px-4 gap-2 text-center md:flex-row   w-screen">
        <div className="w-screen bg-gray-200 h-screen md:w-screen">
          <div className="container max-w-sm rounded  shadow-lg">
            <Image
              src={undraw_success_factors_re_ce93}
              width={720}
              height={600}
              alt="Picture of the author"
            />
            <h2 className="text-2xl">Consulting</h2>
          </div>
          <button className="bg-gray-500  hover:bg-[#00df9a] text-white font-bold py-2 px-4 rounded">
            Read More
          </button>
        </div>
        <div className="w-screen bg-gray-200 h-screen md:w-screen">
          <div className="container max-w-sm rounded  shadow-lg">
            <Image
              src={undraw_programming_re_kg9v}
              width={720}
              height={600}
              alt="Picture of the author"
            />
            <h2 className="text-2xl">Development</h2>
          </div>
          <button className="bg-gray-500  hover:bg-[#00df9a] text-white font-bold py-2 px-4 rounded">
            Read More
          </button>
        </div>
        <div className="w-screen bg-gray-200 h-screen md:w-screen">
          <div className="container max-w-sm rounded  shadow-lg">
            <Image
              src={undraw_coworking}
              width={720}
              height={600}
              alt="Picture of the author"
            />
            <h2 className="text-2xl">Staffing</h2>
          </div>
          <button className="bg-gray-500  hover:bg-[#00df9a] text-white font-bold py-2 px-4 rounded">
            Read More
          </button>
        </div>
        <div className="w-screen bg-gray-200 h-screen md:w-screen">
          <div className="container max-w-sm rounded  shadow-lg">
            <Image
              src={undraw_questions_re_1fy7}
              width={720}
              height={600}
              alt="Picture of the author"
            />
            <h2 className="text-2xl">Troubleshooting</h2>
          </div>
          <button className="bg-gray-500  hover:bg-[#00df9a] text-white font-bold py-2 px-4 rounded">
            Read More
          </button>
        </div>
        <div className="w-screen bg-gray-200 h-screen md:w-screen">
          <div className="container max-w-sm rounded  shadow-lg">
            <Image
              src={undraw_teaching_re_g7e3}
              width={720}
              height={600}
              alt="Picture of the author"
            />
            <h2 className="text-2xl">Training</h2>
          </div>
          <button className="bg-gray-500  hover:bg-[#00df9a] text-white font-bold py-2 px-4 rounded">
            Read More
          </button>
        </div>
      </div>
    </>
  );
}

export default Services;

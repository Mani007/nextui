import React from "react";
import { FcSignature } from "react-icons/fc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLanguage } from "@fortawesome/free-solid-svg-icons";

function Landingsolution() {
  return (
    <>
      <div className="">
        <div className="container relative flex flex-col md:flex-row justify-center items-center w-screen">
          <div className="flex flex-col mx-auto gap-6 text-center md:flex-row  items-center justify-center">
           
              <div className="">
                <FontAwesomeIcon
                  icon={faLanguage}
                  style={{ color: "#63E6BE" }}
                  size="5x"
                />

                {/* <FontAwesomeIcon icon="fa-solid fa-language" style={{color: "#63E6BE",}} /> */}
                <h6 className="title-font sm:text-4xl inset-x-0 bottom-0 text-lg  font-medium text-gray-900">
                  LLMops
                </h6>
                <p className="mb-8 inset-x-0 bottom-0 text-base leading-relaxed">
                  Language and Text Data
                </p>
              </div>
              {/* <div>
                <FcSignature size={75}/>
            <h6 className='title-font sm:text-4xl inset-x-0 bottom-0 text-lg mb-4 font-medium text-gray-900'>LLMops</h6>
            <p className='mb-8 inset-x-0 bottom-0 text-base leading-relaxed'>Language and Text Data</p>

                </div> */}
            
          </div>
          <div className="container relative flex flex-col md:flex-row justify-center items-center"></div>
          <div className="container relative flex flex-col md:flex-row justify-center items-center"></div>
        </div>
      </div>
    </>
  );
}

export default Landingsolution;

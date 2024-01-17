import React from "react";
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDna, faLanguage, faImage, faFileVideo, faTable, faMusic, faSatellite,faLocationDot,faChartLine,faSquarePlus } from "@fortawesome/free-solid-svg-icons";

function Landingsolution() {
  return (
    <>
      <br />
    <h2 className="text-4xl text-center mt-4 underline "> Solutions</h2> <br />
    <Link href='/Solutions'>
          <div className="flex flex-col mx-auto gap-10 text-center md:flex-row  items-center justify-center">
           
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

              <div className="">
              <FontAwesomeIcon icon={faImage} style={{color: "#63E6BE",}} size="5x" />
                
                <h6 className="title-font sm:text-4xl inset-x-0 bottom-0 text-lg  font-medium text-gray-900">
                  IMAGEops
                </h6>
                <p className="mb-8 inset-x-0 bottom-0 text-base leading-relaxed">
                  MLops for HUGE Images Data
                </p>
              </div>

              <div className="">
              <FontAwesomeIcon icon={faFileVideo} style={{color: "#63E6BE",}} size="5x" />
                
                <h6 className="title-font sm:text-4xl inset-x-0 bottom-0 text-lg  font-medium text-gray-900">
                  VIDEOops
                </h6>
                <p className="mb-8 inset-x-0 bottom-0 text-base leading-relaxed">
                  MLops for Large Video Data
                </p>
              </div>
              <div className="">
              <FontAwesomeIcon icon={faTable} style={{color: "#63E6BE",}}size="5x"/>                
                <h6 className="title-font sm:text-4xl inset-x-0 bottom-0 text-lg  font-medium text-gray-900">
                  TABLEops
                </h6>
                <p className="mb-8 inset-x-0 bottom-0 text-base leading-relaxed">
                  MLops for all numeric and categorical Data
                </p>
              </div>
              <div className="">
              
              <FontAwesomeIcon icon={faMusic} style={{color: "#63E6BE",}}size="5x"/>                
                <h6 className="title-font sm:text-4xl inset-x-0 bottom-0 text-lg  font-medium text-gray-900">
                  AUDIOops
                </h6>
                <p className="mb-8 inset-x-0 bottom-0 text-base leading-relaxed">
                  MLops for speech, audio and music Data
                </p>
              </div>
            
            
          </div>
          <div className=" flex flex-col mx-auto gap-10 text-center md:flex-row justify-center items-center">
          <div className="">
                <FontAwesomeIcon
                  icon={faDna}
                  style={{ color: "#63E6BE" }}
                  size="5x"
                />

                {/* <FontAwesomeIcon icon="fa-solid fa-language" style={{color: "#63E6BE",}} /> */}
                <h6 className="title-font sm:text-4xl inset-x-0 bottom-0 text-lg  font-medium text-gray-900">
                  BIOops
                </h6>
                <p className="mb-8 inset-x-0 bottom-0 text-base leading-relaxed">
                  Bioinformatics Data
                </p>
              </div>

              <div className="">
              <FontAwesomeIcon icon={faSatellite} style={{color: "#63E6BE",}} size="5x" />
             
                
                <h6 className="title-font sm:text-4xl inset-x-0 bottom-0 text-lg  font-medium text-gray-900">
                  SPACEops
                </h6>
                <p className="mb-8 inset-x-0 bottom-0 text-base leading-relaxed">
                  MLops for Space Dataset
                </p>
              </div>

              <div className="">
              
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#63E6BE",}} size="5x" />
                <h6 className="title-font sm:text-4xl inset-x-0 bottom-0 text-lg  font-medium text-gray-900">
                  LOCATIONops
                </h6>
                <p className="mb-8 inset-x-0 bottom-0 text-base leading-relaxed">
                  MLops for Geographical Data
                </p>
              </div>
              <div className="">
              <FontAwesomeIcon icon={faChartLine} style={{color: "#63E6BE",}} size="5x" />              
                <h6 className="title-font sm:text-4xl inset-x-0 bottom-0 text-lg  font-medium text-gray-900">
                  FINANCEops
                </h6>
                <p className="mb-8 inset-x-0 bottom-0 text-base leading-relaxed">
                  MLops for time-series Data
                </p>
              </div>
              <div className="">
              
              
              <FontAwesomeIcon icon={faSquarePlus} style={{color: "#63E6BE",}} size="5x"/>                
                <h6 className="title-font sm:text-4xl inset-x-0 bottom-0 text-lg  font-medium text-gray-900">
                  AND MANY MORE ....
                </h6>
                
              </div>
        </div>
      
        </Link>
    </>
  );
}

export default Landingsolution;

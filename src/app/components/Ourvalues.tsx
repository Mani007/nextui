import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble, faHandsHoldingCircle,faUsers,faAward,faEarthAmericas, faHandsPraying } from "@fortawesome/free-solid-svg-icons";

function Ourvalues() {
  return (
    <>
          <br />
    <h2 className="text-4xl text-center mt-4 underline ">Our Values</h2> <br />
    <p className="text-2xl text-center mt-2 "> OPScraft is a values-driven organization. Our success story, our growth and the way we do our businesses are all driven by our self-imposed values.</p> <br /> <br />
    
          <div className=" relative  flex-col mx-auto px-4  text-center md:flex-row  items-center justify-center">
          
           
              <div className="hover:scale-110  ">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{ color: "#63E6BE" }}
                  size="5x"
                />

                {/* <FontAwesomeIcon icon="fa-solid fa-language" style={{color: "#63E6BE",}} /> */}
                <h6 className="title-font sm:text-4xl inset-x-0 bottom-0 text-lg  font-medium text-gray-900">
                  Integrity
                </h6>
                <p className="mb-8 inset-x-0 bottom-0 text-base leading-relaxed">
                  We believe that everything we do must stand the test of public scrutiny in terms of fairness, transparency, and honesty. 
                </p>
              </div>

              <div className="hover:scale-110  ">
              
              <FontAwesomeIcon icon={faHandsHoldingCircle} style={{color: "#63E6BE",}} size="5x" />
                
                <h6 className="title-font sm:text-4xl inset-x-0 bottom-0 text-lg  font-medium text-gray-900">
                  Responsibility
                </h6>
                <p className="mb-8 inset-x-0 bottom-0 text-base leading-relaxed">
                  We always operate in full accountability mode, hence its always zero tolerance to excuses. This practice is the source of our strong relationship with our stakeholders. 
                </p>
              </div>

              <div className="hover:scale-110  ">
             
              <FontAwesomeIcon icon={faUsers} style={{color: "#63E6BE",}} size="5x" />
                
                <h6 className="title-font sm:text-4xl inset-x-0 bottom-0 text-lg  font-medium text-gray-900">
                  People
                </h6>
                <p className="mb-8 inset-x-0 bottom-0 text-base leading-relaxed">
                 Our practices are governed by people,for the people, positively effecting lives of the people and hence what is earned goes back to the people.
                </p>
              </div>
              
             
            
            
          </div>
          <div className=" relative flex-col mx-auto px-4  text-center md:flex-row  items-center justify-center">
          <div className="hover:scale-110  ">
        
                <FontAwesomeIcon
                  icon={faAward}
                  style={{ color: "#63E6BE" }}
                  size="5x"
                />

                {/* <FontAwesomeIcon icon="fa-solid fa-language" style={{color: "#63E6BE",}} /> */}
                <h6 className="title-font sm:text-4xl inset-x-0 bottom-0 text-lg  font-medium text-gray-900">
                  Excellence
                </h6>
                <p className="mb-8 inset-x-0 bottom-0 text-base leading-relaxed">
                    Our core approach to innovation are bold and agile. We don&apos;t believe in average performance. Everything we do here is centered around excellence
                </p>
              </div>

              <div className="hover:scale-110  ">
              
              <FontAwesomeIcon icon={faEarthAmericas} style={{color: "#63E6BE",}} size="5x" />
             
                
                <h6 className="title-font sm:text-4xl inset-x-0 bottom-0 text-lg  font-medium text-gray-900">
                  Environment
                </h6>
                <p className="mb-8 inset-x-0 bottom-0 text-base leading-relaxed">
                 While crating the next business practices through innovation, we are committed to integrate environmental and social responsibilities in our businesses. 
                </p>
              </div>

              <div className="hover:scale-110  ">
              
              <FontAwesomeIcon icon={faHandsPraying} style={{color: "#63E6BE",}} size="5x" />
                <h6 className="title-font sm:text-4xl inset-x-0 bottom-0 text-lg  font-medium text-gray-900">
                  Humility
                </h6>
                <p className="mb-8 inset-x-0 bottom-0 text-base leading-relaxed">
                  We practice true humility, as it is an ultimate truth. Instead of knowing who is right, we love to explore what is right. 
                </p>
              </div>
              
        </div>
      
        
    </>
  )
}

export default Ourvalues
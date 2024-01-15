import React from 'react'
import myVideo from '../../../public/Videos/IntroBGopscraft.mp4';
function Bgvideo() {
    // You don't have to pass full path for video src

  return (
   <>
   <div className="container relative  flex  items-center justify-center flex-col">
    {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
    {/* <Image
      src="/images/opscraftherosection.png"
      width={720}
      height={600}
      alt="Picture of the author"
    /> */}
    <div className='w-screen'>

    <video src="Videos/IntroBGopscraft.mp4" autoPlay loop muted playsInline  className=' '/>
    </div>
    <div className="text-center absolute lg:w-4/5 w-full">
      <h1 className="title-font sm:text-6xl text-xl mb-4 font-medium text-slate-200">OPScraft is the Last thing you ever need in <span className='text-[#00df9a]'>Artificial Intelligence</span></h1>
      {/* <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div> */}
    </div>
  </div>
  
             
            
   
   </>
  )
}

export default Bgvideo
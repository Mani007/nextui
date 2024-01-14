import React from 'react'
import Video from 'next-video';
import myVideo from '../../../public/Videos/IntroBGopscraft.mp4';
function Bgvideo() {
    // You don't have to pass full path for video src

  return (
   <>
   
   <video src="Videos/IntroBGopscraft.mp4" autoPlay loop muted playsInline className='w-screen h-screen z-10'/>
             
            
   
   </>
  )
}

export default Bgvideo
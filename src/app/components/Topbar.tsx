import React from 'react'
import Image from 'next/image'
function Topbar() {
  return (
    <>
    <div className="container relative mx-auto flex px-5 py-5 items-center justify-center flex-col">
    
    <Image
      src="/images/opscraftherosection.png"
      className='box-border w-full h-60'
      width={1440}
      height={200}
      alt="Picture of the author"
    />
    <div className="text-center absolute lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-6xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
      
    </div>
    </div>
    </>
  )
}

export default Topbar
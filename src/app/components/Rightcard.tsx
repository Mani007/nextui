import React from 'react'

function Rightcard() {
  return (
    <>
    <div className=" container relative mx-auto md:grid md:grid-cols-2 md:gap-8 px-5 py-5 sm:flex sm:flex-row ">
        <div className=' flex bg-green-200  text-center items-center justify-center flex-col '>
            <p className="text-6xl ">95%</p> 
            <p className="text-2xl ">of your cloud cost can be saved</p>
            <div className='flex flex-row gap-x-2 py-5 items-center justify-center'>
                <div className='basis-1/2'>
                    <p className="text-4xl ">$63bn</p> 
                    <p className="text-xl ">Oppurtunity for you</p>
                </div>
                <div className='basis-1/2'>
                    <p className="text-4xl ">$560mn</p> 
                    <p className="text-xl ">added in next quater</p>

                </div>
            </div>
            <div className='flex flex-row gap-x-2 py-5 items-center justify-center'>
                <div className='basis-1/2'>
                    <p className="text-4xl ">$63bn</p> 
                    <p className="text-xl ">Oppurtunity for you</p>
                </div>
                <div className='basis-1/2'>
                    <p className="text-4xl ">$560mn</p> 
                    <p className="text-xl ">added in next quater</p>
                </div>
            </div>
        </div>
 
        <div className='flex bg-yellow-100 text-center items-center justify-center flex-col'>
            <p className="text-6xl ">2-3%</p> 
            <p className="text-2xl ">of your employee need skill updation</p>
            <div className='flex flex-row gap-x-2 py-5  items-center justify-center'>
                <div className='basis-1/2'>
                    <p className="text-4xl ">$63bn</p> 
                    <p className="text-xl ">Oppurtunity for you</p>
                </div>
                <div className='basis-1/2'>
                    <p className="text-4xl ">$560mn</p> 
                    <p className="text-xl ">added in next quater</p>
                </div>
            </div>
            <div className='flex flex-row gap-x-2 py-5 items-center justify-center'>
                <div className='basis-1/2'>
                    <p className="text-4xl ">$63bn</p> 
                    <p className="text-xl ">Oppurtunity for you</p>
                </div>
                <div className='basis-1/2'>
                    <p className="text-4xl ">$560mn</p> 
                    <p className="text-xl ">added in next quater</p>
                </div>
            </div>
        </div>
</div>
    </>
  )
}

export default Rightcard

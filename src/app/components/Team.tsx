import React from 'react'
import Image from 'next/image'
import amit from '../../../public/Founders/G-32.jpg'
import mohnish from '../../../public/Founders/MohnishAwade-34.jpg'
function Team() {
  return (
    <>
    <div className="container my-24 mx-auto md:px-6">
 
  <section className="mb-32 text-center">
    <h2 className="mb-12 text-3xl font-bold">
      Meet the <u className="text-primary dark:text-primary-400">Leadership</u>
    </h2>

    <div className="grid gap-x-6 md:grid-cols-2 lg:gap-x-12">
      <div className="mb-6 lg:mb-0">
        <div
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <div className='relative h-[30rem] w-[37rem] md:h-[30rem] md:w-[37rem]'>

            <Image src={amit} 
           layout='fill' 
              className="w-full rounded-t-lg" 
              alt="Main partner of OPScraft"
              />
            </div>
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg className="absolute text-white dark:text-neutral-700 left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320">
              <path fill="currentColor"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg text-center font-bold">Amit Gandhi</h5>
            <p className="mb-4 text-center text-neutral-500 dark:text-neutral-300">Partner</p>
            <ul className="mx-auto flex list-inside justify-center">
              
              <a target="_blank" href="https://www.linkedin.com/in/amit-gandhi-7a400b11/" className="px-2">
               
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6 lg:mb-0">
        <div
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <div className='relative h-[30rem] w-[37rem] md:h-[30rem] md:w-[37rem]'>

            <Image src={mohnish} 
             width={720}
             height={600} 
             className="w-full rounded-t-lg" 
             alt="Main partner of OPScraft"
             />
            </div>
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg className="absolute text-white dark:text-neutral-700  left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320">
              <path fill="currentColor"
                d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
          <div className="">
            <h5 className="mb-4 text-lg text-center font-bold">Mohnish Awade</h5>
            <p className="mb-4 text-center text-neutral-500 dark:text-neutral-300">Partner</p>
            <ul className="mx-auto flex list-inside justify-center">
              
              <a target="_blank" href="https://www.linkedin.com/in/mohnishmonopoly/" className="px-2">
               
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>

     
    </div>
  </section>
  
</div>
    </>
  )
}

export default Team
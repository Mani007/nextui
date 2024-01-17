
'use client';

import { Carousel } from 'flowbite-react';
import Image from "next/image";
import dvc from '../../../public/images/Data vc.png'
import model from '../../../public/images/ML Codes.png'
import training from '../../../public/images/SVM.png'
import testing from '../../../public/images/model ops.png'
import prod from '../../../public/images/Training and Evaluation.png'
import responsible from '../../../public/images/Testing craft.png'
export default function Component() {
  return (
    <>

    
    <div className="container relative mx-auto flex flex-col justify-between items-stretch content-center mt-4 mb-4  gap-6 text-center md:flex-row   w-screen">
      <div className="container relative mt-20 h-screen w-screen bg-[#00df9a]  2xl:h-screen">
      <h2 className="text-4xl mt-4 text-center underline "> Technology Framework</h2> 
      <Carousel slideInterval={5000}>
      <section className="text-gray-600 body-font">
  <div className="container relative mx-auto flex px-5 py-5 items-center justify-center flex-col">
   
    <Image
              src={dvc}
              width={720}
              height={600}
              alt="No matter how much the AI technology evolve in upcoming days, our AI strategies will 10x your profits for next 25 years."
            /> <br/>
    <div className="text-center relative lg:w-2/3 w-full">
      <h1 className="title-font inset-x-0 bottom-0 sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Data Craft</h1>
      <p className="mb-8 inset-x-0 bottom-0 text-2xl leading-relaxed">Data privacy, Data encryption to data
versioning, data augmentation , so you
never have to worry about the data
changes is all about data craft.</p>
      
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container relative mx-auto flex px-5 py-5 items-center justify-center flex-col">
   
  <Image
              src={model}
              width={720}
              height={600}
              alt="No matter how much the AI technolgy evolve in upcoming days, our AI strategies will 10x your profits for next 25 years."
            /> <br/>
    <div className="text-center relative lg:w-2/3 w-full">
      <h1 className="title-font inset-x-0 bottom-0 sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Training Craft</h1>
      <p className="mb-8 inset-x-0 bottom-0 text-2xl leading-relaxed">Choice of any computing

infrastructure for training your model
with or without GPU is Training

craft.</p>
      
    </div>
  </div>
</section>
      
<section className="text-gray-600 body-font">
  <div className="container relative mx-auto flex px-5 py-5 items-center justify-center flex-col">
   
  <Image
              src={training}
              width={720}
              height={600}
              alt="Complete end-to-end AI/ML technology development that reduced your development costs and time upto 90 %. And with complete data protection."
            /> <br/>
    <div className="text-center relative lg:w-2/3 w-full">
      <h1 className="title-font inset-x-0 bottom-0 sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Model Craft</h1>
      <p className="mb-8 inset-x-0 bottom-0 text-2xl leading-relaxed">Training, testing, evaluating and
Managing multiple models at the same
time and choosing the best model for
production is model craft.</p>
     
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container relative mx-auto flex px-5 py-5 items-center justify-center flex-col">
   
  <Image
              src={testing}
              width={720}
              height={600}
              alt="Picture of the author"
            /> <br/>
    <div className="text-center relative lg:w-2/3 w-full">
      <h1 className="title-font inset-x-0 bottom-0 sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Production Craft</h1>
      <p className="mb-8 inset-x-0 bottom-0 text-2xl leading-relaxed">Taking the right type of pre-trained
models and enhancing its capability by training it with your own
data to make it production ready.</p>
      
    </div>
  </div>
</section>
             
<section className="text-gray-600 body-font">
  <div className="container relative mx-auto flex px-5 py-5 items-center justify-center flex-col">
   
  <Image
              src={prod}
              width={720}
              height={600}
              alt="Picture of the author"
            /> <br/>
    <div className="text-center relative lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl inset-x-0 bottom-0 text-3xl mb-4 font-medium text-gray-900">Monitoring Craft</h1>
      <p className="mb-8 inset-x-0 bottom-0 text-2xl leading-relaxed">Tracking models performance
and retraining the model if
required is the monitor craft.</p>
      
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container relative mx-auto flex px-5 py-5 items-center justify-center flex-col">
   
  <Image
              src={responsible}
              width={720}
              height={600}
              alt="Picture of the author"
            /> <br/>
    <div className="text-center relative lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl inset-x-0 bottom-0 text-3xl mb-4 font-medium text-gray-900">Testing Craft</h1>
      <p className="mb-8 inset-x-0 bottom-0 text-2xl leading-relaxed">Testing, evaluating and
Managing multiple guardrail on production models for
responsible AI is Testing craft.</p>
      
    </div>
  </div>
</section>
           
      </Carousel>
    </div>
    </div>
    </>
  );
}

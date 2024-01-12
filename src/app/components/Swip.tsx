import React from 'react'
import {items} from '../data/datacard'
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

function Swip() {
  return (
    <>
    <div className="container justify-center mx-auto flex px-5 py-7 md:flex-row flex-col items-center" >
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      effect="fade" >
        {items.map((item) => {
          return (
            <div className='mx-3'>
                <SwiperSlide>
                    <Card images = {item.images} title = {item.title} description = {item.description}  />
                </SwiperSlide>
                    
            </div>
          )
        })}
      
      
    </Swiper>
    </div>
    </>
  )
}

export default Swip
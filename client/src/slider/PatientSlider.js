import React from 'react';
import { Swiper, SwiperSlide, } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const PatientSlider = () => {
  return (
    <div className=" w-full">
         <Swiper spaceBetween={10} centeredSlides={true}
             autoplay={{ delay: 1000, disableOnInteraction: false, reverseDirection : false}}
             pagination={{ clickable: true, }}
             navigation={true}
             loop={true}
             modules={[Autoplay, Pagination, Navigation]}
             className="mySwiper rounded-3xl md:h-96 h-80"
         >
         <SwiperSlide>
         <img
            className="object-fit w-full h-96"
            src="../images/doctor-design7.jpg"
            alt="slide 1"
         />
         </SwiperSlide>
         <SwiperSlide>
         <img
            className="object-fit w-full h-96"
            src="../images/doctor-patient-design3.png"
            alt="slide 2"
         />
         </SwiperSlide>
         <SwiperSlide>
         <img
            className="object-fit w-full h-96"
            src="../images/doctor-patient-design4.png"
            alt="slide 3"
         />
         </SwiperSlide>
         <SwiperSlide>
         <img
            className="object-fit w-full h-96"
            src="../images/doctor-patient-design5.jpeg"
            alt="slide 3"
         />
         </SwiperSlide>
        </Swiper> 
       </div>
  )
}

export default PatientSlider

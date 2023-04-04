import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

const EventSlider = () => {
  return (
    <>
      <div className='flex justify-center md:mb-20 mb-10 mt-2'>
         <h1 className='text-teal-900 font-bold md:text-5xl text-4xl hover:text-light2 w-2/3 scale-125 text-center'>On Going Events B4H</h1>
      </div>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false, reverseDirection : false}}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        slidesPerView={2}
        centeredSlides
        loop={true}
        className="md:mb-20 mb-10 md:h-[500px] h-52"
      >
        <SwiperSlide
          style={{
            backgroundImage: "url(images/doctor-design2.png)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/medicalrecord-design8.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/doctor-patient-design3.png)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/doctor-patient-design4.png)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/doctor-patient-design5.jpeg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/doctor-design6.jpeg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/doctor-design7.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default EventSlider
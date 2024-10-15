import React from 'react'
import { Link } from 'react-router-dom'
import "swiper/css/autoplay";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  
  Autoplay,
  Navigation,
  EffectFade,
  Pagination
} from "swiper";
SwiperCore.use([Navigation, Autoplay, EffectFade,Pagination,]);
function ClientTestimonial() {
    const testimonialSlider = {
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        duration: 5000,
        speed: 1000,
        autoplay:{
          delay: 3500,
          isableOnInteraction: true,
        },
        spaceBetween: 30,
        slideToClickedSlide: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 2,
            },
            1800: {
                slidesPerView: 2,
            }
        }
    }
  return (
    <>
      
    </>
  )
}

export default ClientTestimonial
import React from 'react'
import "swiper/css/autoplay";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
} from "swiper";
SwiperCore.use([Navigation, Autoplay]);
function PartnarArea() {
    const partnarSlider={
        loop: true,
        slidesPerView: 5,
        spaceBetween: 20,
        speed: 1000,
        autoplay:{
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next-c',
            prevEl: '.swiper-button-prev-c',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    }
  return (
    <>
      <section className="our-partner-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="sec-title white layout2 text-center pt-5">
                <h2>Award Winning Global Transformation Partner</h2>
                {/* <div className="-partnerslider-navigator">
                  <div className="swiper-button-prev-c"><i className="bi bi-chevron-left" /></div>
                  <div className="swiper-button-next-c"><i className="bi bi-chevron-right" /></div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="partner-images-container">
                <div className="single-partner">
                  <img className='img-fluid white-image' src={process.env.PUBLIC_URL + "/img/partner/harvard.png"} alt="partnar-img" />
                </div>
                <div className="single-partner">
                  <img className='img-fluid white-image' src={process.env.PUBLIC_URL + "/img/partner/global.png"} alt="partnar-img" />
                </div>
                <div className="single-partner">
                  <img className='img-fluid white-image' src={process.env.PUBLIC_URL + "/img/partner/forbes.png"} alt="partnar-img" />
                </div>
                <div className="single-partner">
                  <img className='img-fluid white-image' src={process.env.PUBLIC_URL + "/img/partner/stevie.png"} alt="partnar-img" />
                </div>
              </div>
            </div>

         
          </div>
        </div>
      </section>
      <style jsx>{`
        .partner-images-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .single-partner {
          flex: 0 1 200px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: whitesmoke;
        }
        .single-partner img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }
      `}</style>
        
    </>
  )
}

export default PartnarArea
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
function Testimonial() {
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
      <section className="testimonial-area">
        <div className="container-fluid p-0">
          <div className="title-wrap">
            <div className="sec-title white">
              <span>Testimonials</span>
              <h2>Words from Our Satisfied Clients</h2>
              <p>Focus on ease was key. The dynamic and adaptable service met our needs perfectly. The team was incredibly supportive and responsive, making the entire process smooth and efficient.</p>
            </div>
          </div>
          <Swiper {...testimonialSlider} className="swiper testimonial-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="single-testimonial">
                  <div className="quote">
                    <i className="fas fa-quote-right" />
                  </div>
                  <h5>John D </h5>
                  <span>CEO of TechWave</span>
                  {/* <div className="stars">
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                  </div> */}
                  <p>"Working with Kenzo Infotech was a game-changer for our business. Their innovative solutions helped us streamline operations and save both time and money. The team was responsive, professional, and committed to delivering results."</p>
                  <div className="reviewer">
                    <img src={process.env.PUBLIC_URL + '/img/reivewer.jpg'} alt="testimonial-img" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-testimonial">
                  <div className="quote">
                    <i className="fas fa-quote-right" />
                  </div>
                  <h5>Sarah L</h5>
                  <span>Operations Manager at Greenleaf Inc.</span>
                  {/* <div className="stars">
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                  </div> */}
                  <p>"The quality of service we received from Kenzo Infotech exceeded our expectations. They truly understood our challenges and provided a solution that perfectly fit our needs. We saw an immediate improvement in our processes."
                  </p>
                  <div className="reviewer">
                    <img src={process.env.PUBLIC_URL + "/img/reivewer-1.jpg"} alt="testimonial-img" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-testimonial">
                  <div className="quote">
                    <i className="fas fa-quote-right" />
                  </div>
                  <h5>David M</h5>
                  <span>Founder of BrightTech</span>
                  <div className="stars">
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                  </div>
                  <p>We couldn’t be happier with the results we’ve achieved since partnering with Kenzo Infotech. Their expertise and attention to detail helped us overcome complex hurdles in our project. The entire experience was seamless, from start to finish."
                  </p>
                  <div className="reviewer">
                    <img src={process.env.PUBLIC_URL + '/img/reivewer.jpg'} alt="testimonial-img" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-testimonial">
                  <div className="quote">
                    <i className="fas fa-quote-right" />
                  </div>
                  <h5>Emily R</h5>
                  <span>Marketing Director at BlueSky</span>
                  <div className="stars">
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                  </div>
                  <p>From the initial consultation to project delivery, Kenzo Infotech was amazing to work with. Their customer support was top-notch, and they always went the extra mile to ensure we were satisfied with the outcome. Highly recommend!"
                  </p>
                  <div className="reviewer">
                    <img src={process.env.PUBLIC_URL + '/img/reivewer-1.jpg'} alt="testimonial-img" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-testimonial">
                  <div className="quote">
                    <i className="fas fa-quote-right" />
                  </div>
                  <h5>Michael T</h5>
                  <span>COO of Visionary Solutions</span>
                  <div className="stars">
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                  </div>
                  <p>"Thanks to Kenzo Infotech, we were able to take our business to the next level. Their expertise in the industry and personalized approach made all the difference. We experienced a 30% increase in efficiency after implementing their solutions."</p>
                  <div className="reviewer">
                    <img src={process.env.PUBLIC_URL + '/img/reivewer.jpg'} alt="testimonial-img" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-testimonial">
                  <div className="quote">
                    <i className="fas fa-quote-right" />
                  </div>
                  <h5>Laura H</h5>
                  <span>Product Manager at InnovateCorp</span>
                  <div className="stars">
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                  </div>
                  <p>"I was impressed with how Kenzo Infotech understood our goals and delivered a product that perfectly aligned with our vision. Their team’s dedication and attention to detail ensured the success of our project. We’ll definitely be working with them again."
                  </p>
                  <div className="reviewer">
                    <img src={process.env.PUBLIC_URL + '/img/reivewer.jpg'} alt="testimonial-img" />
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </section>  
    </>
  )
}

export default Testimonial
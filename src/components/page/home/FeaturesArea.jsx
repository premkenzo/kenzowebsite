import React from 'react'
import CountUp from "react-countup";
function FeaturesArea() {
  
  return (
    <>/
     <section className="features-area">
        <div className="container">
          <div className="title-wrap  wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="sec-title white">
              {/* <span>Case Studies</span> */}
              <h2>Why choose us?</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="single-feature">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={process.env.PUBLIC_URL + "/img/features/1.png"} alt="Feature-img" />
                  </div>
                  <CountUp end={120} delay={3} duration={5}  /> <sup>+</sup>
                  <h4>Project Completed</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="single-feature">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={process.env.PUBLIC_URL + "/img/features/2.png"} alt="Feature-img" />
                  </div>
                  <CountUp end={80} delay={3} duration={5} /> <sup>+</sup>
                  <h4>Satisfied Clients</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow animate fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="single-feature">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={process.env.PUBLIC_URL + "/img/features/3.png"} alt="Feature-img" />
                  </div>
                  <CountUp end={120} delay={3} duration={5} /> <sup>+</sup>
                  <h4>Experts</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow animate fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="single-feature">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={process.env.PUBLIC_URL + '/img/features/4.png'} alt="Feature-img" />
                  </div>
                  <CountUp end={7} delay={3} duration={5} /> <sup>+</sup>
                  <h4>Awards</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default FeaturesArea
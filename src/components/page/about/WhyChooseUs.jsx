import React from 'react'

function WhyChooseUs() {
  return (
    <>
      <section className="why-choose sec-mar wow animate fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="why-choose-left">
                <div className="choose-banner1">
                  <img src={process.env.PUBLIC_URL + "/img/why-1.jpg"} alt="why-choose images" />
                </div>
                <div className="choose-banner2">
                  <img src={process.env.PUBLIC_URL + "/img/why-2.jpg"} alt="why-choose images" />
                  <img src={process.env.PUBLIC_URL + "/img/why-3.jpg"} alt="why-choose images" />
                </div>
                <div className="years">
                  <h5>20+</h5>
                  <span>Years</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-choose-right">
                <div className="sec-title layout2">
                  <span>Why Choose Us</span>
                  <h2>Kenzo Infotech: Innovating Tomorrow, Empowering Today.</h2>
                </div>
                <div className="counter-boxes">
                  <div className="count-box">
                    <span className="counter">150</span><sup>+</sup>
                    <h5>Skilled Experts</h5>
                  </div>
                  <div className="count-box">
                    <span className="counter">250</span><sup>+</sup>
                    <h5>24/7 Proactive Support</h5>
                  </div>
                  <div className="count-box">
                    <span className="counter">50</span><sup>+</sup>
                    <h5>Tailored Services</h5>
                  </div>
                </div>
                <p>Our seasoned professionals have a history of successfully delivering high-quality business solutions and custom enterprise software tailored to your needs.We understand that every business is unique, which is why we provide personalized solutions designed specifically for your requirements.From managed IT services to bespoke software development, we offer a comprehensive range of solutions to drive your business forward.</p>
                <div className="buttons-group">
                  <span>24/7 Support</span>
                  <span>Unique Design</span>
                  <span>Clean Code Develope</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default WhyChooseUs
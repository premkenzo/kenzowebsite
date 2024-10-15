import React from 'react'

function ServiceDetailsItems() {
  return (
    <>
      <div className="service-items sec-mar-top">
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>01</span>IT Strategy Development</h4>
                <p>Our team of seasoned IT consultants works closely with your leadership to design a comprehensive IT strategy that supports your business objectives. We focus on long-term planning, ensuring your IT infrastructure is scalable, secure, and capable of adapting to future technological advancements. With our technology strategy consulting, we help businesses navigate the complexities of choosing the right technology stack to foster growth and innovation.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-details-thumb">
                <img src={process.env.PUBLIC_URL + '/img/blog/thumb-1.jpg'} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6 or-2">
              <div className="single-details-thumb">
                <img src={process.env.PUBLIC_URL + '/img/blog/thumb-2.jpg'} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>02</span>Technology Assessments
                </h4>
                <p>Staying ahead of the curve requires an in-depth understanding of your current IT environment. Our technology assessments evaluate your existing systems to identify areas for improvement, potential risks, and opportunities for optimization. We provide actionable insights that enable you to make informed decisions about your technology investments and upgrades.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>03</span>Infrastructure Optimization</h4>
                <p>An optimized IT infrastructure is the backbone of any successful business. Our IT infrastructure optimization services focus on enhancing your system’s performance, security, and scalability. From network architecture to cloud migration, we ensure your infrastructure is aligned with your business needs, improving efficiency and reducing downtime.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-details-thumb">
                <img src={process.env.PUBLIC_URL + '/img/blog/thumb-3.jpg'} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6 or-2">
              <div className="single-details-thumb">
                <img src={process.env.PUBLIC_URL + '/img/blog/thumb-2.jpg'} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>04</span>Digital Transformation Consulting
                </h4>
                <p>As businesses increasingly adopt digital solutions, we offer digital transformation consulting to guide you through every step of the process. From implementing cloud solutions to integrating automation and AI, our team helps you leverage cutting-edge technologies that transform your operations, improve customer experiences, and drive sustainable growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default ServiceDetailsItems
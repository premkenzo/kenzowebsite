import React from 'react'

function HistoryArea() {
  return (
    <>
     <section className="history-area sec-mar">
        <div className="container">
          <div className="title-wrap">
            <div className="sec-title">
              <span>History</span>
              <h2>Kenzo infotech’s journey</h2>
            </div>
          </div>
          <div className="single-history">
            <div className="history wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="circle">
                <div className="inner" />
              </div>
              <div className="history-thumb">
                <img src={process.env.PUBLIC_URL + '/img/timeline-1.jpg'} alt="history-img" />
              </div>
            </div>
            <div className="history wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="circle">
                <div className="inner" />
              </div>
              <div className="history-cnt">
                <div className="history-cnt-inner">
                  <span>2020</span>
                  <h4>We Are Open Our Office</h4>
                  <p>Kenzo Infotech was founded with the goal of delivering innovative technology solutions tailored to meet the unique needs of businesses across industries. Starting as a small tech startup, the company quickly made a name for itself by providing custom software development and IT solutions designed to help businesses achieve digital transformation.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="single-history">
            <div className="history wow animate fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="circle">
                <div className="inner" />
              </div>
              <div className="history-cnt">
                <div className="history-cnt-inner">
                  <span>2021</span>
                  <h4>We Work Hard for design</h4>
                  <p>In its early years, Kenzo Infotech focused on building robust enterprise software solutions for small- and medium-sized businesses. As demand grew, the company expanded its offerings to include managed IT services, cloud computing solutions, and comprehensive digital transformation consulting. This allowed Kenzo Infotech to become a trusted partner for companies seeking to optimize their operations through technology.</p>
                </div>
              </div>
            </div>
            <div className="history wow animate fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="circle">
                <div className="inner" />
              </div>
              <div className="history-thumb">
                <img src={process.env.PUBLIC_URL + '/img/timeline-2.jpg'} alt="history-img" />
              </div>
            </div>
          </div>
          <div className="single-history">
            <div className="history wow animate fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="circle">
                <div className="inner" />
              </div>
              <div className="history-thumb">
                <img src={process.env.PUBLIC_URL + '/img/timeline-3.jpg'} alt="history-img" />
              </div>
            </div>
            <div className="history wow animate fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="circle">
                <div className="inner" />
              </div>
              <div className="history-cnt">
                <div className="history-cnt-inner">
                  <span>2022</span>
                  <h4>We Are Success And Win</h4>
                  <p>Over time, Kenzo Infotech evolved into a leader in enterprise technology solutions, with a reputation for delivering high-quality services and cutting-edge innovations. The company's expertise in custom software development and proactive IT support has helped businesses streamline operations, reduce costs, and stay ahead in today’s competitive market.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="single-history">
            <div className="history wow animate fadeInLeft" data-wow-delay="500ms" data-wow-duration="1500ms">
              <div className="circle">
                <div className="inner" />
              </div>
              <div className="history-cnt">
                <div className="history-cnt-inner">
                  <span>2023</span>
                  <h4>Many Award Win</h4>
                  <p>Today, Kenzo Infotech continues to push the boundaries of technology, providing end-to-end solutions that empower businesses to thrive in a rapidly changing digital landscape. With a commitment to innovation, quality, and customer satisfaction, Kenzo Infotech remains at the forefront of the IT industry, helping businesses unlock new opportunities for growth and success.</p>
                </div>
              </div>
            </div>
            <div className="history wow animate fadeInRight" data-wow-delay="500ms" data-wow-duration="1500ms">
              <div className="circle">
                <div className="inner" />
              </div>
              <div className="history-thumb">
                <img src={process.env.PUBLIC_URL + '/img/timeline-4.jpg'} alt="history-img" />
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default HistoryArea
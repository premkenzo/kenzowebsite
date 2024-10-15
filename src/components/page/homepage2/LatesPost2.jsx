import React from 'react'
import { Link } from 'react-router-dom'

function LatesPost2() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  return (
    <>
      <section className="blog-area">
        <div className="container">
          <div className="title-wrap -6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="sec-title white">
              {/* <span>All Blogs</span> */}
              <h2>Our Blogs</h2>
              {/* <p>Stay up-to-date with our most recent articles. Discover fresh perspectives and timely information on the latest topics in our latest post.</p> */}
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="single-blog layout2">
                <div className="blog-thumb">
                  <Link to={`${process.env.PUBLIC_URL}/blogs/how-hI-is-revolutionizing-realthcare-enhancing-patient-care-and-operational-efficiency`} onClick={scrollTop}>
                  <img src={process.env.PUBLIC_URL + '/img/blog/banking-ai.png'} alt="latest-post-img" /></Link>
                  {/* <div className="tag">
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>AI</Link>
                  </div> */}
                </div>
                <div className="blog-inner">
                  <div className="author-date">
                    <Link to={"#"}>By, Industry Expert</Link>
                    <Link to={"#"}>5.05.2024</Link>
                  </div>
                  <h4><Link to={`${process.env.PUBLIC_URL}/blogs/how-ai-is-revolutionizing-realthcare-enhancing-patient-care-and-operational-efficiency`} onClick={scrollTop}>How AI is Revolutionizing Healthcare: Enhancing Patient Care and Operational Efficiency</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="single-blog layout2">
                <div className="blog-thumb">
                  <Link to={`${process.env.PUBLIC_URL}blogs/ai-in-banking-driving-customer-experience-and-fraud-prevention-with-advanced-algorithms`} onClick={scrollTop}><img src={process.env.PUBLIC_URL + '/img/blog/healthcare-ai.png'} alt="latest-post-img" /></Link>
                  {/* <div className="tag">
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>AI</Link>
                  </div> */}
                </div>
                <div className="blog-inner">
                  <div className="author-date">
                    <Link to={"#"}>By, Industry Expert</Link>
                    <Link to={"#"}>15.05.2024</Link>
                  </div>
                  <h4><Link to={`${process.env.PUBLIC_URL}/blogs/ai-in-banking-driving-customer-experience-and-fraud-prevention-with-advanced-algorithms`} onClick={scrollTop}>AI in Banking: Driving Customer Experience and Fraud Prevention with Advanced Algorithms</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow animated fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="single-blog layout2">
                <div className="blog-thumb">
                  <Link to={`${process.env.PUBLIC_URL}/blogs/the-future-of-insurance-with-ai-transforming-claims-processing-and-risk-assessment`} onClick={scrollTop}><img src={process.env.PUBLIC_URL + "/img/blog/insurance-ai.png"} alt="latest-post-img" /></Link>
                  {/* <div className="tag">
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>AI</Link>
                  </div> */}
                </div>
                <div className="blog-inner">
                  <div className="author-date">
                    <Link to={"#"}>By, Industry Expert</Link>
                    <Link to={"#"}>25.05.2024</Link>
                  </div>
                  <h4><Link to={`${process.env.PUBLIC_URL}/blogs/the-future-of-insurance-with-ai-transforming-claims-processing-and-risk-assessment`} onClick={scrollTop}>The Future of Insurance with AI: Transforming Claims Processing and Risk Assessment</Link></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default LatesPost2
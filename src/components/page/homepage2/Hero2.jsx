import React from 'react'
import { Link } from 'react-router-dom'


function Hero2() {
    const scrollTop =()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
     <section className="hero-area">
        <div id="particles-js" />
        <div style={{color:'#949494' }} className="verticale-social">
          <ul style={{color:'#949494 !important' }} className="vertical-media">
            <li><a href="https://www.facebook.com/profile.php?id=61554916179085&mibextid=kFxxJD">Facebook</a></li>
            <li><a href="https://www.instagram.com/kenzo_infotech?igsh=ZmNmOTRmZDcxZWc4&utm_source=qr">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/kenzo-infotech-usa/">Linkedin</a></li>
          </ul>
        </div>
        <div className="hero-wrapper">
          <video autoPlay loop muted className="background-video">
            <source src={'/img/kenzoinfotech-home-page-III.mov'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-9">
                <div className="hero-content layout2">
                  <h1>Crafting Innovative Software Solutions<br/></h1><h1 style={{ fontSize: '22px' , color:'#949494' }}>
                  </h1>
                  <span className='text-gray-custom fs-3'>Scalable Solutions for Tomorrow’s Challenges</span>
                  {/* <p>Kenzo Infotech, where innovation meets impact. At the core of everything we do is a commitment to creating 360° value for our clients, partners, and stakeholders. With cutting-edge technology solutions and a forward-thinking approach, we drive success in healthcare, digital transformation, and beyond.</p> */}
                  <div className="buttons">
                    <div className="cmn-btn">
                      <div className="line-1" />
                      <div className="line-2" />
                      <Link to={`${process.env.PUBLIC_URL}/about`} onClick={scrollTop}>About Us</Link>
                    </div>
                    <div className="cmn-btn layout-two">
                      <div className="line-1" />
                      <div className="line-2" />
                      <Link to={`${process.env.PUBLIC_URL}/projects`} onClick={scrollTop}>See Projects</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-img">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default Hero2
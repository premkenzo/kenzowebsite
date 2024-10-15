import React from "react";
import { Link } from "react-router-dom";
import ServiceDetailsItems from "./ServiceDetailsItems";

function ServiceDetailsWrap() {
  const scrollTop =()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <div className="service-details sec-mar-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-details-content">
                {/* <img src={process.env.PUBLIC_URL + '/img/blog/blog-thumnail.jpg'} alt="images service" /> */}
                <h3>
                  {/* <i>
                    <img
                      src={process.env.PUBLIC_URL + '/img/icons/service-details-icon.png'}
                      alt="service icon images"
                    />
                  </i> */}
                  Remote Monitoring & Maintenance: Proactively Managing Your IT Infrastructure
                </h3>
                <p>
                In today’s digital age, businesses depend on seamless IT infrastructure to maintain productivity, security, and growth. With technology playing a critical role in day-to-day operations, any downtime or technical issue can lead to significant disruptions and lost revenue. This is where Remote Monitoring & Maintenance (RMM) comes into play, offering businesses a proactive way to ensure their IT systems remain operational and secure at all times.
                </p>
                <p>
                Remote Monitoring & Maintenance (RMM) is a comprehensive solution that allows IT professionals to monitor and manage your IT infrastructure from a remote location. By using advanced tools and software, RMM continuously checks the performance of servers, networks, and devices, identifying and resolving potential issues before they escalate into critical problems. This not only reduces downtime but also enhances the overall health of your IT environment.
                </p>
                <h3>
                Key Features of Remote Monitoring & Maintenance
                </h3>
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className="sidebar-widget">
                <h4>Category</h4>
                <ul className="category">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      Web Design
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      Apps Development
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      Software Development
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      Motion Graphics
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      UI/UX Design
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      Graphic Design
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sidebar-banner">
                <img src={process.env.PUBLIC_URL + '/img/widget-banner-bg.jpg'} alt="Banner images" />
                <div className="banner-inner">
                  <h3>
                    Any Project <span>Call Now.</span>
                    <img
                      className="angle"
                      src={process.env.PUBLIC_URL + "/img/arrow-angle.png"}
                      alt=""
                    />
                  </h3>
                  <a href="tel:11231231234">+1-123-123-1234</a>
                </div>
              </div>
            </div> */}
          </div>
          <ServiceDetailsItems />
        </div>
      </div>
    </>
  );
}

export default ServiceDetailsWrap;

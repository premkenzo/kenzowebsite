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
                  Network Monitoring & Management: Ensuring Optimal Performance and Security
                </h3>
                <p>
                In today’s digital age, businesses rely heavily on their network infrastructure to ensure seamless operations, communication, and data flow. Effective network monitoring and management is essential to maintaining optimal network performance, security, and uptime. Without a robust system in place, businesses are at risk of experiencing costly downtime, security vulnerabilities, and performance bottlenecks that can hinder growth and productivity.
                </p>
                <p>
                This page covers the critical aspects of network monitoring and management, the key features to look for, and the specific benefits businesses can gain from implementing comprehensive network management solutions.
                </p>
                {/* <p>
                  vestibulum ultricies tellus. volv Pellentesque vel turpis
                  vitae urna tincidunt hendrerit at ut est. Sed eget feugiat
                  felis. Integer sed ornare sem, eget porttitor nisi. Nunc erat
                  sapien, porta laoreet gravida ac,{" "}
                </p> */}
                <h3>Key Features Businesses Should Look for in Network Monitoring Solutions</h3>
                <p>When selecting a network management solution, businesses should focus on tools and features that align with their specific needs. Here are some essential components to consider:</p>
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

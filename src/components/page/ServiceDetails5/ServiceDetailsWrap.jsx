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
                 Enterprise Software Development: Transforming Businesses with Tailored Solutions
                </h3>
                <p>
                In today’s fast-paced business environment, companies need robust, scalable, and flexible solutions to stay competitive and meet evolving customer demands. Enterprise software development provides businesses with customized software solutions that address specific operational needs, enabling them to scale, improve efficiency, and integrate seamlessly with other systems. Whether it’s optimizing internal processes or enhancing customer interactions, enterprise software solutions are vital for modern business growth.
                </p>
                <p>
                Enterprise software development refers to the creation of large-scale, customized software applications tailored to meet the unique needs of organizations. Unlike off-the-shelf software, enterprise software is designed to address specific business requirements, ensuring seamless integration with existing infrastructure and supporting key operations such as customer relationship management (CRM), supply chain management (SCM), enterprise resource planning (ERP), and more.
                </p>
               <h3>Key Benefits of Enterprise Software Development for Businesses</h3>
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

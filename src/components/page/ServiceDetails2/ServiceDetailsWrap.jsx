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
                  Cloud Services & Cloud Management
                </h3>
                <p>
                In today’s digital age, businesses of all sizes are leveraging cloud technology to enhance operations, improve scalability, and drive innovation. At the core of these technological advancements are cloud services and cloud management solutions that provide flexibility, security, and cost efficiency. Let’s dive into the key areas that businesses need to understand to fully harness the power of the cloud.
                </p>
                <p>
                  {/* ut, hendrerit vel tortor. In pharetra lectus luctus ornare
                  sollicitudin. Pellentesque at neque nec justo sokal porttitor
                  egestas nec eget ex.Etiam suscipit neque elit, hendrerit
                  laoreet quam ultrices id. Proin nec tolde lacinia ligula, sed
                  laoreet ex. Sed nisl ligula, euismod vel justo scelerisque, */}
                </p>
                <p>
                Cloud services can be divided into three primary models: Software as a Service (SaaS), Platform as a Service (PaaS), and Infrastructure as a Service (IaaS). Each model offers unique benefits and solutions, enabling businesses to focus on their core competencies while outsourcing IT infrastructure, platforms, and software applications to the cloud.
                </p>
                <h3>
                An Overview of Cloud Management Solutions
                </h3>
                <p>
                Managing cloud services efficiently is crucial for ensuring that businesses reap the full benefits of cloud technology. Cloud management involves overseeing and controlling cloud resources to ensure that performance, security, and costs are optimized.
                </p>
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

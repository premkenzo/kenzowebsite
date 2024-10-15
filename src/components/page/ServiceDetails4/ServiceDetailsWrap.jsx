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
                  Data Backup & Disaster Recovery: Safeguarding Your Business Against Data Loss
                </h3>
                <p>
                In today’s data-driven world, businesses of all sizes rely heavily on their digital assets to operate efficiently. Losing access to critical data due to hardware failures, cyberattacks, or natural disasters can lead to severe consequences, including prolonged downtime, financial loss, and reputational damage. This is where Data Backup & Disaster Recovery solutions play a pivotal role in ensuring business continuity and protecting your organization from potential threats.
                </p>
                {/* <p>
                  ut, hendrerit vel tortor. In pharetra lectus luctus ornare
                  sollicitudin. Pellentesque at neque nec justo sokal porttitor
                  egestas nec eget ex.Etiam suscipit neque elit, hendrerit
                  laoreet quam ultrices id. Proin nec tolde lacinia ligula, sed
                  laoreet ex. Sed nisl ligula, euismod vel justo scelerisque,
                </p> */}
                <p>
                Data backup is the process of copying and storing your business data in a secure location, ensuring that it can be restored in case of accidental loss, corruption, or system failure. Whether it’s customer information, financial records, or operational data, having a reliable data backup solution is essential for safeguarding your assets and maintaining productivity.
                </p>
                <h3>
                Best Practices for Effective Data Backup & Disaster Recovery
                </h3>
                <p>To ensure the effectiveness of your data backup and disaster recovery services, it's important to follow best practices that enhance your protection and recovery capabilities:
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

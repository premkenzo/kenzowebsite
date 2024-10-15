import React from 'react'

function ServiceDetailsItems() {
  return (
    <>
      <div className="service-items sec-mar-top">
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>01</span>Monitoring</h4>
                <p>Continuous monitoring of cloud environments is essential for maintaining optimal performance and detecting potential issues before they impact business operations. Cloud management tools provide real-time insights into usage, application performance, and resource allocation.</p>
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
                <h4><span>02</span>Optimization</h4>
                <p>Cloud optimization focuses on using resources efficiently to avoid over-provisioning and reduce costs. By analyzing usage patterns and scaling resources dynamically, businesses can optimize their cloud infrastructure, ensuring that they pay only for what they need.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>03</span>Automation</h4>
                <p>Automation in cloud management simplifies repetitive tasks like backups, updates, and resource scaling. Automation reduces the manual workload, increases efficiency, and minimizes the risk of human error, allowing businesses to focus on strategic initiatives.
                </p>
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
                <h4><span>04</span>Security</h4>
                <p>Cloud security is one of the most critical aspects of cloud management. Ensuring the safety of data, applications, and infrastructure in the cloud requires advanced security measures such as encryption, firewalls, identity and access management, and regular security audits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default ServiceDetailsItems
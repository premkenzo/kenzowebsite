import React from 'react'

function ServiceDetailsItems() {
  return (
    <>
      <div className="service-items sec-mar-top">
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>01</span>Scalability</h4>
                <p>As businesses grow, their needs evolve. Enterprise software is built with scalability in mind, allowing companies to expand functionality as required without disrupting current operations. This flexibility ensures that the software can adapt to increasing users, data, or services.</p>
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
                <h4><span>02</span>Customization</h4>
                <p>Custom software development allows businesses to create solutions that are specifically designed to fit their operational needs. Unlike generic software, enterprise software can be tailored to match the organization's workflows, integrate with existing systems, and provide features that address industry-specific challenges.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>03</span>Integration</h4>
                <p>Many organizations use multiple software applications across different departments. Enterprise software enables seamless integration of disparate systems, creating a unified platform that enhances data sharing and collaboration across departments. This improves overall efficiency and helps businesses make data-driven decisions.</p>
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
                <h4><span>04</span>Cost-Efficiency</h4>
                <p>While custom enterprise software may involve a larger upfront investment, it often saves businesses money in the long run by reducing the need for multiple software licenses, minimizing manual processes, and eliminating inefficiencies caused by generic solutions that don’t fit the business's needs.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>05</span>Enhanced Security</h4>
                <p>Enterprise applications are designed with security in mind, ensuring that sensitive business data is protected. With custom software, businesses have greater control over security measures such as data encryption, authentication, and compliance with industry regulations.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-details-thumb">
                <img src={process.env.PUBLIC_URL + '/img/blog/thumb-3.jpg'} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default ServiceDetailsItems
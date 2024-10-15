import React from 'react'

function ServiceDetailsItems() {
  return (
    <>
      <div className="service-items sec-mar-top">
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>01</span>Real-Time Performance Tracking</h4>
                <p>One of the standout features of RMM is the ability to monitor your IT infrastructure in real time. From server performance and network traffic to hardware functionality, IT teams gain complete visibility into the health of your systems, allowing them to address issues immediately and optimize system performance.
                </p>
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
                <h4><span>02</span>Remote Diagnostics</h4>
                <p>Remote diagnostics allow IT teams to troubleshoot and resolve technical issues without needing to be physically present. This remote IT support capability not only speeds up issue resolution but also reduces the need for on-site visits, saving time and lowering operational costs for businesses.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>03</span>Proactive Maintenance</h4>
                <p>The key to preventing downtime is proactive maintenance. RMM tools automatically monitor system metrics and usage patterns, identifying issues before they impact your business. By addressing potential problems early, businesses can avoid costly disruptions and keep their operations running smoothly.</p>
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
                <h4><span>04</span>Security Monitoring & Compliance</h4>
                <p>RMM solutions are designed to continuously monitor the security of your IT systems. This includes tracking firewalls, antivirus software, and network vulnerabilities to ensure your infrastructure is fully protected. Additionally, remote monitoring helps businesses comply with industry regulations by regularly auditing and updating security measures.</p>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default ServiceDetailsItems
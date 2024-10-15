import React from 'react'

function ServiceDetailsItems() {
  return (
    <>
      <div className="service-items sec-mar-top">
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>01</span>Help Desk Support</h4>
                <p>Help desk support provides businesses with immediate assistance through phone, email, or chat. It helps resolve minor technical issues such as password resets, software troubleshooting, or connectivity problems. Having a dedicated help desk ensures that employees can quickly get the support they need to continue working efficiently.</p>
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
                <h4><span>02</span>Remote IT Support</h4>
                <p>Remote IT support allows technicians to access and troubleshoot systems from a remote location. This is a cost-effective solution that provides fast response times for resolving software issues, system updates, and other IT concerns without the need for on-site visits. Many businesses rely on remote support for day-to-day technical needs.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>03</span>On-Site IT Support</h4>
                <p>For hardware issues or more complex technical problems, on-site IT support is necessary. Technicians physically visit your location to diagnose and repair systems, replace faulty hardware, or upgrade your IT infrastructure. On-site support is particularly valuable for maintaining servers, network hardware, and other physical equipment.</p>
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
                <h4><span>04</span>Managed IT Services</h4>
                <p>Managed IT services provide comprehensive IT support and maintenance on an ongoing basis. This includes network monitoring, security management, data backups, and regular software updates. Managed service providers (MSPs) offer outsourced IT services that handle all aspects of IT management, allowing businesses to focus on core operations while ensuring their technology is fully optimized.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>05</span>Cybersecurity Support</h4>
                <p>With growing cyber threats, businesses need specialized support to protect their systems and data. Cybersecurity support includes implementing firewalls, antivirus software, encryption, and security audits to prevent data breaches and malware attacks. It’s crucial for maintaining the privacy and integrity of your business information.</p>
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
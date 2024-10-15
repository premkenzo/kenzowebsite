import React from 'react'

function ServiceDetailsItems() {
  return (
    <>
      <div className="service-items sec-mar-top">
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>01</span>Real-time Monitoring</h4>
                <p>Real-time network monitoring is critical to detecting issues immediately as they occur. This feature allows businesses to stay ahead of potential problems by offering real-time data on device performance, network traffic, and bandwidth usage.</p>
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
                <h4><span>02</span>Automated Alerts</h4>
                <p>Network issues can arise at any time, and having automated alerts ensures that IT teams are notified as soon as something goes wrong. Alerts can be configured for specific thresholds, such as high CPU usage, low memory, or unusual traffic spikes, allowing for quick responses.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>03</span>Proactive Troubleshooting and Diagnostics</h4>
                <p>A good network monitoring tool provides proactive troubleshooting capabilities, allowing businesses to diagnose problems and resolve them before they affect performance. These tools often come with in-depth diagnostic features that enable IT teams to identify the root cause of issues swiftly.</p>
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
                <h4><span>04</span> Scalability</h4>
                <p>As businesses grow, so do their networks. Look for network monitoring solutions that are scalable, accommodating growing infrastructure without compromising on performance or visibility.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>05</span>Security Monitoring</h4>
                <p>Protecting your network from cyber threats is a top priority. A network monitoring system should include network security features that detect and respond to suspicious activity, unauthorized access attempts, or potential malware infections.</p>
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
                <h4><span>06</span>Centralized Dashboard</h4>
                <p>A centralized dashboard offers a unified view of the entire network, making it easier to manage multiple devices and locations. This feature is especially useful for IT teams managing complex or distributed infrastructures.</p>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default ServiceDetailsItems
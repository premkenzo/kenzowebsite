import React from 'react'

function ServiceDetailsItems() {
  return (
    <>
      <div className="service-items sec-mar-top">
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>01</span>Firewall Protection</h4>
                <p>A firewall is the first line of defense in network security. It helps to monitor and filter incoming and outgoing traffic, blocking unauthorized access while allowing legitimate communications. Our firewall solutions are customizable and scalable to meet the needs of businesses of all sizes, providing enhanced protection against cyber attacks.</p>
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
                <h4><span>02</span>Encryption</h4>
                <p>Data encryption ensures that sensitive information is unreadable to unauthorized users. Whether it's data in transit or data at rest, encryption provides an added layer of security that protects against data breaches. Our encryption services ensure that your critical information is safe from prying eyes, whether it’s being shared internally or externally.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>03</span>Multi-Factor Authentication (MFA)</h4>
                <p>Multi-factor authentication strengthens access controls by requiring users to provide multiple forms of identification, such as a password and a one-time code sent to their phone. This additional security layer reduces the likelihood of unauthorized access, even if a password is compromised.</p>
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
                <h4><span>04</span>Threat Detection and Incident Response</h4>
                <p>Cyber threats can strike at any time, making real-time threat detection and incident response crucial for minimizing damage. Our cybersecurity solutions include advanced monitoring tools that detect suspicious activities, enabling quick and effective responses to potential threats. In the event of a breach, our incident response team works rapidly to contain the threat and restore security.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>05</span>Security Awareness Training</h4>
                <p>One of the most common vulnerabilities in any business is human error. We provide comprehensive security awareness training programs to educate employees on best practices, such as recognizing phishing scams, avoiding malware, and securing sensitive data. Empowering your team with the right knowledge can significantly reduce your risk of falling victim to cyber attacks.</p>
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
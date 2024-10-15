import React from 'react'

function ServiceDetailsItems() {
  return (
    <>
      <div className="service-items sec-mar-top">
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>01</span>Regular Testing</h4>
                <p>Test your backup and recovery processes frequently to ensure they work as expected. This helps identify potential issues and allows for adjustments before a real disaster occurs.</p>
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
                <h4><span>02</span>Automation</h4>
                <p>Automate your backup processes to ensure consistency and reduce the risk of human error. Automated systems can back up data in real time, minimizing data loss.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>03</span>Data Encryption</h4>
                <p>Use encryption to protect your data both in transit and at rest. This ensures that even if backup data is intercepted, it cannot be accessed without proper decryption keys.</p>
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
                <h4><span>04</span>Redundant Storage</h4>
                <p>Implement redundancy by storing backups in multiple locations (on-premise and cloud) to protect against local disasters.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-details-item">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-details">
                <h4><span>05</span>Backup Frequency</h4>
                <p>Adjust your backup frequency based on your business needs. Critical data may need to be backed up daily or even hourly, while less essential information can be backed up weekly or monthly.</p>
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
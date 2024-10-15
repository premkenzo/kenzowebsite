import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceCardWrap() {
  return (
    <>
      <div className="services-grid sec-mar">
        <div className="container">
          <div className="title-wrap">
            <div className="sec-title">
              <span>Our Solutions</span>
              <h2>Services</h2>
              <p>
              At Kenzo Infotech, we offer from IT support and network monitoring to cloud management and enterprise software development, our services ensure your technology works for you.
              </p>
            </div>
          </div>
          <div className="row g-4">
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={1} image="/img/icons/service-icon-1.png" title=" IT Support for Businesses" details="Our managed IT support services deliver proactive monitoring, troubleshooting, and helpdesk support to ensure your business operates without interruption. We handle everything from hardware issues to software updates and technical glitches."  link={`${process.env.PUBLIC_URL}/services/it-support-for-businesses`}/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={2} image="/img/icons/service-icon-2.png" title="Network Monitoring & Management" details="Our network monitoring services provide real-time oversight of your IT infrastructure, identifying and addressing potential issues before they disrupt operations. We ensure your network runs smoothly and securely." link={`${process.env.PUBLIC_URL}/services/network-monitoring-management`}/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={3}  image="/img/icons/service-icon-3.png" title="Cloud Services & Cloud Management" details="We help businesses leverage scalable and secure cloud environments through comprehensive cloud services. Whether you're migrating to the cloud or optimizing an existing setup, our cloud management solutions." link={`${process.env.PUBLIC_URL}/services/cloud-services-and-cloud-management`}/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={4} image="/img/icons/service-icon-4.png" title="Cybersecurity Solutions" details="Protect your business with our multi-layered cybersecurity solutions. From firewall management and threat detection to compliance strategies, we safeguard your business against cyber threats and ensure the security of sensitive data." link={`${process.env.PUBLIC_URL}/services/cybersecurity-solutions`}/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={5} image="/img/icons/service-icon-5.png" title="Data Backup & Disaster Recovery" details="Our data backup and disaster recovery services ensure your data is secure, backed up, and recoverable in case of any disaster. We provide automated backups, secure storage, and fast recovery to minimize business disruption." link={`${process.env.PUBLIC_URL}/services/data-backup-disaster-recovery`}/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={6} image="/img/icons/service-icon-6.png" title="Enterprise Software Development" details="We specialize in developing custom enterprise software solutions tailored to your business needs. Our team of skilled developers works with you to create software that enhances productivity, streamlines workflows." link={`${process.env.PUBLIC_URL}/services/enterprise-software-development`}/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={6} image="/img/icons/service-icon-6.png" title="Remote Monitoring & Maintenance" details="Our remote monitoring services provide 24/7 oversight of your IT systems, ensuring immediate detection and resolution of issues. This proactive approach minimizes system." link={`${process.env.PUBLIC_URL}/services/remote-monitoring-,aintenance`}/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={6} image="/img/icons/service-icon-6.png" title=" IT Consulting & Strategy" details="We offer IT consulting services that align your technology with your business objectives. Our expert team helps you develop a long-term IT strategy that supports growth, innovation, and efficiency." link={`${process.env.PUBLIC_URL}/services/it-consulting-and-strategy`}/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCardWrap;

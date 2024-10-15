import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  const scrollTop=()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <footer className={props.footerAddclass} >
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link scrollTo={scrollTop} to={"/"}>
                      <img src={process.env.PUBLIC_URL +"/img/kenzo.png"} style={{ width: '204px', height: '200px', bottom: '77px',position: 'relative' }} alt="FooterImg" />
                    </Link>
                  </div>
                  <p style={{color:'#949494'}}>
                  Kenzo Infotech, where innovation meets impact. At the core of everything we do is a commitment to creating 360° value for our clients, partners, and stakeholders.
                  </p>
                  <ul className="social-media-icons">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61554916179085&mibextid=kFxxJD">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/kenzo_infotech?s=11">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/kenzo-infotech-usa//">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/kenzo_infotech?igsh=ZmNmOTRmZDcxZWc4&utm_source=qr">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    {/* <li>
                      <a href="https://youtube.com/@kenzoinfotech?si=OWBQvYJiEzMkmx7o">
                        <i className="fab fa-youtube" />
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4 style={{color:'#949494'}}>Our Services</h4>
                  <ul  className="footer-menu ">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/services/it-support-for-businesses`} onClick={scrollTop}>IT Support for Businesses</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/services/network-monitoring-management`} onClick={scrollTop}>Network Monitoring & Management</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/services/cloud-services-and-cloud-management`} onClick={scrollTop}>Cloud Services & Cloud Management</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/services/cybersecurity-solutions`} onClick={scrollTop}>Cybersecurity Solutions</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/services/data-backup-disaster-recovery`} onClick={scrollTop}>Data Backup & Disaster Recovery</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/services/enterprise-software-development`} onClick={scrollTop}>Enterprise Software Development</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/services/remote-monitoring-maintenance`} onClick={scrollTop}>Remote Monitoring Maintenance</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/services/it-consulting-and-strategy`} onClick={scrollTop}>IT Consulting and Strategy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div style={{color:'#949494'}} className="footer-widget">
                  <h4 style={{color:'#949494'}}>Quick Links</h4>
                  <ul className="footer-menu" style={{color:'#949494'}}>
                    <li >
                      <Link to={`${process.env.PUBLIC_URL}/about`} onClick={scrollTop}>About Us</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/services`} onClick={scrollTop}>Services</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/projects`} onClick={scrollTop}>Projects</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/blogs`} onClick={scrollTop}>Blogs</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/contact`} onClick={scrollTop}>Contact Us</Link>
                    </li>
                    {/* <li>
                      <Link to={`${process.env.PUBLIC_URL}/service`} onClick={scrollTop}>Pricing Plan</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4 style={{color:'#949494'}} >Get In Touch</h4>
                  <div className="number">
                    <div className="num-icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div  className="phone">
                      <a style={{color:'#949494'}} href="tel:05661111985">+1 551-309-3323</a>
                    </div>
                  </div>
                  <div className="office-mail">
                    <div className="mail-icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="email">
                    <a style={{color:'#949494'}} href="mailto:info@kenzoinfotech.com">info@kenzoinfotech.com</a>
                    </div>
                  </div>
                  {/* <div className="address">
                    <div className="address-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <p>168/170, Avenue 01, Mirpur DOHS, Bangladesh</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-12 col-md-4 col-lg-4 col-xl-5">
                <div className="copy-txt" style={{color:'#949494'}}>
                  <span style={{color:'#949494'}}>
                    Copyright 2024 <b>KenzoInfotech</b> | All Rights Reserved{" "}
                    
                  </span>
                </div>
              </div>
              {/* <div className="col-12 col-md-8 col-lg-8 col-xl-7">
                <ul className="footer-bottom-menu">
                  <li>
                    <Link to={"#"}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Terms of Use</Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
SwiperCore.use([Navigation, Autoplay]);

function ServiceArea(props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const serviceSlider = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  };

  const services = [
    {
      title: "IT Support for Businesses",
      description:
        "Our managed IT support services deliver proactive monitoring, troubleshooting, and helpdesk support to ensure your business operates without interruption.",
      link: "/services/it-support-for-businesses",
      icon: "/img/services/It-consulting.png",
    },
    {
      title: "Network Monitoring & Management",
      description:
        "Our network monitoring services provide real-time oversight of your IT infrastructure, identifying and addressing potential issues.",
      link: "/services/network-monitoring-management",
      icon: "/img/services/network-monitoring.png",
    },
    {
      title: "Cloud Services & Cloud Management",
      description:
        "We help businesses leverage scalable and secure cloud environments through comprehensive cloud services.",
      link: "/services/cloud-services-management",
      icon: "/img/services/cloud-services.png",
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Protect your business with our multi-layered cybersecurity solutions. From firewall management and threat detection to compliance strategies.",
      link: "/services/cybersecurity-solutions",
      icon: "/img/services/cybersecurity-solutions.png",
    },
    {
      title: "Data Backup & Disaster Recovery",
      description:
        "Our data backup and disaster recovery services ensure your data is secure, backed up, and recoverable in case of any disaster.",
      link: "/services/data-backup-disaster-recovery",
      icon: "/img/services/data-backup-recovery.png",
    },
    {
      title: "Enterprise Software Development",
      description:
        "We specialize in developing custom enterprise software solutions tailored to your business needs. ",
      link: "/services/enterprise-software-development",
      icon: "/img/services/enterprise-software-development.png",
    },
    {
      title: "Remote Monitoring & Maintenance",
      description:
        "Our remote monitoring services provide 24/7 oversight of your IT systems, ensuring immediate detection and resolution of issues.",
      link: "/services/remote-monitoring-maintenance",
      icon: "/img/services/remote-monitoring.png",
    },
    {
      title: "IT Consulting & Strategy",
      description:
        "We offer IT consulting services that align your technology with your business objectives. Our expert team helps you develop a long-term IT strategy.",
      link: "/services/it-consulting-and-strategy",
      icon: "/img/services/It-support.png",
    },
  ];

  return (
    <section className={`${"services-area sec-mar"} ${props.layoutClass}`}>
      <div className="container">
        <div
          className="title-wrap wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className={`${"sec-title"} ${props.white}`}>
            {/* <span>Our Solutions</span> */}
            <h2>Services</h2>
          </div>
        </div>
        <Swiper {...serviceSlider} className="swiper services-slider">
          {services.map((service, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide wow animate fadeInUp"
              data-wow-delay={`${200 * (index + 1)}ms`}
              data-wow-duration="1500ms"
            >
              <div className={`${"single-service"} ${props.layoutClass}`}>
                <span>{`0${index + 1}`}</span>
                <div className="icon">
                  <img
                    className="img-fluid white-image"
                    src={process.env.PUBLIC_URL + service.icon}
                    alt="service-icon"
                  />
                </div>
                <h4>{service.title}</h4>
                <div className="service-content-1">
                  <p>{service.description}</p>
                  <div className="read-btn">
                    <Link to={service.link} onClick={scrollTop}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </div>
    </section>
  );
}

export default ServiceArea;

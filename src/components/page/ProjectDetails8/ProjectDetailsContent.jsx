import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import "swiper/css/autoplay";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

function ProjectDetailsContent() {
  useEffect(() => {
    window.scrollTo(0, 0); // Sets the scroll position to the top without any animation
  }, []);

  const projectSlider = {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next-c",
      prevEl: ".swiper-button-prev-c",
    },
  };
  return (
    <>
     <div className="project-details-content">
        <div className="project-thumb">
          <img src={process.env.PUBLIC_URL + '/img/project/thumbnail-project.jpg'} alt="mages" />
          {/* <div className="tag">
            <Link to={`${process.env.PUBLIC_URL}/project-details`} onClick={window.scrollTo({top:0,behavior:"smooth"})}>Software</Link>
          </div> */}
        </div>
        <h3>Telemedicine Platform for Healthcare Providers
        </h3>
        <p>Created a secure telemedicine solution that connects patients with healthcare professionals for virtual consultations, appointment scheduling, and remote health monitoring, offering greater convenience and access to care.
</p>
        <div className="clinet-need">
          <h4>Overview of Features</h4>
          <p>The telemedicine platform is designed to provide a seamless, secure, and comprehensive virtual healthcare experience for both healthcare providers and patients. Key features include:</p>
          <h5>1.Virtual Consultations</h5>
          <p>Patients can schedule and attend video consultations with healthcare professionals in real-time, eliminating the need for in-person visits. This feature supports high-quality video and audio, allowing for thorough remote evaluations.
          </p>
          <h5>2.Appointment Scheduling
          </h5>
          <p>A built-in scheduling system enables patients to book appointments at their convenience. Providers can manage their availability, set consultation slots, and reduce no-show rates with automated reminders.
          </p>
          <h5>3.Remote Health Monitoring</h5>
          <p>The platform offers tools for remote monitoring of patients’ health conditions through connected devices, enabling healthcare providers to track vitals and health trends in real-time. This is especially beneficial for chronic disease management and post-operative care.</p>
          <h5>4.Patient Records & Notes</h5>
          <p>Healthcare professionals can access and update patient records during consultations, ensuring continuity of care and enabling easy follow-up appointments.</p>
          <h5>5.Multi-Device Access</h5>
          <p> The platform is accessible via mobile devices, tablets, and desktops, giving both patients and providers the flexibility to connect from any location.</p>
          <br/>        
          <br/>
          <p>By showcasing the telemedicine platform's robust features, privacy measures, and the benefits it offers to both patients and providers, this website content will effectively highlight its value as a convenient and essential healthcare tool.</p>
        </div>
        {/* <div className="working-process">
          <h4>Working Process</h4>
          <Swiper {...projectSlider} className="swiper work-process-slide">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="work-thumb">
                  <img src={process.env.PUBLIC_URL + "/img/project/work-thumb-slide.jpg"} alt="mages" />
                  <div className="label">
                    <span>01. Brainstorming</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="work-thumb">
                  <img src={process.env.PUBLIC_URL + '/img/project/work-thumb-slide-1.jpg'} alt="mages" />
                  <div className="label">
                    <span>02. Drawing</span>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            <div className="arrow">
              <div className="swiper-button-next-c"><i className="bi bi-arrow-right" /></div>
              <div className="swiper-button-prev-c"><i className="bi bi-arrow-left" /></div>
            </div>
          </Swiper>
          <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu nibh elementum, accumsan ona neque ac, aliquet nunc. In eu ipsum fringilla, accumsan purus vel, pellentesque risus. Vivamus vehicula nl purus at eros interdum, in dignissim nulla vestibulum. Nunc sit amet finibus felis, ut egestas lacus. Sedan pellentesque quis magna eu vestibulum. Ut sed commodo neque. Morbi erat nis</p>
        </div> */}
        {/* <div className="check-lunch">
          <h4>Check &amp; Launch</h4>
          <div className="row">
            <div className="col-lg-6">
              <ul className="check">
                <li><i><img src={process.env.PUBLIC_URL + '/img/icons/check.svg'} alt="mages" /></i>Aenean vitae pharetra leo. Aliquam pri.</li>
                <li><i><img src={process.env.PUBLIC_URL + '/img/icons/check.svg'} alt="mages" /></i>In aliquet, quam vitae blandit temporg.</li>
                <li><i><img src={process.env.PUBLIC_URL + '/img/icons/check.svg'} alt="mages" /></i>Aenean volutpat enim vitae tincidunta.</li>
                <li><i><img src={process.env.PUBLIC_URL + '/img/icons/check.svg'} alt="mages" /></i>Felis at venenatis porttitor, nunc arcua.</li>
                <li><i><img src={process.env.PUBLIC_URL + '/img/icons/check.svg'} alt="mages" /></i>Maximus felis quam vitae tortor phase.</li>
                <li><i><img src={process.env.PUBLIC_URL + '/img/icons/check.svg'} alt="mages" /></i>Nulla vulputate urna quis ex pellentes.</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <p>Interdum et malesuada fames ac ante ipsum tobal primis in faucibus. Etiam eu nibh elementum, tolda accumsan ona In eu ipsum fringilla, accumsan pur neque ac, aliquet nunc. In eu ipsum fringilla, wolan accumsan purus vel, pellentesque risus. Vivamusa
                purus at eros interdum, in dignissim nulla Ut sedal vestibulum. Nunc sit amet finibus felis, ut egestas lacus. Sedan commodo neque. Morbi erat niswole pellentesque quis magna eu vestibulum. </p>
            </div>
          </div>
        </div> */}
      </div>   
    </>
  )
}

export default ProjectDetailsContent
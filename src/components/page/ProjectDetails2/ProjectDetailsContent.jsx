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
    window.scrollTo(0, 0);
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
        <h3>Employee Management Software
        </h3>
        <p>Employee Management Software: Streamlining HR Processes for Enhanced Efficiency. Our Employee Management Software is designed to simplify and streamline HR operations, making it the perfect solution for businesses looking to improve their organizational efficiency. By automating key HR functions such as payroll, attendance tracking, performance reviews, and benefits management, our software empowers HR departments to focus on strategic initiatives rather than administrative tasks.
</p>
        <div className="clinet-need">
          <h4>Key Features of Our Employee Management System</h4>
          <h5>1.Payroll Management</h5>
          <p>Our payroll management tool automates payroll processing, ensuring that employee salaries, bonuses, and deductions are accurately calculated and disbursed on time. With built-in compliance features, the system also ensures that payroll adheres to local labor laws, reducing the risk of errors and penalties.</p>
          <h5>2.Attendance Tracking Software</h5>
          <p>Say goodbye to manual attendance tracking! Our attendance tracking software allows HR teams to monitor employee hours, leaves, and overtime with ease. The system integrates seamlessly with biometric devices or mobile apps, offering real-time data that can be accessed from anywhere. This ensures better attendance management, improves punctuality, and simplifies leave management.</p>
          <h5>3.Performance Reviews</h5>
          <p>Managing employee evaluations has never been easier. Our performance reviews module enables HR teams and managers to set performance goals, track progress, and conduct regular appraisals. By providing clear metrics and feedback, the system fosters a culture of continuous improvement and aligns employee performance with organizational goals.</p>
          <h5>4.Benefits Management Tool</h5>
          <p>Managing employee benefits can be complex, but our benefits management tool simplifies the process. From health insurance to retirement plans, the system offers a centralized platform where employees can view and manage their benefits. HR teams can easily administer benefits packages and ensure compliance with organizational policies and government regulations.</p>
          <br/>
          <h5>Why Choose Our HR Software?
          </h5>
          <li>Increased Efficiency: By automating repetitive HR tasks, our employee management system reduces administrative burdens and allows HR teams to focus on more strategic functions.</li>
          <li>Improved Accuracy: Automation minimizes the risk of human error in payroll and attendance tracking, ensuring accurate and compliant HR processes.</li>
          <li>Enhanced Employee Experience: With self-service options for employees, the software promotes transparency and empowers staff to manage their payroll, attendance, and benefits independently.</li>
          <li>Scalability: Whether you’re a small business or a large enterprise, our HR software is designed to scale with your organization’s growth.
          </li>
          <br/>
          <br/>
          <p>Our Employee Management Software is more than just a tool—it's a comprehensive solution that enhances organizational efficiency, improves employee engagement, and ensures smooth HR operations.</p>
          <p>If you’re looking for an HR software that simplifies payroll, attendance tracking, performance reviews, and benefits management, look no further. Let us help you transform your HR processes and elevate your business.</p>
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
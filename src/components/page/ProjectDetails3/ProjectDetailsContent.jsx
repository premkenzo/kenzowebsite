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
        <h3>Healthcare Billing and Claims Management System
        </h3>
        <p>Our Healthcare Billing and Claims Management System is a comprehensive solution designed to simplify the billing and claims process for medical providers and insurance companies. This state-of-the-art system reduces manual errors, accelerates reimbursement, and ensures smooth communication between healthcare providers and insurers, leading to enhanced efficiency and accuracy in healthcare billing.
</p>
        <div className="clinet-need">
          <h4>Key Features</h4>
          <h5>1.Automated Billing</h5>
          <p> Streamline the entire billing process with automated invoicing and payment collection, reducing the administrative burden on healthcare providers.</p>
          <h5>2.Real-Time Claim Tracking</h5>
          <p>Keep track of claim statuses in real-time, allowing healthcare providers and insurers to stay updated on the progress of claims, eliminating the need for follow-ups.
          </p>
          <h5>3.Error Detection</h5>
          <p>Advanced error detection capabilities identify and flag discrepancies in claims before submission, minimizing the chances of rejections and resubmissions.</p>
          <h5>4.Integration with Insurance Databases</h5>
          <p> Seamlessly connect with insurance providers' databases, ensuring that claims are automatically verified, validated, and processed without delays.</p>
          <br/>
          <h5>Benefits:
          </h5>
          <li>Improved Efficiency: By automating routine tasks and reducing manual data entry, this healthcare billing solution significantly enhances operational efficiency for healthcare facilities.
          </li>
          <li>Improved Accuracy: Automation minimizes the risk of human error in payroll and attendance tracking, ensuring accurate and compliant HR processes.</li>
          <li>Streamlined Communication: Our claims management system facilitates smoother interactions between medical providers and insurance companies, reducing the need for back-and-forth communication and improving transparency.</li>
          <li>
          </li>
          <br/>
          <br/>
          <h5>Positive Impact:</h5>
          <p>The Healthcare Billing and Claims Management System positively impacts both healthcare providers and insurance companies by reducing administrative burdens, ensuring faster claim approval, and enhancing overall communication. For healthcare providers, this medical billing software leads to quicker, more accurate reimbursements, allowing them to focus on patient care. For insurers, it simplifies the claims verification process, improves operational efficiency, and fosters better relationships with providers.</p>
          <p>With our system, your organization can experience faster claim reimbursement, reduced claim rejections, and a streamlined billing process that improves both financial performance and patient satisfaction.</p>
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
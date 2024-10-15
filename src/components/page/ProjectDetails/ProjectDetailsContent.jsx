import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "swiper/css/autoplay";
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
    // Scroll to the top when the component mounts
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
          <img src={process.env.PUBLIC_URL + '/img/project/thumbnail-project.jpg'} alt="images" />
        </div>
        <h3>Custom EHR (Electronic Health Records) System</h3>
        <p>
          Our Custom EHR Solution is a fully customizable Electronic Health Records system,
          designed specifically for healthcare providers to streamline patient data management,
          enhance communication, and improve decision-making. This cutting-edge EHR solution enables
          healthcare professionals to access and manage patient information seamlessly, resulting
          in more efficient workflows and improved patient care outcomes.
        </p>
        <div className="clinet-need">
          <h4>Key Features</h4>
          <h5>1. Seamless Patient Data Management:</h5>
          <p>
            Our customizable EHR system allows healthcare providers to manage all patient data in
            one centralized platform, including medical history, prescriptions, lab results, and
            treatment plans. This leads to better data accessibility and eliminates the inefficiencies
            of paper-based records.
          </p>
          <h5>2. Improved Communication</h5>
          <p>
            The system enhances communication between providers, patients, and other stakeholders by
            integrating messaging and alerts. Real-time updates and secure messaging ensure that
            healthcare providers can collaborate more effectively, leading to faster and more
            informed clinical decisions.
          </p>
          <h5>3. Enhanced Decision-Making</h5>
          <p>
            Our custom EHR solution is designed to support healthcare professionals in making critical
            decisions with access to up-to-date patient information. Integrated decision-support tools,
            such as clinical reminders and alerts, guide providers in delivering timely and accurate care.
          </p>
          <h5>4. Data Integration and Interoperability</h5>
          <p>
            The solution is built to integrate with other healthcare systems, ensuring interoperability
            and data exchange across various platforms. This feature allows healthcare providers to access
            external records and test results effortlessly, enhancing patient care coordination.
          </p>
          <h5>5. Robust Security</h5>
          <p>
            Security is a top priority. Our customizable EHR system offers robust data protection, encryption,
            and compliance with HIPAA regulations to ensure that sensitive patient information is safeguarded at all times.
          </p>
          <h5>6. User-Friendly Interface</h5>
          <p>
            The system’s intuitive, user-friendly interface is designed to minimize the learning curve
            for healthcare providers and staff, allowing for efficient navigation and a better overall
            user experience. Custom dashboards can be tailored to meet the specific needs of different
            healthcare environments.
          </p>
          <h5>7. Adaptability to Healthcare Environments:</h5>
          <p>
            Whether you're a small clinic or a large hospital network, our customizable EHR system is adaptable
            to fit your organization's unique workflows and requirements. You can customize features, modules,
            and interfaces to suit your specific practice, ensuring an optimal experience for all users.
          </p>
          <br/>
          <p>
            By choosing our custom EHR solution, healthcare providers can enhance the quality of care,
            improve operational efficiency, and ensure better patient outcomes. Whether it's for outpatient
            clinics, specialty care centers, or large hospitals, our EHR system is designed to evolve with your practice.
          </p>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailsContent;

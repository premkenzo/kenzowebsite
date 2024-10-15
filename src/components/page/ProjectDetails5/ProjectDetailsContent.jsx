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
        <h3>Custom CRM for Sales Teams
        </h3>
        <p>At Kenzo Infotech, we developed a tailored Customer Relationship Management (CRM) system designed specifically for sales teams to streamline their workflow, improve efficiency, and enhance sales performance. Our custom CRM development focuses on delivering a seamless platform that helps sales professionals track leads, manage customer interactions, and optimize their sales pipelines—leading to significantly improved conversion rates and overall business success.
</p>
        <div className="clinet-need">
          <h4>Key Features of Our Custom CRM for Sales Teams:</h4>
          <h5>1.Lead Tracking Software</h5>
          <p>Our CRM system offers robust lead tracking software that allows sales teams to efficiently capture and manage leads throughout the sales funnel. With intuitive lead categorization, real-time updates, and custom workflows, your team will have complete visibility into where each lead stands, helping prioritize high-value prospects and improve follow-up rates.
          </p>
          <h5>2.Customer Interaction Management
          </h5>
          <p>Keeping track of customer communication is vital for maintaining relationships and closing deals. Our CRM solution enables sales teams to manage all customer interactions in one place, including emails, calls, meetings, and notes. This ensures that no touchpoint is missed and helps teams build stronger, more personalized relationships with their clients.
          </p>
          <h5>3.Optimize Sales Pipeline</h5>
          <p>Sales teams can now easily visualize and optimize their sales pipeline. The system provides comprehensive insights into each stage of the sales process, helping teams identify bottlenecks, forecast sales, and make data-driven decisions. This sales pipeline optimization ensures that opportunities are moved through the pipeline more efficiently, leading to faster deal closures.</p>
          <h5>4.Advanced Reporting and Analytics</h5>
          <p>With built-in analytics, the CRM provides advanced reporting tools that allow sales managers to monitor performance metrics such as lead conversion rates, customer engagement, and pipeline progression. These insights empower businesses to make strategic adjustments, resulting in improved conversion rates and a higher return on investment.</p>
          <br/>
          <h5>How Our Custom CRM Improves Sales Performance
          </h5>
          <p>By developing a CRM for sales teams that focuses on optimizing the entire sales process—from lead generation to closing deals—our tailored CRM system has transformed the way businesses operate. The platform’s combination of lead tracking software, customer interaction management, and pipeline optimization ensures that teams can work more effectively, collaborate better, and close more deals in less time.
          </p>
          <p>Sales teams utilizing our custom CRM development have reported:
          </p>
          <li>A 30% improvement in conversion rates
          </li>
          <li>A 25% reduction in sales cycle time</li>
          <li>Enhanced team productivity and collaboration</li>
          <li>Better customer satisfaction and retention rates</li>
        
          <br/>
          <br/>
         
         
          <p>Our custom CRM for sales teams is a powerful tool designed to give businesses a competitive edge, delivering the features and functionality necessary to thrive in today’s fast-paced sales environment.</p>
          
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
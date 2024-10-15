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
        <h3>Cloud-Based Inventory Management System for Retailers
        </h3>
        <p>Our team developed a Cloud-Based Inventory Management System designed specifically for retailers to streamline and optimize their inventory management processes. This innovative system offers real-time stock monitoring, automated reordering, and enhanced supply chain management, providing retailers with a powerful tool to maintain efficient operations and meet customer demands.
</p>
        <div className="clinet-need">
          <h4>Key Features</h4>
          <h5>1.Real-Time Stock Monitoring</h5>
          <p>The system provides retailers with real-time insights into their inventory levels across multiple locations. With instant updates, businesses can easily track stock quantities, product movement, and sales performance. This feature ensures that stock levels are always accurate, preventing overstocking or stockouts and reducing the risk of lost sales.</p>
          <h5>2.Automated Reordering</h5>
          <p>The automated inventory system takes the guesswork out of reordering. When stock reaches a predefined threshold, the system automatically generates and sends purchase orders to suppliers, ensuring that retailers are always well-stocked without manual intervention. This not only saves time but also reduces the risk of human error in inventory management.
          </p>
          <h5>3.Improved Supply Chain Management:</h5>
          <p>With advanced analytics and data-driven insights, our system enhances supply chain efficiency. Retailers can monitor supplier performance, track order fulfillment, and analyze delivery timelines. By improving visibility across the supply chain, the system helps retailers make informed decisions that lead to better supplier relationships and faster restocking.</p>
          <br/>
          <h5>Business Benefits
          </h5>
          <li>Increased Efficiency:By automating time-consuming tasks like stock monitoring and reordering, the cloud-based inventory management system increases operational efficiency, allowing retailers to focus on other critical areas of their business.
          </li>
          <li>Reduced Manual Errors:The system eliminates the need for manual data entry, significantly reducing errors associated with traditional inventory management. This leads to more accurate stock levels and improved decision-making.</li>
          <li>Data-Driven Insights:Through comprehensive reporting and analytics, retailers gain valuable insights into their inventory turnover, product demand, and sales patterns. These insights enable businesses to optimize their product offerings, forecast demand, and improve overall performance.</li>
        
          <br/>
          <br/>
          <h5>Impact on Business Performance and Scalability</h5>
          <p>The cloud-based inventory management solution is designed for scalability, allowing retailers of all sizes to benefit from its features. Whether operating a single store or managing a chain of retail locations, the system can easily adapt to business growth, ensuring seamless inventory management as operations expand.</p>
          <p>By improving stock accuracy, automating reordering, and enhancing supply chain visibility, this system leads to better customer satisfaction, increased profitability, and reduced operational costs. It empowers retailers to operate more efficiently, make smarter decisions, and scale their business without the limitations of outdated, manual inventory processes.</p>
          <p>In conclusion, our Cloud-Based Inventory Management System provides retailers with a comprehensive solution that transforms the way they manage inventory, delivering real-time data, automation, and insights that drive success.</p>
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
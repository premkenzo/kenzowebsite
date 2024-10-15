import React, { useState } from 'react';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

// Inline styles for the custom button
const buttonStyle = {
  backgroundColor: '#4ea3b0', // Blue color
  color: '#000', // Black text
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  borderRadius: '5px', // Rounded corners
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#3a8288', // Darker shade on hover
};

function AboutArea(props) {
  const [isOpen, setOpen] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [hover, setHover] = useState(false); // To manage hover effect

  // Function to toggle the full text display
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  // Full text content
  const fullText = `At Kenzo Infotech, we are dedicated to driving innovation and delivering cutting-edge technology solutions that empower businesses to thrive in today’s fast-paced digital world. With a strong focus on custom enterprise software development, managed IT services, and cloud-based solutions, we tailor our expertise to meet the unique needs of each client.
  Founded by a team of industry experts with a passion for solving complex challenges, Kenzo Infotech is built on the principles of innovation, agility, and collaboration.
  Backed by a proven track record in leading successful projects at both corporate giants and startups, our team combines technical excellence with a deep understanding of industry-specific requirements. We pride ourselves on our commitment to customer satisfaction, delivering proactive support, and creating bespoke solutions that accelerate growth.`;

  // Short text content
  const shortText = `At Kenzo Infotech, we are dedicated to driving innovation and delivering cutting-edge technology solutions that empower businesses to thrive in today’s fast-paced digital world.`;

  return (
    <>
      <section className="about-area sec-mar-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 or-2 wow animate fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className={`${"sec-title layout2"} ${props.white}`}>
                {/* <span>Get To Know</span> */}
                <h2>Get to Know</h2>
              </div>
              <div className={`${"about-left"} ${props.layoutClass}`}>
                <h3>Kenzo Infotech: Driving 360° Innovation in Digital Solutions</h3>
                <p>
                  {showFullText ? fullText : `${shortText}...`}
                </p>
                {/* Custom Styled Show More/Less Button */}
                <button
                  onClick={toggleText}
                  className="custom-button"
                  style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
                  onMouseEnter={() => setHover(true)} // Apply hover effect
                  onMouseLeave={() => setHover(false)} // Remove hover effect
                >
                  {showFullText ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
            <div className="col-lg-6 or-1 wow animate fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="about-right">
                <div className="banner-1">
                  <img src={process.env.PUBLIC_URL + '/img/about-baner-1.jpg'} alt="about-images" />
                </div>
                <div className="banner-2">
                  <img src={process.env.PUBLIC_URL + '/img/about-baner-2.jpg'} alt="about-images" />
                  <div className="banner2-inner">
                    <div className="play">
                      <div className="video-popup" onClick={() => setOpen(true)}><i className="fas fa-play" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modal Video for Play Button */}
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="WOl86x8Ulg8"
          autoplay={1}
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  );
}

export default AboutArea;

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function ContactWrapper() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_l7q6dca',    // Replace with your EmailJS service ID
      'template_hi1josn',   // Replace with your EmailJS template ID
      form.current,
      '3dn52AYqjp6RrvFhC'        // Replace with your EmailJS user/public key
    )
    .then((result) => {
        console.log('Email sent:', result.text);
        alert('Message sent successfully!');
    }, (error) => {
        console.log('Error:', error.text);
        alert('Failed to send message. Try again.');
    });
  };

  return (
    <>
      <section className="contact-area sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5">
              <div className="contact-left">
                {/* Optional: Add any additional contact information or social links here */}
                {/* <div className="sec-title layout2">
                  <span>Get in touch</span>
                  <h2>Contact us if you have more questions.</h2>
                </div> */}
                {/* <ul className="social-follow">
                  <li><a rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61554916179085&mibextid=kFxxJD"><i className="fab fa-facebook-f" /></a></li>
                  <li><a rel="noopener noreferrer" href="https://x.com/kenzo_infotech?s=11"><i className="fab fa-twitter" /></a></li>
                  <li><a rel="noopener noreferrer" href="https://www.instagram.com/kenzo_infotech?igsh=ZmNmOTRmZDcxZWc4&utm_source=qr"><i className="fab fa-instagram" /></a></li>
                </ul> */}
                {/* <div className="informations">
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="info">
                      <h3>Phone</h3>
                      <a href="tel:05661111985">+1 551-309-3323</a>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="info">
                      <h3>Email</h3>
                      <a href="mailto:info@kenzoinfotech.com">info@kenzoinfotech.com</a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* Optional: Add a map or other visuals here */}
            {/* <div className="col-md-6 col-lg-7">
              <div className="mapouter">
                <div className="gmap_canvas">
                <img src={process.env.PUBLIC_URL + '/img/online.svg'} alt="" />
                </div>
              </div>
            </div> */}
          </div>
          <div className="getin-touch">
            <div className="row">
              <div className="col-md-6 col-lg-7">
                <div className="contact-form wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <h3>Have Any Questions or Request a Quote</h3>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-12">
                        <input type="text" name="name" placeholder="Enter your name" required />
                      </div>
                      <div className="col-md-6">
                        <input type="email" name="email" placeholder="Enter your email" required />
                      </div>
                      <div className="col-md-6">
                        <input type="text" name="subject" placeholder="Subject" required />
                      </div>
                      <div className="col-md-6">
                        <input type="text" name="company" placeholder="Company Name" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" name="service" placeholder="Service Required" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" name="contact_time" placeholder="Preferred Contact Time" />
                      </div>
                      <div className="col-12">
                        <textarea name="message" cols={30} rows={10} placeholder="Your message" required></textarea>
                        <input type="submit" value="Send Message" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="call-banner">
                  <img src={process.env.PUBLIC_URL + "/img/call-center.png"} alt="images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  );
}

export default ContactWrapper;

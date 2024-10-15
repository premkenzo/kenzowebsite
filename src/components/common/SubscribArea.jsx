import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function SubscribArea() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_l7q6dca',    // Replace with your EmailJS service ID
      'template_l1bm8hq',   // Replace with your EmailJS template ID
      form.current,
      '3dn52AYqjp6RrvFhC'   // Replace with your EmailJS user/public key
    )
    .then((result) => {
        console.log('Email sent:', result.text);
        alert('Subscription successful!');
    }, (error) => {
        console.log('Error:', error.text);
        alert('Failed to subscribe. Try again.');
    });
  };

  return (
    <>
      <section className="subscribe-newsletter sec-mar-top">
        <div className="container">
          <div className="news-letter-content">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="subscribe-cnt">
                  <span>Stay In Touch</span>
                  <h4 className='text-gray-custom'>Subscribe Our Newsletter</h4>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="subscribe-form">
                  <form ref={form} onSubmit={sendEmail} action="#" method="post">
                    <input type="email" name="email" placeholder="Type Your Email" />
                    <input type="submit" defaultValue="connect" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SubscribArea;

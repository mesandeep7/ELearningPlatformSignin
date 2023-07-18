import React, { useEffect } from 'react';
// import './owl.carousel.min.js'; // Replace 'path/to/owl.carousel.min.js' with the actual path
import $ from 'jquery';
import './owl.carousel.css';

import './Testimonial.css';
import slide1 from './slide-1.jpg';
import slide2 from './slide-2.jpg';
import slide3 from './slide-3.jpg';
import slide4 from './slide-4.jpg';
import slide5 from './slide-5.jpg';

function Testimonials() {
  useEffect(() => {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      center: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 3
        }
      }
    });
  }, []);

  return (
    <section id="slider" className="pt-5">
      <div className="container testimonial">
        <h6 className="text-center "><b>TESTIMONIAL</b></h6>
        <h1 className="text-center"><b></b></h1>
        <h3 className="text-center"><b>Our Students Say!</b></h3>
        <div className="slider">
          <div className="owl-carousel">
            <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src={slide1} alt="" />
              </div>
              <h5 className="mb-0 text-center"><b>Client Name</b></h5>
              <p className="mb-0 text-center"><b>Profession</b></p>
              <div className="applyColor">
                <p className="text-center p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                  temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.</p>
              </div>
            </div>
            <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src={slide2} alt="" />
              </div>
              <h5 className="mb-0 text-center"><b>Client Name</b></h5>
              <p className="mb-0 text-center"><b>Profession</b></p>
              <div className="applyColor">
                <p className="text-center p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                  temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.</p>
              </div>
            </div>
            <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src={slide3} alt="" />
              </div>
              <h5 className="mb-0 text-center"><b>Client Name</b></h5>
              <p className="mb-0 text-center"><b>Profession</b></p>
              <div className="applyColor">
                <p className="text-center p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                  temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.</p>
              </div>
            </div>
            <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src={slide4} alt="" />
              </div>
              <h5 className="mb-0 text-center"><b>Client Name</b></h5>
              <p className="mb-0 text-center"><b>Profession</b></p>
              <div className="applyColor">
                <p className="text-center p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                  temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.</p>
              </div>
            </div>
            <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src={slide5} alt="" />
              </div>
              <h5 className="mb-0 text-center"><b>Client Name</b></h5>
              <p className="mb-0 text-center"><b>Profession</b></p>
              <div className="applyColor">
                <p className="text-center p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                  temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

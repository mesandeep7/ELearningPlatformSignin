import React, { useRef, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import './owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import './styles.css'
import slide1 from './slide-1.jpg';
import slide2 from './slide-2.jpg';
import slide3 from './slide-3.jpg';
import slide4 from './slide-4.jpg';
import slide5 from './slide-5.jpg';

const TestimonialSlider = () => {
  const owlRef = useRef(null);

  useEffect(() => {
    const owlOptions = {
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
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
    };

    if (owlRef.current) {
      $(owlRef.current).owlCarousel(owlOptions);
    }

    // Cleanup on unmount
    return () => {
      if (owlRef.current) {
        $(owlRef.current).owlCarousel('destroy');
      }
    };
  }, []);

  return (
    <section id="slider" className="pt-5">
      <div className="container testimonial">
        <h6 className="text-center">
          <b>TESTIMONIAL</b>
        </h6>
        <h1 className="text-center">
          <b></b>
        </h1>
        <h3 className="text-center">
          <b>Our Students Say!</b>
        </h3>
        <div className="slider">
          <OwlCarousel className="owl-carousel" ref={owlRef}>
            <div className="slider-card">
              {/* Testimonial 1 content */}
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
              {/* Testimonial 2 content */}
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
            {/* Add more testimonials as needed */}
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
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

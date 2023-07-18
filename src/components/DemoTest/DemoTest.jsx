import OwlCarousel from 'react-owl-carousel';
import './DemoTest.css';
import img1 from './slide-1.jpg';
import img2 from './slide-2.jpg';
// import img3 from './slide-3.jpg';
// import img4 from './slide-4.jpg';
// import img5 from './slide-5.jpg';


export default function Test() {
    const options = {
      items: 1,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    };
  
    const testimonialData = [
      {
        name: 'Client Name 1',
        profession: 'Profession 1',
        image: img1,
        // image: 'slide-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.'
      },
      {
        name: 'Client Name 1',
        profession: 'Profession 1',
        image: img2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.'
      }
      // Add more testimonial data objects as needed
      
    ];
  
    return (
      <section id="slider" className="pt-5">
        <div className="container testimonial">
          <h6 className="text-center"><b>TESTIMONIAL</b></h6>
          <h1 className="text-center"><b>&#x2014;</b></h1>
          <h3 className="text-center"><b>Our Students Say!</b></h3>
          <div className="slider">
            <OwlCarousel options={options}>
              {testimonialData.map((testimonial, index) => (
                <div className="slider-card" key={index}>
                  <div className="d-flex justify-content-center align-items-center mb-4">
                    <img src={testimonial.image} alt="" />
                  </div>
                  <h5 className="mb-0 text-center"><b>{testimonial.name}</b></h5>
                  <p className="mb-0 text-center"><b>{testimonial.profession}</b></p>
                  <div className="applyColor">
                    <p className="text-center p-4">{testimonial.description}</p>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
    );
  }
  
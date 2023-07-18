import React from 'react';
import img1 from './images/Course app-amico.svg';
import img2 from './images/Resume-amico.svg';
import img3 from './images/Discussion-amico.svg';
import img4 from './images/Soft skills-amico.svg';
import img5 from './images/Hiring-amico.svg';

import './MainContent.css'; 

function Card() {
  return (
  <div className="containerClass">
    <div className="cardClass" >
    {/* <div className="cardClass" style="--clr: #009688"> */}
      <div className="img-box">
        <img src={img1} />
      </div>
      <div className="contentClass">
        <h2>Courses</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Architecto, hic? Magnam eum error saepe doloribus corrupti
          repellat quisquam alias doloremque!
        </p>
        <a href="">Read More</a>
      </div>
    </div>

    <div className="cardClass" >
    {/* <div className="cardClass" style="--clr: #03A9F4"> */}
      <div className="img-box">
        <img src={img2}/>
      </div>
      <div className="contentClass">
        <h2>Resume Templates</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Architecto, hic? Magnam eum error saepe doloribus corrupti
          repellat quisquam alias doloremque!
        </p>
        <a href="">Read More</a>
      </div>
    </div>

    <div className="cardClass" >
    {/* <div className="cardClass" style="--clr: #009688"> */}
      <div className="img-box">
        <img src={img3} />
      </div>
      <div className="contentClass">
        <h2>Interview tips</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Architecto, hic? Magnam eum error saepe doloribus corrupti
          repellat quisquam alias doloremque!
        </p>
        <a href="">Read More</a>
      </div>
    </div>

    <div className="cardClass"  >
    {/* <div className="cardClass" style={{--clr: #03A9F4}} > */}
      <div className="img-box">
        <img src={img4} />
      </div>
      <div className="contentClass">
        <h2>SoftSkills</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Architecto, hic? Magnam eum error saepe doloribus corrupti
          repellat quisquam alias doloremque!
        </p>
        <a href="">Read More</a>
      </div>
    </div>

    <div className="cardClass" >
    {/* <div className="cardClass" style="--clr: #03A9F4"> */}
      <div className="img-box">
        <img src={img5} />
      </div>
      <div className="contentClass">
        <h2>Job Openings</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Architecto, hic? Magnam eum error saepe doloribus corrupti
          repellat quisquam alias doloremque!
        </p>
        <a href="">Read More</a>
      </div>
    </div>


  </div>
  );
}

export default Card;

import React from "react";
import "./works.css";
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';




const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">How I Work</h2>
      <span className="worksDesc">
        I take pride in being detail-oriented, calm, and thoughtful in my work,
        always approaching tasks with care and clarity. I enjoy understanding
        how things function and solving challenges step by step with patience.
        Learning new skills and improving myself every day is something I truly
        value and stay committed to.
      </span>

      <div className="worksImgs">
      <img src={portfolio1} alt="" className="worksImg" />
      <img src={portfolio2} alt="" className="worksImg" />
      <img src={portfolio3} alt="" className="worksImg" />
      <img src={portfolio4} alt="" className="worksImg" />
      <img src={portfolio5} alt="" className="worksImg" />
      <img src={portfolio6} alt="" className="worksImg" />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
};

export default Works;

import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Divya</span>
          <br />
          Java Full-Stack Developer
        </span>
        <p className="introPara">
        A Java full-stack developer with a keen interest in API development, 
         <br />database design, and modern UI building.
        </p>
        <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>

      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;

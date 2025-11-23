import React from "react";
import "./skills.css";
import fullStack from "../../assets/fullstack.png";
import javaDev from "../../assets/javalogo.png";
import frontEnd from "../../assets/website-design.png";
import datBase from "../../assets/databaselogo.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Build</span>
      <span className="skillDesc">
        I develop full-stack applications using Java, Spring Boot, React, and
        MySQL, focusing on clean architecture and seamless integration across
        all layers. My work emphasizes building reliable, efficient, and
        scalable backend-driven systems that ensure smooth performance. I strive
        to create solutions that handle real-world logic while maintaining
        clarity, stability, and long-term maintainability.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={fullStack} alt=" Full-Stack" className=" javadevImg skillBarImg" />
          <div className="skillBarText">
            <h2>Full-Stack Applications</h2>
            <p>
              I build complete end-to-end applications using Java, Spring Boot,
              React, and MySQL, ensuring smooth communication between frontend
              and backend.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={javaDev} alt="Java Dev" className="javadevImg skillBarImg "  />
          <div className="skillBarText">
            <h2>Backend Systems & APIs</h2>
            <p>
              I develop scalable backend systems with Spring Boot, including
              REST APIs, business logic, authentication, and efficient data
              handling.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={frontEnd} alt="Front-End" className="skillBarImg1 frontendImg" />
          <div className="skillBarText">
            <h2>Interactive Front-End Interfaces</h2>
            <p>
              I create responsive and user-friendly interfaces using React,
              JavaScript, HTML, and CSS, focused on clean structure and modern
              design practices.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={datBase} alt="Data-Base" className="javadevImg skillBarImg dbImg" />
          <div className="skillBarText">
            <h2>Database-Driven Solutions</h2>
            <p>
              I design and manage structured databases in MySQL and MongoDB,
              ensuring efficient storage, retrieval, and data relationships for
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

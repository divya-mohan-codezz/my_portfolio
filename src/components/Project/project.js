import React from "react";
import "./project.css";
import toDo from "../../assets/todo.png";
import portFo from "../../assets/portfolioImg.png";
import userMan from "../../assets/userMangament.png";
import eCom from "../../assets/ecom.png";

const Project = () => {
  return (
    <section id="project">
      <div id="projects">
        <h1 className="projectPageTitle">Projects I’ve Built</h1>
        <p className="projectDesc">
          I focus on building practical, backend-strong applications using Java,
          Spring Boot, React, and MySQL. These projects reflect my learning
          journey, hands-on problem-solving, and passion for creating real,
          functional systems.
        </p>
        <div className="projectimgs">
          <div className="projectBar">
            <img src={toDo} alt="Full-Stack" className="projectBarImg" />
            <div className="projectText">
              <h2>To-Do Application (Completed)</h2>
              <p>A task management app built with Spring Boot and MySQL.</p>
            </div>
          </div>
          <div className="projectBar">
            <img src={portFo} alt="Full-Stack" className="projectBarImg" />
            <div className="projectText">
              <h2>Portfolio Website (Completed)</h2>
              <p>A responsive personal portfolio built using React.js.</p>
            </div>
          </div>
          <div className="projectBar">
            <img src={userMan} alt="Full-Stack" className="projectBarImg" />
            <div className="projectText">
              <h2>User Management System (In Progress)</h2>
              <p>
                A full-stack app with login, registration & CRUD operations.
              </p>
            </div>
          </div>
          <div className="projectBar">
            <img src={eCom} alt="Full-Stack" className="projectBarImg" />
            <div className="projectText">
              <h2>E-Commerce Application (Planned)</h2>
              <p>A storefront with cart, orders, and admin system.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

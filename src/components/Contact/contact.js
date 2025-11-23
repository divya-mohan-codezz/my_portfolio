import React, { useRef } from "react";
import "./contact.css";
import faceBookIcon from "../../assets/facebook-icon.png";
import InstaIcon from "../../assets/instagram.png";
import xIcon from "../../assets/XIcon.png";
import youTubeIcon from "../../assets/youtube.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nii0cpc",
        "template_tjbr3hg",
        form.current,
        "ccL0ng-hCEz1JpWHz"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="Contact">
      <div id="contact">
        <h1 className="contactPageTitle">Reach Out to Me</h1>
        <span className="contactDesc">
          I’m open to opportunities, collaborations, and exciting Java
          full-stack projects. You can reach out to me through the options below
          - I’ll respond as soon as possible.
        </span>
         <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name" required />
          <input type="email" className="email" placeholder="Your Email" name="from_email" required />
          <textarea
            name="message"
            rows="5"
            className="msg"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="submitBtn" value='send'>Submit</button>
          <div className="links">
            <img src={faceBookIcon} alt="FaceBook" className="link" />
            <img src={xIcon} alt="X" className="link" />
            <img src={youTubeIcon} alt="Youtube" className="link" />
            <img src={InstaIcon} alt="Instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

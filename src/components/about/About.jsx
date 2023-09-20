import React from "react";
import "./about.css";
import ME from "../../assets/KTO.JPG";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Communication Experience</h5>
              <small>2+ Years Volunteering</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Leadership Experience</h5>
              <small>3+ Years Volunteering</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>7+ Completed</small>
            </article>
          </div>

          <p>
            I am a third year student of MIIT majoring Computer Science and
            Engineering. An active learner who wants to overcome with new
            challenges and who is seeking an opportunity to explore the world
            with Software Development. An active member who is always ready for
            any tasks in the team.
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

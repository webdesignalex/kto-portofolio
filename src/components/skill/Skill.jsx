import React from "react";
import "./skill.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skill = () => {
  return (
    <section id="skill">
      <h2>My Skills</h2>
      <div className="container skill__container">
        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icons" />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icons" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skill__frontend">
          <h3>Backend Development</h3>
          <div className="skill__content__bc">
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icons" />
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icons" />
              <div>
                <h4>Next JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skill__otherLangs">
          <h3>Other Languages</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icons" />
              <div>
                <h4>C</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icons" />
              <div>
                <h4>Java SE</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icons" />
              <div>
                <h4>Java EE(Spring and Spring Boot)</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icons" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icons" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

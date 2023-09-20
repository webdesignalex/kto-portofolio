import React, { useState } from "react";
import "./projects.css";
import { BiCheck } from "react-icons/bi";
import { motion } from "framer-motion";

const Projects = () => {
  const [isOpen, setIsOpen] = useState("false");
  const [isOpen1, setIsOpen1] = useState("false");
  const [isOpen2, setIsOpen2] = useState("false");
  return (
    <section id="projects">
      <h5>What I Build</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        <motion.article
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="project"
        >
          <motion.div layout="position" className="project__head">
            <motion.h3 layout="position">
              Sale Data Analysis using Python Programming Language
            </motion.h3>
          </motion.div>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="project__list"
            >
              <li>
                <BiCheck className="project__list-icons" />
                <p>This is the semester group project.</p>
              </li>
              <li>
                <BiCheck className="project__list-icons" />
                <p>We analyzed the sales data from convinence store.</p>
              </li>
              <li>
                <BiCheck className="project__list-icons" />
                <p>We used Python Data Science as Programming Language.</p>
              </li>
              <li>
                <BiCheck className="project__list-icons" />
                <p>
                  we could gave best advices to improve not only monthly but
                  also yearly sale rate of store.
                </p>
              </li>
              <li>
                <BiCheck className="project__list-icons" />
                <p>We outputed many types of graphs as a result.</p>
              </li>
            </motion.ul>
          )}
        </motion.article>
        {/*Content Creation*/}
        <motion.article
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          onClick={() => setIsOpen1(!isOpen1)}
          className="project"
        >
          <motion.div layout="position" className="project__head">
            <motion.h3 layout="position">
              Travel App using React Native
            </motion.h3>
          </motion.div>

          {isOpen1 && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="project__list"
            >
              <li>
                <BiCheck className="project__list-icons" />
                <p>Projects of Full Stack Developer OJT program.</p>
              </li>
              <li>
                <BiCheck className="project__list-icons" />
                <p>This is the app showing many places to travel.</p>
              </li>
              <li>
                <BiCheck className="project__list-icons" />
                <p>Responsive Design Enabled.</p>
              </li>
              <li>
                <BiCheck className="project__list-icons" />
                <p>I used JavaScript and Bootstrap for Design.</p>
              </li>
              <li>
                <BiCheck className="project__list-icons" />
                <p>I used React Native for Front End Developent.</p>
              </li>
            </motion.ul>
          )}
        </motion.article>

        {/*Web Development*/}
        <motion.article
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          onClick={() => setIsOpen2(!isOpen2)}
          className="project"
        >
          <motion.div layout="position" className="project__head">
            <motion.h3 layout="position">
              {" "}
              Basic HR Website using Prime React and Next Js
            </motion.h3>
          </motion.div>

          {isOpen2 && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="project__list"
            >
              <li>
                <BiCheck className="project__list-icons" />
                <p>Projects of Full Stack Developer OJT program.</p>
              </li>
              <li>
                <BiCheck className="project__list-icons" />
                <p>
                  Website to manage everything about employees from company.
                </p>
              </li>
              <li>
                <BiCheck className="project__list-icons" />
                <p>
                  User can easily manage salary, attendance, loans of employees
                  easily and fastly.
                </p>
              </li>
              <li>
                <BiCheck className="project__list-icons" />
                <p>We used Prime React and Next Js as a technology.</p>
              </li>
              <li>
                <BiCheck className="project__list-icons" />
                <p>We used Express Js as server-sided technology.</p>
              </li>
            </motion.ul>
          )}
        </motion.article>
      </div>
    </section>
  );
};

export default Projects;

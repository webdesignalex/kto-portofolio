import React from 'react'
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Experience</h2>
      <div className='continer experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__otherLangs">
          <h3>Other Languages</h3>
        <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>C</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
          </div>
        </div>

        </div>

    </section>
  )
}

export default Experience
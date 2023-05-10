import React from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oego6vw', 'template_nrwjo5d', form.current, 'GaTYyPWA41p58aAny')
      
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className="contact__option-icons"/>
            <h4>Email</h4>
            <h5>niniee61@gmail.com</h5>
            <a href="mailto:niniee61@gmail.com">Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className="contact__option-icons"/>
            <h4>Messenger</h4>
            <h5>Khaing Thazin Oo</h5>
            <a href="https://messenger.com">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className="contact__option-icons"/>
            <h4>Whatsapp</h4>
            <h5>+959970989954</h5>
            <a href="https://api.whatsapp.com/send?phone+959970989954">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message </button>
          
        </form>
      </div>
    </section>
  )
}

export default Contact
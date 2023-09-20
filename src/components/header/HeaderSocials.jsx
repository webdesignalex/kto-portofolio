import React from "react";
/* to install react icons*/
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/khaing-thazin-oo-233a2b1b4"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/webdesignalex" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;

import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/KTO.png";
import HeaderSocials from "./HeaderSocials";
import TextAnimation from "../../animations/TextAnimation";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <TextAnimation />
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

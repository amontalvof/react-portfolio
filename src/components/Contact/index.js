import React from "react";
import { Element } from "react-scroll";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import Title from "../Title";
import { ContactWrapper } from "./ContactStyle";

export default function index() {
  return (
    <ContactWrapper>
      <Element name="contact">
        <Title title="Get in touch" white={true} />
      </Element>
      <br />
      <div>
        <a className="iconosSociales" href={"https://www.facebook.com/"}>
          <FaFacebook />
        </a>
        <a className="iconosSociales" href={"https://www.linkedin.com/"}>
          <FaLinkedin />
        </a>
        <a className="iconosSociales" href={"https://www.github.com/"}>
          <FaGithub />
        </a>
      </div>
      <div className="flex-container">
        <div>
          <h3>PHONE: +52 461 253 4450</h3>
        </div>
        <div>
          <h3>EMAIL: andy@mail.com</h3>
        </div>
      </div>
      <div>
        <p>
          Copyright &copy; Andy Montalvo {new Date().getFullYear()}, all rights
          reserved.
        </p>
        <br />
      </div>
    </ContactWrapper>
  );
}

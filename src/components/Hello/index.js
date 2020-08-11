import React from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import { Button } from "react-rainbow-components";
import { FaFileDownload } from "react-icons/fa";
import { ParalaxWrapper } from "./ParalaxStyle";
import bgimg from "../../assets/images/mainBgd.jpg";
import img from "../../assets/images/mainImgBW.jpg";

export default function index() {
  return (
    <ParalaxWrapper img={bgimg}>
      <Element name="hello">
        <div className="flex-container">
          <div>
            <img src={img} alt="profile" />
          </div>
          <div style={{ flexBasis: "700px" }}>
            <h1 id="typewriter">
              Andy Montalvo<span id="enlinea">_</span>
            </h1>
            <br />
            <p>
              I am Junior Web developer able to build a Website from the ground
              up - from concept, navigation, layout and programming to UX.
              Skilled at writing well-designed, and efficient code using current
              best practices in Web development. Fast learner, hard worker and
              team player who is proficient in an array of scripting languages
              such as JavaScript, PHP and Python.
            </p>
            <br />
            <Link
              to="./cv/Andy_Montalvo_CV.pdf"
              target="_blank"
              download
              style={{ textDecoration: "none" }}
            >
              <Button
                style={{ fontSize: "1.3rem" }}
                variant="outline-brand"
                className="rainbow-m-around_medium"
              >
                <FaFileDownload /> &nbsp;DOWNLOAD CV
              </Button>
            </Link>
          </div>
        </div>
      </Element>
      <div className="parallax"></div>
    </ParalaxWrapper>
  );
}

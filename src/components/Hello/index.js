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
      <div className="parallax"></div>
      <Element name="hello">
        <div className="flex-container">
          <div>
            <img src={img} alt="profile" />
          </div>
          <div style={{ flexBasis: "700px" }}>
            <h1>Andy Montalvo</h1>

            <br />
            <p>
              I am Junior Web developer able to build a Web presence from the
              ground up - from concept, navigation, layout and programming to UX
              and SEO. Skilled at writing well-designed, testable and efficient
              code using current best practices in Web development. Fast
              learner, hard worker and team player who is proficient in an array
              of scripting languages and multimedia Web tools.
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

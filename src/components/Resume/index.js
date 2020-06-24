import React from "react";
import { Element } from "react-scroll";
import { ResumeWrapper } from "./ResumeStyle";
import Timeline from "../Timeline";
import Title from "../Title";
import Skills from "../Skills";

export default function index() {
  return (
    <ResumeWrapper>
      <React.Fragment>
        <Element name="resume">
          <Title title={"Resume"} />
        </Element>
        <br />
        <Timeline title={"employment"} />
        <br />
        <Timeline title={"education"} />
        <br />
        <Title title={"General Skills"} />
        <br />
        <Skills />
        <br />
      </React.Fragment>
    </ResumeWrapper>
  );
}

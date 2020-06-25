import React from "react";
import { ResumeWrapper } from "./ResumeStyle";
import Timeline from "../Timeline";
import Title from "../Title";
import Skills from "../Skills";

export default function index() {
  return (
    <ResumeWrapper>
      <React.Fragment>
        <Title title={"Resume"} />
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

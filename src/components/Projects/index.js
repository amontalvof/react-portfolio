import React, { useContext } from "react";
import { Element } from "react-scroll";
import { ProjectsContext } from "../../context/projects";
import Title from "../Title";
import { ProjectsWrapper } from "./ProjectsStyle";
import bgimg from "../../assets/images/mainBgd2.jpg";
import Card from "./card";

export default function Projects() {
  const { conProjects } = useContext(ProjectsContext);

  return (
    <ProjectsWrapper img={bgimg}>
      <Element name="projects">
        <div className="parallax"></div>
      </Element>
      <div className="projContainer">
        <Title title={"My Projects"} white={true} />
        <div className="flex-container">
          {conProjects.map((item) => {
            return (
              <div key={item.id}>
                <Card project={item} />
              </div>
            );
          })}
        </div>
      </div>
    </ProjectsWrapper>
  );
}

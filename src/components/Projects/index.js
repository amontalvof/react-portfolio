import React, { useContext } from "react";
import { Element } from "react-scroll";
import { ProjectsContext } from "../../context/projects";
import Title from "../Title";
import { ProjectsWrapper } from "./ProjectsStyle";
import Card from "./card";

export default function Projects() {
  const { conProjects } = useContext(ProjectsContext);

  return (
    <ProjectsWrapper>
      <div className="projContainer">
        <Element name="projects">
          <Title title={"My Projects"} white={true} />
        </Element>

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

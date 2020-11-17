import React, { useContext } from "react";
import { Element } from "react-scroll";
import { ProjectsContext } from "../../context/projects";
import Title from "../Title";
import CardHover from "./CardHover";
import { ProjectsHoverWrapper } from "./ProjectsHoverStyle";

const ProjectsHover = () => {
    const { conProjects } = useContext(ProjectsContext);
    return (
        <ProjectsHoverWrapper>
            <Element name="projects">
                <Title title={"Main Projects"} white={true} />
            </Element>
            <div className="flex-container-practice">
                {conProjects.map((item) => {
                    if (item.type === "main") {
                        return (
                            <div key={item.id}>
                                <CardHover {...item} />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>

            <Title title={"Other Projects"} white={true} />

            <div className="flex-container-practice">
                {conProjects.map((item) => {
                    if (item.type === "practice") {
                        return (
                            <div key={item.id}>
                                <CardHover {...item} />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </ProjectsHoverWrapper>
    );
};

export default ProjectsHover;

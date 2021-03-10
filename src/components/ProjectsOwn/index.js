import React, { useContext } from 'react';
import { Element } from 'react-scroll';
import { ProjectsContext } from '../../context/projects';
import Title from '../Title';
import CardOwn from './CardOwn';
import { ProjectsOwnWrapper } from './ProjectsOwnStyle';
import CarouselOwn from './CarouselOwn';

const ProjectsOwn = () => {
    const { conProjects } = useContext(ProjectsContext);

    return (
        <ProjectsOwnWrapper>
            <Element name="projects">
                <Title
                    title={'Main Projects'}
                    white={true}
                    className="desktop"
                />
            </Element>
            <div className="flex-container-main">
                {conProjects.map((item) => {
                    if (item.type === 'main') {
                        return (
                            <div key={item.id}>
                                <CardOwn {...item} />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <Title title={'Other Projects'} white={true} className="desktop" />
            <div className="flex-container-practice">
                {conProjects.map((item) => {
                    if (item.type === 'practice') {
                        return (
                            <div key={item.id}>
                                <CardOwn {...item} />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <Title title={'Projects'} white={true} className="mobile" />
            <CarouselOwn />
        </ProjectsOwnWrapper>
    );
};

export default ProjectsOwn;

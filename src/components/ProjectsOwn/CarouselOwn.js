import React, { useContext } from 'react';
import { CarouselCard, CarouselImage } from 'react-rainbow-components';
import { ProjectsContext } from '../../context/projects';

const carouselContainerStyles = {
    maxWidth: 600,
};

const CarouselOwn = () => {
    const { conProjects } = useContext(ProjectsContext);

    return (
        <div className="rainbow-p-vertical_x-large rainbow-m-horizontal_medium mobile_carousel">
            <CarouselCard
                style={carouselContainerStyles}
                className="rainbow-align-content_center rainbow-m_auto"
                id="carousel-1"
            >
                {conProjects.map((item) => {
                        return (
                            <CarouselImage
                                key={item.id}
                                src={item.img}
                                header={item.alt}
                                description={item.tech}
                                alternativeText="First card accessible description."
                                href={item.url}
                            />
                        );
                })}
            </CarouselCard>
        </div>
    );
};

export default CarouselOwn;

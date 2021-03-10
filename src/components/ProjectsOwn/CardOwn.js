import React from 'react';
import { CardOwnWrapper, StyledIcon } from './CardOwnStyle';
import { FaGithub } from 'react-icons/fa';

const CardOwn = ({ tech, alt, img, url, github }) => {
    return (
        <CardOwnWrapper>
            <img src={img} alt={alt} className="image" />
            <div className="middle">
                <h1 className="para">{alt}</h1>
                <p className="para">{tech}</p>
                <a href={url} style={{ textDecoration: 'none' }}>
                    <StyledIcon />
                </a>
                <a href={github} style={{ textDecoration: 'none' }}>
                    <StyledIcon as={FaGithub} />
                </a>
            </div>
        </CardOwnWrapper>
    );
};
export default CardOwn;

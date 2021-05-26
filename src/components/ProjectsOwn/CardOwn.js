import React from 'react';
import {RenderIf} from 'react-rainbow-components'
import { CardOwnWrapper, StyledIcon } from './CardOwnStyle';
import { FaGithub } from 'react-icons/fa';

const CardOwn = ({ tech, alt, img, url, github }) => {
    return (
        <CardOwnWrapper>
            <img src={img} alt={alt} className="image" />
            <div className="middle">
                <h1 className="para">{alt}</h1>
                <p className="para">{tech}</p>
                <div className="flex-container">
                    <a href={url} style={{ textDecoration: 'none' }}>
                        <StyledIcon />
                    </a>
                    <RenderIf isTrue={github}>
                        <a href={github} style={{ textDecoration: 'none' }}>
                            <StyledIcon as={FaGithub} />
                        </a>
                    </RenderIf>
                </div>
            </div>
        </CardOwnWrapper>
    );
};
export default CardOwn;

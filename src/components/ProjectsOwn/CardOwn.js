import React from 'react';
import { RenderIf } from 'react-rainbow-components';
import { CardOwnWrapper, StyledIcon } from './CardOwnStyle';
import { FaGithub } from 'react-icons/fa';

const CardOwn = ({ tech, alt, img, url, github, fontSize }) => {
    return (
        <CardOwnWrapper>
            <img src={img} alt={alt} className="image" />
            <div className="middle">
                <h1>{alt}</h1>
                <p style={{ fontSize }}>{tech}</p>
                <div className="flex-container">
                    <a
                        href={url}
                        style={{ textDecoration: 'none' }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <StyledIcon />
                    </a>
                    <RenderIf isTrue={github}>
                        <a
                            href={github}
                            style={{ textDecoration: 'none' }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <StyledIcon as={FaGithub} />
                        </a>
                    </RenderIf>
                </div>
            </div>
        </CardOwnWrapper>
    );
};
export default CardOwn;

import React from 'react';
import { CardOwnWrapper } from './CardOwnStyle';

const CardOwn = ({ tech, alt, img, url }) => {
    return (
        <a href={url} style={{ textDecoration: 'none' }}>
            <CardOwnWrapper>
                <img src={img} alt={alt} className="image" />
                <div className="middle">
                    <h1 className="para">{alt}</h1>
                    <p className="para">{tech}</p>
                </div>
            </CardOwnWrapper>
        </a>
    );
};
export default CardOwn;

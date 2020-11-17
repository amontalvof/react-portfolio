import React from "react";

import { CardHoverWrapper } from "./CardHoverStyle";

const CardHover = ({ tech, alt, img, url }) => {
    return (
        <CardHoverWrapper>
            <a href={url} style={{ textDecoration: "none" }}>
                <figure className="c4-izmir c4-border-center c4-image-blur customStyle">
                    <img src={img} alt={alt} />
                    <figcaption>
                        <div className="c4-reveal-up">
                            <h3>{alt}</h3>
                        </div>
                        <div className="c4-reveal-up">
                            <p>{tech}</p>
                        </div>
                    </figcaption>
                </figure>
            </a>
        </CardHoverWrapper>
    );
};

export default CardHover;

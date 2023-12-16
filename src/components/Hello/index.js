import React from 'react';
import { Element } from 'react-scroll';
import TypedName from './TypedName';
import { ParalaxWrapper } from './ParalaxStyle';
import bgimg from '../../assets/images/mainBgd.jpg';
import img from '../../assets/images/mainImgBW.jpeg';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function Hello() {
    const isLarge = useMediaQuery('(min-width: 1320px)');
    return (
        <ParalaxWrapper img={bgimg}>
            <Element name="hello">
                <div className="flex-container">
                    <div
                        className="about_me"
                        style={{
                            zIndex: 2,
                            width: isLarge ? '350px' : '',
                            marginRight: isLarge ? '50px' : '',
                        }}
                    >
                        <div className="about_me-image">
                            <img src={img} alt="profile" />
                        </div>
                    </div>
                    <div style={{ flexBasis: '700px' }}>
                        <div className="titleNameContainer">
                            <TypedName />
                        </div>
                        <br />
                        <p>
                            I am a Full-Stack Developer skilled at writing
                            well-designed and efficient code using current best
                            practices. Fast learner, hard worker, and team
                            player proficient in various languages such as
                            JavaScript, TypeScript, and Java.
                        </p>
                        <br />
                        <br />
                    </div>
                </div>
            </Element>
            <div className="parallax"></div>
        </ParalaxWrapper>
    );
}

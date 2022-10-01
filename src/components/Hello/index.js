import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import { Button } from 'react-rainbow-components';
import TypedName from './TypedName';
// import ParticleComponent from './ParticleComponent';
import { FaFileDownload } from 'react-icons/fa';
import { ParalaxWrapper } from './ParalaxStyle';
import bgimg from '../../assets/images/mainBgd.jpg';
import img from '../../assets/images/mainImgBW.jpeg';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function Hello() {
    const isLarge = useMediaQuery('(min-width: 1320px)');
    return (
        <ParalaxWrapper img={bgimg}>
            <Element name="hello">
                {/* {window.screen.width > 1024 ? (
                    <div id="particles">
                        <ParticleComponent />
                    </div>
                ) : null} */}
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
                            well-designed, and efficient code using current best
                            practices. Fast learner, hard worker and team player
                            who is proficient in an array of scripting languages
                            such as JavaScript, TypeScript, Java, and Python.
                        </p>
                        <br />
                        <Link
                            to="./resume/Andy_Montalvo_Resume.pdf"
                            target="_blank"
                            download
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                style={{ fontSize: '1.1rem' }}
                                variant="outline-brand"
                                className="rainbow-m-around_medium"
                            >
                                <FaFileDownload /> &nbsp;Download Resume
                            </Button>
                        </Link>
                    </div>
                </div>
            </Element>
            <div className="parallax"></div>
        </ParalaxWrapper>
    );
}

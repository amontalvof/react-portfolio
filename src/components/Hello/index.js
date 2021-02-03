import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import { Button } from 'react-rainbow-components';
// import ParticleComponent from './ParticleComponent';
import { FaFileDownload } from 'react-icons/fa';
import { ParalaxWrapper } from './ParalaxStyle';
import bgimg from '../../assets/images/mainBgd.jpg';
import img from '../../assets/images/mainImgBW.jpeg';

export default function index() {
    return (
        <ParalaxWrapper img={bgimg}>
            <Element name="hello">
                {/* {window.screen.width > 1024 ? (
                    <div id="particles">
                        <ParticleComponent />
                    </div>
                ) : null} */}
                <div className="flex-container">
                    <div style={{ zIndex: 2 }}>
                        <img src={img} alt="profile" />
                    </div>
                    <div style={{ flexBasis: '700px' }}>
                        <h1 id="typewriter">
                            Andy Montalvo<span id="enlinea">_</span>
                        </h1>
                        <br />
                        <p>
                            I am a Front-end Developer skilled at writing
                            well-designed, and efficient code using current best
                            practices in Web development. Fast learner, hard
                            worker and team player who is proficient in an array
                            of scripting languages such as JavaScript, PHP and
                            Python.
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

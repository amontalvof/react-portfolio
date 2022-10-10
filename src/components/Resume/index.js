import React from 'react';
import { Element } from 'react-scroll';
import { ResumeWrapper } from './ResumeStyle';
import Timeline from '../Timeline';
import Title from '../Title';
// import SkillsCloud from '../SkillsCloud';
import SkillsCloud from '../SkillsCloud/WordsCloud';

export default function Resume({ radiusSize }) {
    return (
        <ResumeWrapper>
            <React.Fragment>
                <Element name="skills">
                    <Title title={'Skills'} />
                </Element>
                <br />
                <SkillsCloud radiusSize={radiusSize} />
                <br />
                {/* <Element name="resume">
                    <Title title={'Resume'} />
                </Element> */}
                <Element name="resume">
                    <Title title={'Education'} />
                </Element>
                {/* <br /> */}
                {/* <Timeline title={'work experience'} /> */}
                <br />
                <Timeline title={'education'} />
                <br />
                <br />
            </React.Fragment>
        </ResumeWrapper>
    );
}

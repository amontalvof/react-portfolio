import React from 'react';
import { Element } from 'react-scroll';
import { ResumeWrapper } from './ResumeStyle';
import Timeline from '../Timeline';
import Title from '../Title';
//import Skills from "../Skills";
//import SkillsCircle from "../SkillsCircle";
import SkillsCloud from '../SkillsCloud';

export default function Resume() {
    return (
        <ResumeWrapper>
            <React.Fragment>
                <Element name="resume">
                    <Title title={'Resume'} />
                </Element>
                <br />
                <Timeline title={'work experience'} />
                <br />
                <Timeline title={'education'} />
                <br />
                <Element name="skills">
                    <Title title={'General Skills'} />
                </Element>
                <br />
                <SkillsCloud />
                <br />
            </React.Fragment>
        </ResumeWrapper>
    );
}

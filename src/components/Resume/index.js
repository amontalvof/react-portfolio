import React from 'react';
import { Element } from 'react-scroll';
import { ResumeWrapper } from './ResumeStyle';
import Timeline from '../Timeline';
import Title from '../Title';
import SkillsCloud from '../SkillsCloud/WordsCloud';
import WordsList from '../SkillsCloud/WordsList';

export default function Resume({ radiusSize }) {
    return (
        <ResumeWrapper>
            <React.Fragment>
                <Element name="skills">
                    <Title title={'Skills'} />
                </Element>
                <br />
                <SkillsCloud radiusSize={radiusSize} />
                <WordsList />
                <br />
                <Element name="resume">
                    <Title title={'Education'} />
                </Element>
                <br />
                <Timeline title={'education'} />
                <br />
                <br />
            </React.Fragment>
        </ResumeWrapper>
    );
}

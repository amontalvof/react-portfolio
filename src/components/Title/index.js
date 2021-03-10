import React from 'react';
import { TitleWrapper } from './TitleStyle';

export default function index({ title, white, className }) {
    return (
        <TitleWrapper white={white} className={className}>
            <h2 className="titleResume">{title}</h2>
        </TitleWrapper>
    );
}

import React from 'react';
import { cloudSkills } from '../../context/data';

const fontColor = '#161569';

const WordsList = () => {
    const tags = cloudSkills.map((skill) => skill.technology);
    return (
        <div id="words-list-cloud">
            {tags.map((tag, index) => (
                <div
                    key={index}
                    style={{
                        margin: '20px',
                        color: fontColor,
                        fontSize: '16px',
                    }}
                >
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default WordsList;

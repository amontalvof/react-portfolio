import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
import { cloudSkills } from '../../context/data';

const WordsCloud = () => {
    const IsTagCloudLoaded = useRef(false);
    const Tags = cloudSkills.map((skill) => skill.technology);

    useEffect(() => {
        if (IsTagCloudLoaded.current) return;

        TagCloud('#tag-cloud-content', Tags, {
            radius: 300,
            maxSpeed: 'slow',
            initSpeed: 'slow',
            direction: 135,
            keep: true,
        });

        IsTagCloudLoaded.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Tags]);

    return <div id="tag-cloud-content"></div>;
};

export default WordsCloud;

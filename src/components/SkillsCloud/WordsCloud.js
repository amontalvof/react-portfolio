import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
import { cloudSkills } from '../../context/data';
import useMediaQuery from '../../hooks/useMediaQuery';

const fontColor = '#161569';

const WordsCloud = () => {
    const IsTagCloudLoaded = useRef(false);
    const isLarge720 = useMediaQuery('(min-width: 700px)');
    const Tags = cloudSkills.map((skill) => skill.technology);

    useEffect(() => {
        if (IsTagCloudLoaded.current) return;

        TagCloud('.content', Tags, {
            radius: 300,
            maxSpeed: 'slow',
            initSpeed: 'slow',
            direction: 135,
            keep: true,
        });

        IsTagCloudLoaded.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Tags]);

    return (
        <div
            className="content"
            style={{
                display: 'flex',
                justifyContent: 'center',
                width: isLarge720 ? '100%' : '50%',
                fontSize: isLarge720 ? '20px' : '15px',
                color: fontColor,
            }}
        ></div>
    );
};

export default WordsCloud;

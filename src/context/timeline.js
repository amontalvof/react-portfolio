import React, { useState, useEffect } from 'react';
import { employment, education } from './data';

const TimelineContext = React.createContext();

function TimelineProvider({ children }) {
    const [conEmployment, setConEmployment] = useState([]);
    const [conEducation, setConEducation] = useState([]);

    useEffect(() => {
        setConEmployment(employment);
        setConEducation(education);

        return () => {};
    }, []);

    return (
        <TimelineContext.Provider value={{ conEmployment, conEducation }}>
            {children}
        </TimelineContext.Provider>
    );
}

export { TimelineContext, TimelineProvider };

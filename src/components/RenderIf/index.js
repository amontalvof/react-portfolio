import React from 'react';

export const RenderIf = ({ isTrue, children }) => {
    if (isTrue) {
        return <>{children}</>;
    }
    return null;
};

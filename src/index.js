import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TimelineProvider } from './context/timeline';
import { ProjectsProvider } from './context/projects';
import { ScrollyProvider } from './context/scrolly';

ReactDOM.render(
    <React.StrictMode>
        <ScrollyProvider>
            <TimelineProvider>
                <ProjectsProvider>
                    <App />
                </ProjectsProvider>
            </TimelineProvider>
        </ScrollyProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

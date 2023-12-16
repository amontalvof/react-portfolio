import React from 'react';
import { Application } from 'react-rainbow-components';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Hello from './components/Hello';
import ProjectsOwn from './components/ProjectsOwn';
import Contact from './components/Contact';
import ScrollButton from './components/ScrollButton';
import './App.css';

const theme = {
    rainbow: {
        palette: {
            brand: '#00b7d4',
            mainBackground: '#2d3a54',
            success: '#2d3a54',
        },
    },
};

function App() {
    return (
        <Application theme={theme}>
            <Navbar />
            <Hello />
            <ProjectsOwn />
            <Resume />
            <Contact />
            <ScrollButton />
        </Application>
    );
}

export default App;

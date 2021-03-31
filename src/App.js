import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Application } from 'react-rainbow-components';
import './App.css';
// import './izmir.min.css';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Hello from './components/Hello';
// import Projects from './components/Projects';
// import ProjectsHover from './components/ProjectsHover';
import ProjectsOwn from './components/ProjectsOwn';
import Contact from './components/Contact';
import ScrollButton from './components/ScrollButton';

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
        <Router>
            <React.Fragment>
                <Application theme={theme}>
                    <Navbar />
                    <Hello />
                    <ProjectsOwn />
                    <Resume />
                    <Contact />
                    <ScrollButton />
                </Application>
            </React.Fragment>
        </Router>
    );
}

export default App;

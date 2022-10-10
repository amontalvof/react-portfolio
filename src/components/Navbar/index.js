import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import { Drawer } from 'react-rainbow-components';
import { NavbarWrapper } from './NavbarStyle';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const onClickToElement = (element) => {
        const scrollType = {
            duration: 1000,
            delay: 50,
            smooth: true, // linear “easeInQuint” “easeOutCubic”
            offset: -10,
        };
        setIsOpen(false);
        scroller.scrollTo(element, scrollType);
    };
    return (
        <NavbarWrapper>
            <React.Fragment>
                <div className="navbar-phone">
                    <FaBars
                        className="navbar-icon"
                        onClick={() => setIsOpen(true)}
                    />
                </div>
                <div className="navbar">
                    <a
                        href="#hello"
                        onClick={() => {
                            onClickToElement('hello');
                        }}
                    >
                        Hello
                    </a>
                    <a
                        href="#projects"
                        onClick={() => {
                            onClickToElement('projects');
                        }}
                    >
                        Projects
                    </a>
                    <a
                        href="#skills"
                        onClick={() => {
                            onClickToElement('skills');
                        }}
                    >
                        Skills
                    </a>
                    <a
                        href="#resume"
                        onClick={() => {
                            onClickToElement('resume');
                        }}
                    >
                        Education
                    </a>
                    <a
                        href="#contact"
                        onClick={() => {
                            onClickToElement('contact');
                        }}
                    >
                        Contact
                    </a>
                </div>
                <Drawer
                    header="Menu"
                    slideFrom="right"
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                >
                    <div style={{ padding: ' 10px' }}>
                        <a
                            href="#hello"
                            style={{
                                fontSize: '20px',
                                color: '#f6fcfc',
                                textDecoration: 'none',
                            }}
                            onClick={() => {
                                onClickToElement('hello');
                            }}
                        >
                            Hello
                        </a>
                    </div>
                    <div style={{ padding: ' 10px' }}>
                        <a
                            href="#projects"
                            style={{
                                fontSize: '20px',
                                color: '#f6fcfc',
                                textDecoration: 'none',
                            }}
                            onClick={() => {
                                onClickToElement('projects');
                            }}
                        >
                            Projects
                        </a>
                    </div>
                    <div style={{ padding: ' 10px' }}>
                        <a
                            href="#skills"
                            style={{
                                fontSize: '20px',
                                color: '#f6fcfc',
                                textDecoration: 'none',
                            }}
                            onClick={() => {
                                onClickToElement('skills');
                            }}
                        >
                            Skills
                        </a>
                    </div>
                    <div style={{ padding: ' 10px' }}>
                        <a
                            href="#resume"
                            style={{
                                fontSize: '20px',
                                color: '#f6fcfc',
                                textDecoration: 'none',
                            }}
                            onClick={() => {
                                onClickToElement('resume');
                            }}
                        >
                            Resume
                        </a>
                    </div>
                    <div style={{ padding: ' 10px' }}>
                        <a
                            href="#contact"
                            style={{
                                fontSize: '20px',
                                color: '#f6fcfc',
                                textDecoration: 'none',
                            }}
                            onClick={() => {
                                onClickToElement('contact');
                            }}
                        >
                            Contact
                        </a>
                    </div>
                </Drawer>
            </React.Fragment>
        </NavbarWrapper>
    );
}

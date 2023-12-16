import React from 'react';
import { Element } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Title from '../Title';
import { ContactWrapper } from './ContactStyle';

export default function index() {
    return (
        <ContactWrapper>
            <Element name="contact">
                <Title title="Contact" white={true} />
            </Element>
            <br />
            <div>
                <a
                    className="iconosSociales"
                    href="https://www.linkedin.com/in/andy-montalvo-6a9a37148/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a
                    className="iconosSociales"
                    href="https://github.com/amontalvof"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
            </div>
            <div>
                <h3>Email: andy.montalvowd@gmail.com</h3>
            </div>
            <div>
                <p>
                    Copyright &copy; Andy Montalvo {new Date().getFullYear()},
                    all rights reserved.
                </p>
                <br />
            </div>
        </ContactWrapper>
    );
}

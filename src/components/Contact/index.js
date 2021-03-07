import React from 'react';
import { Element } from 'react-scroll';
import { FaLinkedin, FaGithub, FaDev } from 'react-icons/fa';
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
                >
                    <FaLinkedin />
                </a>
                <a
                    className="iconosSociales"
                    href="https://github.com/amontalvof"
                >
                    <FaGithub />
                </a>
                <a className="iconosSociales" href="https://dev.to/amontalvof">
                    <FaDev />
                </a>
            </div>
            <div>
                <h3>Phone: +52 461 253 4450</h3>
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

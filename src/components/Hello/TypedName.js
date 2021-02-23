import React, { Component } from 'react';
import { init } from 'ityped';

export default class Hello extends Component {
    componentDidMount() {
        const myElement = document.querySelector('#myElement');
        init(myElement, {
            showCursor: true,
            cursorChar: '_',
            disableBackTyping: true,
            strings: ['Andy Montalvo'],
        });
    }
    render() {
        return <div id="myElement"></div>;
    }
}

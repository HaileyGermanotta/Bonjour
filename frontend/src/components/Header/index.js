import React from 'react';
import github from '../../static/image/github.png';
import linkedin from '../../static/image/linkedin-square.png';

function Header() {
    return (
        <header className="App-header">
            <ul className="navigation-bar">
                <li>
                    <a className="navigation" href="/">HOME</a>
                </li>
                <li>
                    <a className="navigation" href="/">BLOG</a>
                </li>
                <li>
                    <a className="navigation" href="/">ABOUT</a>
                </li>
                <li className="right-icon">
                    <a href="https://github.com/HaileyGermanotta" target="blank">
                        <img src={ github } className="top-icon" alt="github"/>
                    </a>
                </li>
                <li className="right-icon">
                    <a href="/" target="blank">
                        <img src={ linkedin } className="top-icon" alt="linkedin"/>
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Header;
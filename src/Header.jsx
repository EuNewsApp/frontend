/* eslint class-methods-use-this: 0 */

import * as React from 'react';
import './Header.css';

import flag from './flag.svg';

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <img src={flag} className="Header-flag" alt="logo" />
                <h1>News about Europe</h1>
            </div>
        );
    }
}

export default Header;

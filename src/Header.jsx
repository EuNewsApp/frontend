/* eslint class-methods-use-this: 0 */

import * as React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

import flag from './flag.svg';

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <h1>Menu</h1>
                <img src={flag} className="Header-flag" alt="logo" />
                {this.props.children}
            </div>
        );
    }
}
Header.propTypes = {
    children: PropTypes.node.isRequired
};


export default Header;

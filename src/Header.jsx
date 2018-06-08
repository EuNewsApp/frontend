/* eslint class-methods-use-this: 0 */

import * as React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

import logo from './logo_eupinions.png';

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-center">
                    <img className="header-logo" src={logo}/>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
Header.propTypes = {
    children: PropTypes.node.isRequired
};


export default Header;

/* eslint class-methods-use-this: 0 */
/* eslint camelcase: 0 */

import * as React from 'react';

import algolia_logo from './algolia_logo.svg';

import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <img src={algolia_logo}/>
                <div>
                    Made for beyond borders Hackathon Aachen
                </div>
                <a href="https://impressum.gerogerke.de/imprint/eupinions-site/">Imprint & Privacy</a>
            </div>
        );
    }
}

export default Footer;

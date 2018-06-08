/* eslint class-methods-use-this: 0 */

import * as React from 'react';

import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <p>&copy; 2018 EuNewsApp Team</p>
                <div>
                    Made for beyond borders Hackathon Aachen
                </div>
                <a href="https://impressum.gerogerke.de/imprint/eupinions-site/">Imprint & Privacy</a>
            </div>
        );
    }
}

export default Footer;

/* eslint class-methods-use-this: 0 */
/* eslint camelcase: 0 */

import * as React from 'react';

import './AlgoliaAttribution.css';

import algolia_logo from './algolia_logo.svg';

class AlgoliaAttribution extends React.Component {
    render() {
        return (
            <div className="AlgoliaAttribution">
                <img src={algolia_logo}/>
            </div>
        );
    }
}

export default AlgoliaAttribution;

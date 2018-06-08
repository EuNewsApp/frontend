/* eslint class-methods-use-this: 0 */

import * as React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

class Article extends React.Component {
    render() {
        return (
            <div className="Article">
                <img src="https://s2.reutersmedia.net/resources/r/?m=02&d=20180608&t=2&i=1270372000&w=1200&r=LYNXNPEE570NG"/>
                <div className="Article-text">
                    <span className="Article-text_title">{this.props.flag} {this.props.title}</span>
                    <span className="Article-text_headline">{this.props.headline}</span>
                </div>
            </div>
        );
    }
}

Article.propTypes = {
    flag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired
};

export default Article;

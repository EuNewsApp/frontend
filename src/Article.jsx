/* eslint class-methods-use-this: 0 */
/* eslint camelcase: 0 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Highlight } from 'react-instantsearch/dom';
import moment from 'moment';
import './Article.css';

function mapEmoji(countryCode) {
    switch(countryCode) {
        case 'BG':
            return '🇧🇪'
        case 'DE':
            return '🇩🇪';
        case 'ES':
            return '🇪🇸';
        case 'FR':
            return '🇫🇷';
        case 'GR':
            return '🇬🇷';
        case 'IT':
            return '🇮🇹';
        case 'NL':
            return '🇳🇱';
        case 'PL':
            return '🇵🇱';
        case 'RO':
            return '🇷🇴';
        case 'UK':
            return '🇬🇧';
        default:
            return '❓';
    }
}

function mapPublishers(publisher) {
    switch(publisher) {
        case 'Spiegel':
            return 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Spiegel-Online-Logo.svg';
        case 'Süddeutsche':
            return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/S%C3%BCddeutsche_Zeitung_Logo.svg/1024px-S%C3%BCddeutsche_Zeitung_Logo.svg.png';
        case 'Le Monde':
            return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Le_Monde.svg/2000px-Le_Monde.svg.png';
        case 'Daily Telegraph':
            return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Daily_Telegraph.svg/2000px-Daily_Telegraph.svg.png';
        case 'La Repubblica':
            return 'http://www.carloloforti.com/wp-content/uploads/2016/09/Logo-La-Repubblica-small.jpg';
        case 'Le Figaro':
            return 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Le_Figaro_logo.svg/1280px-Le_Figaro_logo.svg.png';
        case 'Corriere della Sera':
            return 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Corriere_della_Sera.svg/2000px-Corriere_della_Sera.svg.png';
        case 'La Stampa':
            return 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/La_Stampa.svg/9405px-La_Stampa.svg.png';
        case 'El Pais':
            return 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/El_Pais_logo_2007.svg/2000px-El_Pais_logo_2007.svg.png';
        case 'El Mundo':
            return 'https://logos-download.com/wp-content/uploads/2016/05/El_Mundo_logo.png';
        case 'ABC':
            return 'https://www.gbc.gi/uploads/news/18gJ9_abc.jpg';
        case '':
    }
    return '❓';
}

function formatTime(time) {
    console.log(time);
    return moment(time).fromNow();
}

class Article extends React.Component {
    render() {
        const { hit } = this.props;
        const {
            headlineEn,
            titleEn,
            country,
            source,
            img,
            pubDate,
        } = hit;

        const tags = [];
        return (
            <div className={this.props.isBigPicture ? 'Article bigPicture' : 'Article'}>
                <img className='Article-thumb' src={img ? img : 'https://s2.reutersmedia.net/resources/r/?m=02&d=20180608&t=2&i=1270372000&w=1200&r=LYNXNPEE570NG'}/>
                <div className='Article-text'>
                    <span className='Article-text_title'>{mapEmoji(country)} <Highlight attribute={titleEn === null ? "title" : "titleEn"} hit={hit}/></span>
                    <span className='Article-text_headline'><Highlight attribute={headlineEn === null ? "headline" : "headlineEn"} hit={hit}/></span>
                    <div className='row'>
                        <img className='logo' src={mapPublishers(source)} alt={source}/>
                        <span>{formatTime(pubDate)}</span>
                        {tags.length === 0 ? (<div/>) : (<span style={{ marginRight: '5px' }}>&#9679;</span>)}
                        {tags.map((tag, i) => (<span key={i} className='Article-text_tag'>{tag}</span>))}
                    </div>
                </div>
            </div>
        );
    }
}

Article.propTypes = {
    hit: PropTypes.object.isRequired,
    isBigPicture: PropTypes.bool
};

export default Article;

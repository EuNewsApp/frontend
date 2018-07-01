/* eslint class-methods-use-this: 0 */
/* eslint camelcase: 0 */
/* eslint prefer-template: 0 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Highlight } from 'react-instantsearch/dom';
import moment from 'moment';
import './Article.css';

import symbolbild from './symbolbild.png';

function mapEmoji(countryCode) {
    switch (countryCode) {
    case 'BG':
        return '🇧🇪';
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
    case 'PT':
        return '🇵🇹';
    case 'RO':
        return '🇷🇴';
    case 'UK':
        return '🇬🇧';
    default:
        return '❓';
    }
}

function mapPublishers(publisher) {
    switch (publisher) {
    case 'Spiegel':
        return 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Spiegel-Online-Logo.svg';
    case 'Süddeutsche':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/S%C3%BCddeutsche_Zeitung_Logo.svg/1024px-S%C3%BCddeutsche_Zeitung_Logo.svg.png';
    case 'Le Monde':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Le_Monde.svg/2000px-Le_Monde.svg.png';
    case 'Daily Telegraph':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Daily_Telegraph.svg/2000px-Daily_Telegraph.svg.png';
    case 'La Repubblica':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/La_Repubblica_Logo.svg/1286px-La_Repubblica_Logo.svg.png';
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
    case 'Le Soir':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Logo_du_journal_Le_Soir.svg/2000px-Logo_du_journal_Le_Soir.svg.png';
    case 'The Guardian':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/The_Guardian.svg/2000px-The_Guardian.svg.png';
    case 'BBC':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/BBC.svg/1280px-BBC.svg.png';
    case 'Observador':
        return 'https://i1.wp.com/rubberchickengames.com/wp-content/uploads/2015/03/observador.jpg?resize=1024%2C306';
    case 'Jornal de Notícias':
        return 'https://imageporxy.gerogerke.de/http://www.tvmana1.com/imagens_noticias/618x294_jornal-de-noticias-e-o-primeiro-jornal-portugues-a-ter-artigos-no-instant-articles-do-facebook.jpeg';
    default:
        return '❓';
    }
}

function formatTime(time) {
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
            link,
            categories
        } = hit;

        const trLink = 'https://translate.google.com/translate?sl=auto&tl=en&js=y&act=url&u=' + encodeURIComponent(link);

        const tags = categories || [];

        let proxiedImage = '';
        if (img !== null) {
            proxiedImage = img.startsWith('https') ? img : `https://imageproxy.gerogerke.de/${img}`;
        } else {
            proxiedImage = symbolbild;
        }
        return (
            <div className={this.props.isBigPicture ? 'Article bigPicture' : 'Article'}>
                <img className='Article-thumb' src={proxiedImage} style={{ float: 'left' }}/>
                <a href={trLink} className='Article-text_title'>{mapEmoji(country)} <Highlight attribute={titleEn === null ? 'title' : 'titleEn'} hit={hit}/></a>
                <div>
                    <span className='Article-text_headline'><Highlight attribute={headlineEn === null ? 'headline' : 'headlineEn'} hit={hit}/></span>
                    <div className='row'>
                        <img className='logo' src={mapPublishers(source)} alt={source}/>
                        <span>{formatTime(pubDate)}</span>
                        {tags.map((tag, i) => (<span key={i} className='Article-text_tag'>{tag.replace(/^\/+/g, '')}</span>))}
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

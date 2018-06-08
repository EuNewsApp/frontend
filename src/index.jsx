import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Article from './Article.jsx';

import './index.css';

ReactDOM.render(
    <div>
        <Header/>
        <Article flag={'🇩🇪'} title={'Google faces record fine'} headline={'The EU wants to break the market power of Google\'s Android operating system. According to the Financial Times, such antitrust proceedings could end with a record fine in the billions.'} tags={['Computers & Electronics']} logo={'https://upload.wikimedia.org/wikipedia/commons/4/4f/Spiegel-Online-Logo.svg'}/>
        <Article flag={'🇮🇹'} title={'Guzzetti on Piersanti Mattarella: "More respect for the lay martyrs of our society".'} headline={'The president of Acre recounts his relationship with the brother of the head of state: "I was president of Lombardy, we tried to increase trade between our two regions".'} tags={['Business & Industrial']} logo={'http://www.carloloforti.com/wp-content/uploads/2016/09/Logo-La-Repubblica-small.jpg'}/>
        <Article flag={'🇫🇷'} title={'Austria takes action against « political Islam » by expelling dozens of imams'} headline={'Following the announcement of these evictions accompanied by the closure of seven mosques financed by Turkey, Ankara denounced an « Islamophobic » and « racist » measure.'} tags={['Religion & Belief', 'Another Tag']} logo={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Le_Monde.svg/2000px-Le_Monde.svg.png'}/>
        <Article flag={'🇩🇪'} title={'Kim and Trump meet on the Isle of Death.'} headline={'Now the location of the meeting between US President Donald Trump (71) and North Korean ruler Kim Jong-un (34) is known on June 12: The island of Sentosa in the south of Singapore.'} tags={['Worldwide Politics', 'United States']} logo={'https://upload.wikimedia.org/wikipedia/commons/d/de/Logo_Bild-de.svg'}/>
        <Article flag={'🇬🇷'} title={'One billion euros in handouts planned to counterbalance overtaxation, pension cuts'} headline={'The objective is to counter-balance the negative electoral impact of extreme over-taxation and of deep pension cuts that will come into effect on 1 January, 2019'} tags={['Finance', 'Economy']} logo={'https://upload.wikimedia.org/wikipedia/commons/7/78/Ta_Nea_logo.png'}/>
    </div>,
    document.getElementById('app')
);

module.hot.accept();

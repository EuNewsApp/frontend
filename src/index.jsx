import React from 'react';
import ReactDOM from 'react-dom';
import {
    InstantSearch,
    Hits,
    SearchBox,
    Pagination
} from 'react-instantsearch/dom';

import Header from './Header.jsx';
import Article from './Article.jsx';
import Footer from './Footer.jsx';

import './index.css';

ReactDOM.render(
    <div>
        <InstantSearch
            appId="XDUDYBW7A8"
            apiKey="08e26b198e4db12a9df52b2f6d6ec16a"
            indexName="articles">
            <Header>
                <SearchBox />
            </Header>
            <Hits hitComponent={Article}/>
            <Pagination/>
            <Footer/>
        </InstantSearch>
    </div>,
    document.getElementById('app')
);

module.hot.accept();

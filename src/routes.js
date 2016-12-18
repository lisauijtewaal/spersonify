import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage.js';
import LoginPage from './components/LoginPage.js';
import ArtistDetailPage from './components/ArtistDetailPage.js';
import NotFoundPage from './components/NotFoundPage.js';

const bla = () => (
    <h1>friejiot</h1>
);

export default ( // /about
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="login" component={LoginPage}/>
        <Route path="artist/:artistId" component={ArtistDetailPage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

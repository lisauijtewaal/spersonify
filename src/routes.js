import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage.js';
import LoginPage from './components/LoginPage.js';
import ArtistDetailPage from './components/ArtistDetailPage.js';
import NotFoundPage from './components/NotFoundPage.js';


export default (
    // Define which component should render based on which path is currently active:
    <Route path="/" component={App}>
        <IndexRoute component={LoginPage}/>
        <Route path="home" component={HomePage}/>
        <Route path="artist/:artistId" component={ArtistDetailPage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

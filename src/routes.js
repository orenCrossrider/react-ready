import React from 'react';
import { Route, IndexRoute } from 'react-router';
// Main routes
import LoginRequiredAppContainer from './app/main_routes/login_required/login_required_app_container';
import {loginWillEnter} from './app/main_routes/login_required/login_required_app';
import MasterAppContainer from './app/main_routes/master/master_app_container';
// Statics
import AboutPage from './app/static_pages/about_page';
import HomePage from './app/static_pages/home_page';
import LoginPageContainer from './app/login/login_page_container';
import NotFoundPage from './app/static_pages/not_found_page';

export default (
    <Route path="/" component={MasterAppContainer}>
        <IndexRoute component={LoginPageContainer} />
        <Route path="login" component={LoginPageContainer} />
        <Route path="home" component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="app" onEnter={loginWillEnter} component={LoginRequiredAppContainer} >
            
        </Route>
        <Route path="*" component={NotFoundPage} />
    </Route>
);

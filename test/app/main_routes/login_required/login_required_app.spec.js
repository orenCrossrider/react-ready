import chai, {expect} from 'chai';
import cheerio from 'cheerio';
import React, { Component } from 'react';
import { render } from 'react-dom';
import jsdom from 'mocha-jsdom';
import { Route, Router, createMemoryHistory, IndexRoute} from 'react-router';
import userStorage from '../../../../src/app/localstorage/user';
import {loginWillEnter} from '../../../../src/app/main_routes/login_required/login_required_app';


jsdom.rerequire;
chai.should();

describe('Login Required App', () => {
    class LoginRequiredParent extends Component {
        render() {
          return <div>app {this.props.children}</div>
        }
    }

    class LoginPage extends Component {
        render() {
          return <div>login {this.props.children}</div>
        }
    }

    class AppChild extends Component {
        render() {
          return <div>child</div>
        }
    }
    
    jsdom();

    let node
    beforeEach(function () {
        node = document.createElement('div')
    })

    describe('when user is logged in', () => {
        let user = {
            username: "Username",
            first_name: 'testFirstName',
            last_name: 'lastFirstName' 
        }
        let token = "alksdn232sldknsd";
        beforeEach(() => {
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        });

        describe('when user try to access /app pages', () => {
            it('it should render /app pages', function (done) {
                render((
                <Router history={createMemoryHistory('/app')}>
                    <Route path="/" component={LoginPage} />
                    <Route path="app" onEnter={loginWillEnter} component={LoginRequiredParent}>
                        <IndexRoute component={AppChild} />
                    </Route>
                </Router>
                ), node, function () {
                  expect(node.textContent).to.equal('app child')
                  done()
                })
            })
        });

        describe('when user try to access the login page', () => {
            it('should render login page', function (done) {
                render((
                <Router history={createMemoryHistory('/')}>
                    <Route path="/" component={LoginPage} />
                    <Route path="app" onEnter={loginWillEnter} component={LoginRequiredParent}>
                        <IndexRoute component={AppChild} />
                    </Route>
                </Router>
                ), node, function () {
                  expect(node.textContent).to.equal('login ')
                  done()
                })
            })
        });
    });

    describe('when user is NOT logged in', () => {
        beforeEach(() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        });

        describe('when user try to access /app pages', () => {
            it('it should render login page', function (done) {
                render((
                <Router history={createMemoryHistory('/app')}>
                    <Route path="/login" component={LoginPage} />
                    <Route path="app" onEnter={loginWillEnter} component={LoginRequiredParent}>
                        <IndexRoute component={AppChild} />
                    </Route>
                </Router>
                ), node, function () {
                  expect(node.textContent).to.equal('login ')
                  done()
                })
            })
        });

        describe('when user try to access the login page', () => {
            it('it should render login page', function (done) {
                render((
                <Router history={createMemoryHistory('/login')}>
                    <Route path="/login" component={LoginPage} />
                    <Route path="app" onEnter={loginWillEnter} component={LoginRequiredParent}>
                        <IndexRoute component={AppChild} />
                    </Route>
                </Router>
                ), node, function () {
                  expect(node.textContent).to.equal('login ')
                  done()
                })
            })
        });
    });
});
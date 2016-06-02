import chai, {expect} from 'chai';
import cheerio from 'cheerio';
import Navbar from '../../../src/app/navbar/navbar';
import React, { Component } from 'react';
import ReactDOMServer from 'react/lib/ReactDOMServer';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

chai.should();

describe('Navbar', () => {
    
    class App extends Component {
        render() {
            return (
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <Navbar user={this.props.user}/>
                </MuiThemeProvider>
            );
        }
    }

    describe('User menu', () => {
        it('should display the user details', () => {
            const username = "testUser"; 
            let props = {
                user: {
                    username: username
                }
            };
            let component = React.createElement(App, props);
            let html = ReactDOMServer.renderToStaticMarkup(component);
            let $ = cheerio.load(html);
            let usernameLabel = $('#username_menu_label').html();
            usernameLabel.should.equal(username);
        });
    });
});

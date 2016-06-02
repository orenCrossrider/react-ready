import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configure_store';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import 'react-select/dist/react-select.css';
import 'react-virtualized-select/styles.css';
import injectTapEventPlugin from 'react-tap-event-plugin'; // Dependency for material-ui
injectTapEventPlugin();

const store = configureStore();

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
        </Provider>
    </MuiThemeProvider>
);

render(
    <App />, document.getElementById('app')
);

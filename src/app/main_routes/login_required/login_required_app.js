import React, { Component, PropTypes } from 'react';
import usersApi from '../../api/users';
import userStorage from '../../localstorage/user';
import Navbar from '../../navbar/navbar';
import { Sticky } from 'react-sticky';
import navbarStyles from '../../navbar/navbar_styles';

// A convention when using onEnter logic - keep WillEnter suffix.
// This will be used in the routes import with the same function name.
export function loginWillEnter(nextState, replaceState, callback) {
    if (!userStorage.isLoggedIn()) {
        replaceState('/login');
    }
    callback();
}

class LoginRequiredApp extends Component {
    constructor(props, context) {
        super(props, context);
        this.logout = this.logout.bind(this);
        this.sharedActions = this.sharedActions.bind(this);
    }

    componentDidMount() {
        const { route } = this.props;
        const { router } = this.context;
        router.setRouteLeaveHook(route, this.routerWillLeave.bind(this));
        this.props.actions.loadUser(userStorage.getDetails());
    }

    routerWillLeave(nextState, router) {
        // return "Are you sure you want to leave?"; // This will popup a confirm message
        // return false; // This will prevent from leaving the page
        return true; // this will leave anyway
    }

    logout() {
        usersApi.logout().then((response) => {
            this.context.router.push('/');
            userStorage.clear();
            this.props.actions.clearUser();
        }).catch((response) => {
            this.props.shared.showNotification("Unable to logout. Are you connected to the internet?", "error");
        });
    }

    sharedActions() {
        return this.props.shared;
    }

    renderChild(element) {
        return React.cloneElement(element, {
            shared: this.sharedActions()
        });
    }

    render() {
        return (
            <div>
                <Sticky style={navbarStyles.sticky}>
                    <Navbar user={this.props.appState.user} onLogout={this.logout} shared={this.sharedActions()} />
                </Sticky>
                <div className="inner_container">
                    {React.Children.map(this.props.children, this.renderChild.bind(this))}
                </div>
            </div>
        );
    }
}

LoginRequiredApp.contextTypes = {
    router: React.PropTypes.object.isRequired
};

LoginRequiredApp.propTypes = {
    route: PropTypes.object,
    children: PropTypes.element,
    shared: PropTypes.object,
    actions: React.PropTypes.object,
    appState: React.PropTypes.object
};

export default LoginRequiredApp;


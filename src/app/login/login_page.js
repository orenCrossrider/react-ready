import React, { Component } from 'react';
import usersApi from '../api/users';
import userStorage from '../localstorage/user';
import styles from './login_page_styles';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import BodyClassName from 'react-body-classname';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.updateUserDetails = this.updateUserDetails.bind(this);
        this.saveUserDetails = this.saveUserDetails.bind(this);
        this.validDetails = this.validDetails.bind(this);
    }

    updateUserDetails(event) {
        this.props.actions.saveLoginDetails(this.refs.username.getValue(), this.refs.password.getValue());
    }

    validDetails() {
        return this.props.appState.username.value && this.props.appState.password.value;
    }

    saveUserDetails(event) {
        event.preventDefault();

        if (this.validDetails()) {
            this.props.shared.showLoader();
            usersApi.login(this.props.appState.username.value, this.props.appState.password.value).then((response) => {
                let token = response.data.auth_token;
                userStorage.setUserToken(token);
                usersApi.get().then((response) => {
                    userStorage.setDetails(response.data);   
                    this.props.shared.hideLoader();
                    this.context.router.push('/app/campaigns');  
                }).catch(() => {
                    userStorage.clear();
                    this.props.shared.hideLoader();
                    this.props.shared.showNotification("Oops, something went wrong. Please try again.", 'error');
                });
            }).catch(() => {
                let errorMessage = "Please check you entered valid credentials";
                this.props.shared.hideLoader();
                this.props.shared.showNotification(errorMessage, "error");
            });
        } else {
            this.props.actions.addLoginErrors();
        }
    }

    render() {
        return (
            <BodyClassName className="login-body">
                <div style={styles.root}>
                    <Paper zDepth={2} rounded={false}>
                        <div style={styles.header}>
                            <h1 style={styles.header.h1}>Login</h1>
                        </div>
                        <div style={styles.loginBox} >
                            <form onSubmit={this.saveUserDetails}>
                                <TextField
                                    name="username"
                                    ref="username"
                                    fullWidth={true}
                                    floatingLabelText="Username"
                                    onChange={this.updateUserDetails}
                                    errorText={this.props.appState.username.errorText}/>
                                <br/>
                                <TextField
                                    name="password"
                                    ref="password"
                                    fullWidth={true}
                                    floatingLabelText="Password"
                                    type="password"
                                    onChange={this.updateUserDetails}
                                    errorText={this.props.appState.password.errorText}/>
                                <br/>
                                <RaisedButton 
                                    label="Go" 
                                    type="submit"
                                    backgroundColor={styles.siginButton.background} 
                                    labelColor={styles.siginButton.color} 
                                    style={styles.siginButton}/>
                            </form>
                        </div>
                    </Paper>
                </div>
            </BodyClassName>
        );
    }
}

LoginPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

LoginPage.propTypes = {
    shared: React.PropTypes.object,
    actions: React.PropTypes.object,
    appState: React.PropTypes.object
};

export default LoginPage;

import React, { Component, PropTypes } from 'react';
import MasterLoader from '../../shared/loader/master_loader';
import MasterNotification from '../../shared/notifications/master_notification';
import {red600} from 'material-ui/styles/colors';
import ErrorsHelper from '../../../helpers/errors';
import { StickyContainer } from 'react-sticky';

class MasterApp extends Component {
    constructor(props, context) {
        super(props, context);
        this.showNotification = this.showNotification.bind(this);
        this.closeNotification = this.closeNotification.bind(this);
        this.showLoader = this.showLoader.bind(this);
        this.hideLoader = this.hideLoader.bind(this);
        this.handleServerError = this.handleServerError.bind(this);
        this.sharedActions = this.sharedActions.bind(this);
    }

    //////////// Shared functions /////////////

    showNotification(message, type) {
        if (message) {
            let style = {};
            switch (type) {
            case "error":
                style = {background: red600};
            }
            this.props.actions.showNotification(message, style);
        }
    }

    closeNotification() {
        this.props.actions.hideNotification();
    }

    showLoader() {
        this.props.actions.showLoader();
    }

    hideLoader() {
        this.props.actions.hideLoader();
    }

    handleServerError(serverResponse, type) {
        this.hideLoader();
        try {
            if (serverResponse) {
                let data = serverResponse.data;
                let errors = ErrorsHelper.toString(data);
                this.showNotification(`Oops, something went wrong: ${errors}`, type);
            } else {
                // When we want to force the general error message without a connection to the server error.
                this.showNotification("Oops, something went wrong. Please try again.", type);
            }
        } catch (e) {
            // when the server response is different from what we expect. 
            this.showNotification("Oops, something went wrong. Please try again.", type); 
        }
    }
    
    ///////////////////////////////////

    sharedActions() {
        return {
            showNotification: this.showNotification, 
            hideLoader: this.hideLoader, 
            showLoader: this.showLoader,
            handleServerError: this.handleServerError
        };
    }

    renderChild(element) {
        return React.cloneElement(element, {
            shared: this.sharedActions()
        });
    }

    render() {
        return (
            <StickyContainer>
                {React.Children.map(this.props.children, this.renderChild.bind(this))}
                <MasterNotification notification={this.props.appState.notification} closeNotification={this.closeNotification}/>
                <MasterLoader loader={this.props.appState.loader} />
            </StickyContainer>
        );
    }
}

MasterApp.propTypes = {
    children: PropTypes.element,
    actions: React.PropTypes.object,
    appState: React.PropTypes.object
};

export default MasterApp;


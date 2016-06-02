import React, { Component, PropTypes } from 'react';
import styles from './master_notification_styles';
import Snackbar from 'material-ui/Snackbar';

const MasterNotification = (props) => {
    return (
        <Snackbar
          open={props.notification.show}
          message={props.notification.message}
          autoHideDuration={3000}
          bodyStyle={{...styles.body, ...props.notification.style}}
          onRequestClose={props.closeNotification}/>
    );
};

MasterNotification.propTypes = {
    notification: PropTypes.object.isRequired,
    closeNotification: PropTypes.func
};

export default MasterNotification;

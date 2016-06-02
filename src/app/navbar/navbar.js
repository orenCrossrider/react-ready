import React, { PropTypes } from 'react';
// Material UI
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import styles from './navbar_styles';

const Navbar = (props) => {
    const onSearchClick = () => {
        props.shared.showSearchOverlay();
    };

    return (
        <Toolbar id="main-navbar" style={styles.root}>
            <ToolbarGroup firstChild={true} float="left">
                <i className="material-icons" style={styles.iconStyle}>public</i>
            </ToolbarGroup>
            <ToolbarGroup id="right-navbar" float="right">
                <ToolbarSeparator style={styles.rightSeparator} />
                <i className="material-icons" style={{...styles.iconStyle, ...styles.avatar}}>account_circle</i>
                <ToolbarTitle id="username_menu_label" style={styles.userEmailStyle} text={props.user.username} />
                <IconMenu 
                    iconButtonElement={
                        <IconButton style={styles.userMoreBtnStyle} touch={true}>
                            <i className="material-icons" style={styles.iconStyle}>more_vert</i>
                        </IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                    <MenuItem primaryText="Sign Out" onClick={props.onLogout} />
                </IconMenu>
            </ToolbarGroup>
        </Toolbar>
    );
};

Navbar.propTypes = {
    shared: PropTypes.object,
    user: PropTypes.object.isRequired,
    onLogout: PropTypes.func.isRequired
};

export default Navbar;

import React, { Component, PropTypes } from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import styles from './master_loader_styles';

const MasterLoader = (props) => {
    return ( 
        <div id="master-loader" style={styles.root}>
            <div style={styles.wrapper}>
                <RefreshIndicator
                  size={styles.refreshIcon.size}
                  left={0}
                  top={0}
                  status={props.loader.status}
                />
            </div>
        </div>
    );
};

MasterLoader.propTypes = {
    loader: PropTypes.object.isRequired
};

export default MasterLoader;

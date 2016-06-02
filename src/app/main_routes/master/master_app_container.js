import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './master_app_actions';
import MasterApp from './master_app';

function mapStateToProps(state) {
    return {
        appState: state.masterAppState
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MasterApp);

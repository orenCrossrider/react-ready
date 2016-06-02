import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './login_required_app_actions';
import LoginRequiredApp from './login_required_app';

function mapStateToProps(state) {
    return {
        appState: state.loginRequiredAppState
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
)(LoginRequiredApp);

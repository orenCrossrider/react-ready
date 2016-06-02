import LoginPage from './login_page';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './login_page_actions';

function mapStateToProps(state) {
    return {
        appState: state.loginPageAppState
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
)(LoginPage);

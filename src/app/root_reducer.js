import { combineReducers } from 'redux';
import loginPageAppState from './login/login_page_reducer';
import masterAppState from './main_routes/master/master_app_reducer';
import loginRequiredAppState from './main_routes/login_required/login_required_app_reducer';

const rootReducer = combineReducers({
    loginPageAppState,
    masterAppState,
    loginRequiredAppState
});

export default rootReducer;

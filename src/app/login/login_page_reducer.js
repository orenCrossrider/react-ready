import objectAssign from 'object-assign';
import deepFreeze from 'deep-freeze';
import {SAVE_LOGIN_DETAILS, ADD_LOGIN_ERRORS} from './login_page_actions';

const initialState = deepFreeze({
    username: {
        value: '', 
        errorText: ''
    },
    password: {
        value: '', 
        errorText: ''
    }
});

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead, create a copy of the state passed and set new values on the copy.
export default function loginPageAppState(state = initialState, action) {
    switch (action.type) {
    case SAVE_LOGIN_DETAILS: {
        let newState = objectAssign({}, state);
        newState.username = {value: action.username, errorText: ''};
        newState.password = {value: action.password, errorText: ''};
        return newState;
    }
    case ADD_LOGIN_ERRORS: {
        let newState = objectAssign({}, state);
        if (!state.username.value) {
            newState.username = {...state.username, ...{errorText: 'Please enter your username'}};
        }
        if (!state.password.value) {
            newState.password = {...state.password, ...{errorText: 'Please enter your password'}};
        }
        return newState;
    }
    default:
        return state;
    }
}

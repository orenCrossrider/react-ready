import objectAssign from 'object-assign';
import deepFreeze from 'deep-freeze';
import * as Actions from './login_required_app_actions';

const initialState = deepFreeze({
    user: {}
});

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead, create a copy of the state passed and set new values on the copy.
//MORE IMPORTANT: we need to implement an immutable object for initialState. In the meantime, do not use 2 dots notation.
export default function loginRequiredAppState(state = initialState, action) {
    switch (action.type) {
    case Actions.LOAD_USER: {
        return {...state, ...{user: action.user}};
    }
    case Actions.CLEAR_USER: {
        return {...state, ...{user: initialState.user}};
    }
    default:
        return state;
    }
}

import objectAssign from 'object-assign';
import deepFreeze from 'deep-freeze';
import * as Actions from './master_app_actions';

const initialState = deepFreeze({
    notification: {
        show: false, 
        message: '', 
        style: {}
    },
    loader: {
        status: 'hide'
    },
    overlays: {
        body: {
            active: false
        }
    }
});

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead, create a copy of the state passed and set new values on the copy.
//MORE IMPORTANT: we need to implement an immutable object for initialState. In the meantime, do not use 2 dots notation.
export default function masterAppState(state = initialState, action) {
    switch (action.type) {
    // NOTIFICATIONS
    case Actions.SHOW_NOTIFICATION: {
        let newState = objectAssign({}, state);
        newState.notification = {show: true, message: action.message, style: action.style};
        return newState;
    }
    case Actions.HIDE_NOTIFICATION: {
        let newState = objectAssign({}, state);
        newState.notification = {...initialState.notification, ...{style: state.notification.style}};
        return newState;
    }
    // LOADERS
    case Actions.SHOW_LOADER: {
        let newState = objectAssign({}, state);
        newState.loader = {...state.loader, ...{status: 'loading'}};
        return newState;
    }
    case Actions.HIDE_LOADER: {
        let newState = objectAssign({}, state);
        newState.loader = initialState.loader;
        return newState;
    }
    // OVERLAYS
    case Actions.DIM_BODY_OVERLAY: {
        let newBodyOverlay = {...state.overlays.body, ...{active: true}};
        let newOverlays = {overlays: {...state.overlays, ...{body: newBodyOverlay}}};
        return {...state, ...newOverlays};
    }
    case Actions.UNDIM_BODY_OVERLAY: {
        let newBodyOverlay = {...state.overlays.body, ...{active: false}};
        let newOverlays = {overlays: {...state.overlays, ...{body: newBodyOverlay}}};
        return {...state, ...newOverlays};
    }
    default:
        return state;
    }
}

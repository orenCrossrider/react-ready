export const SAVE_LOGIN_DETAILS = 'SAVE_LOGIN_DETAILS';
export const ADD_LOGIN_ERRORS = 'ADD_LOGIN_ERRORS';

export function saveLoginDetails(username, password) {
    return {type: SAVE_LOGIN_DETAILS, username, password};
}

export function addLoginErrors() {
    return {type: ADD_LOGIN_ERRORS};
}

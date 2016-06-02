export const LOAD_USER = 'LOAD_USER';
export const CLEAR_USER = 'CLEAR_USER';

export function loadUser(user) {
    return {type: LOAD_USER, user};
}

export function clearUser() {
    return {type: CLEAR_USER};
}


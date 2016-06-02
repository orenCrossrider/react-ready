export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const DIM_BODY_OVERLAY = 'DIM_BODY_OVERLAY';
export const UNDIM_BODY_OVERLAY = 'UNDIM_BODY_OVERLAY';

// NOTIFICATIONS
export function showNotification(message, style) {
    return {type: SHOW_NOTIFICATION, message, style};
}

export function hideNotification() {
    return {type: HIDE_NOTIFICATION};
}

// LOADERS
export function showLoader() {
    return {type: SHOW_LOADER};
}

export function hideLoader() {
    return {type: HIDE_LOADER};
}

// OVERLAYS
export function dimBodyOverlay() {
    return {type: DIM_BODY_OVERLAY};
}

export function undimBodyOverlay() {
    return {type: UNDIM_BODY_OVERLAY};
}

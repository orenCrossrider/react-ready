import { createStore } from 'redux';
import rootReducer from '../app/root_reducer';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}

import env from '../../environments/env';
import axios from 'axios';
import baseApi from './base';

module.exports = {
    login(username, password) {
        return baseApi.nakedPost({
            url: `${env.SERVER_API_URL}/auth/login/`, 
            data: {username: username, password: password}
        });
    },

    logout() {
        return baseApi.post({
            url: `${env.SERVER_API_URL}/auth/logout/`
        });
    },

    get() {
        return baseApi.get({
            url: `${env.SERVER_API_URL}/auth/user/`
        });
    }
};

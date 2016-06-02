import axios from 'axios';
import userStorage from '../localstorage/user';

module.exports = {
    get(args) {
        return axios({
            url: args.url,
            method: 'get',
            params: args.params,
            responseType: 'json',
            headers: {Authorization: `Token ${userStorage.token()}`}
        });
    },

    post(args) {
        return axios({
            url: args.url,
            method: 'post',
            data: args.data,
            responseType: 'json',
            headers: {Authorization: `Token ${userStorage.token()}`}
        });
    },

    nakedPost(args) {
        return axios({
            url: args.url,
            method: 'post',
            data: args.data,
            responseType: 'json'
        });
    },

    patch(args) {
        return axios({
            url: args.url,
            method: 'patch',
            data: args.data,
            responseType: 'json',
            headers: {Authorization: `Token ${userStorage.token()}`}
        });
    },

    delete(args) {
        return axios({
            url: args.url,
            method: 'delete',
            responseType: 'json',
            headers: {Authorization: `Token ${userStorage.token()}`}
        });
    }
};

import env from '../../environments/env';
import baseApi from './base';

class RestActions {

    constructor() {
        this.url = '';
    }

    getAll() {
        return baseApi.get({
            url: this.url
        });
    }

    get(objectId) {
        return baseApi.get({
            url: `${this.url}${objectId}/`
        });
    }

    update(object) {
        return baseApi.patch({
            url: `${this.url}${object.id}/`,
            data: object
        });
    }

    delete(objectId) {
        return baseApi.delete({
            url: `${this.url}${objectId}/`
        });
    }

    create(object) {
        return baseApi.post({
            url: this.url,
            data: object
        });
    }
}

export default RestActions;

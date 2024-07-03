import request from './_axios';

export default {
    login(data = {}) {
        return request('post', '/auth/local', { data });
    }
};

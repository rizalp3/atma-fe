import request from './_axios';

export default {
    getFeeds(config) {
        return request('get', '/explore', {
            strapi: config
        });
    }
};

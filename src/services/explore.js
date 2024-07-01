import request from './_axios';

export default {
    getFeeds(config) {
        return request('get', '/explore', {
            strapi: config
        });
    },

    likeFeed(id) {
        return request('put', `/explore/like/${id}`);
    },

    dislikeFeed(id) {
        return request('put', `/explore/dislike/${id}`);
    }
};

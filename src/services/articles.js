import request from './_axios';

export default {
    getArticleCategories() {
        return request('get', '/article-categories', {
            strapi: { fields: ['name', 'key'] }
        });
    },
    getArticles(config) {
        return request('get', '/articles', {
            strapi: config
        });
    }
};

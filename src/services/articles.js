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
    },

    getArticle(id) {
        return request('get', `/articles/${id}`, {
            strapi: { populate: { image: { fields: ['url'] } } }
        });
    }
};

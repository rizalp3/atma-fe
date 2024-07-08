import request from './_axios';

export default {
    getTestResults(config) {
        return request('get', '/test-results', {
            strapi: { sort: ['createdAt:desc'], ...config }
        });
    }
};

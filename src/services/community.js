import request from './_axios';

export default {
    getCommunityDetail() {
        return request('get', '/community-detail', {
            strapi: {
                populate: {
                    logo: { fields: ['url'] },
                    socialLinks: true
                }
            }
        });
    },

    getCommunityPosts(config) {
        const defaultConfig = {
            populate: {
                images: {
                    fields: ['formats']
                },
                session: {
                    fields: ['id'],
                    populate: { image: { fields: ['formats'] } }
                }
            },
            fields: ['category', 'title', 'date', 'summary', 'link'],
            sort: ['date:desc']
        };

        return request('get', '/community-posts', {
            strapi: config || defaultConfig
        });
    },

    getCommunityPost(id) {
        const config = {
            populate: {
                images: {
                    fields: ['url']
                },
                session: {
                    populate: { image: { fields: ['url'] } }
                }
            }
        };

        return request('get', `/community-posts/${id}`, {
            strapi: config
        });
    },

    getSessionQuestions(id, strapi = {}) {
        return request('get', `/session-questions/${id}`, { strapi });
    },

    voteSessionQuestion(id) {
        return request('put', `/session-questions/vote/${id}`);
    },

    unvoteSessionQuestion(id) {
        return request('put', `/session-questions/unvote/${id}`);
    },

    addCommunityQuestion(data) {
        return request('post', '/community-questions', { data });
    },

    deleteQuestion(id) {
        return request('delete', `/community-questions/${id}`);
    }
};

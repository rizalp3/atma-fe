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
                    fields: ['url']
                },
                session: {
                    fields: ['id'],
                    populate: { image: { fields: ['url'] } }
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

    getSessionQuestions(id) {
        return request('get', `/session-questions/${id}`);
    }
};

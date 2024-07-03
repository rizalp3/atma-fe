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
    }
};

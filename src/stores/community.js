import { defineStore } from 'pinia';

const getImageURL = (image = {}) => {
    return image?.attributes?.url || '';
};

export const useCommunityStore = defineStore('community', {
    state: () => {
        return {
            community: {
                name: '',
                subname: '',
                description: '',
                logo: '',
                socialLinks: []
            },

            post: {}
        };
    },
    actions: {
        setCommunityDetail(data) {
            this.community = {
                name: data.attributes.name,
                subname: data.attributes.subname,
                description: data.attributes.description,
                logo: getImageURL(data.attributes.logo.data),
                socialLinks: data.attributes.socialLinks
            };
        },
        setCommunityPost(data) {
            let images = [];
            let session = {};

            // Preprocess Images Data
            if (data.attributes?.images?.data) {
                images = data.attributes.images.data.map((image) => {
                    return getImageURL(image);
                });
            }

            // Preprocess Session Data
            if (data.attributes?.session?.image) {
                session = {
                    ...data.attributes.session,
                    image: getImageURL(data.attributes.session.image.data)
                };
            }

            this.post = {
                id: data.id,
                category: data.attributes.category,
                title: data.attributes.title,
                date: data.attributes.date,
                content: data.attributes.content || '',
                images,
                session
            };
        }
    }
});

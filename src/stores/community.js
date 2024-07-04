import { defineStore } from 'pinia';

const imageUrl = (image) => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    return baseUrl + image;
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
                logo: imageUrl(data.attributes.logo.data.attributes.url),
                socialLinks: data.attributes.socialLinks
            };
        },
        setCommunityPost(data) {
            let images = [];
            let session = {};

            // Preprocess Images Data
            if (data.attributes?.images?.data) {
                images = data.attributes.images.data.map((image) => {
                    return imageUrl(image.attributes.url);
                });
            }

            // Preprocess Session Data
            if (data.attributes?.session?.image) {
                session = {
                    ...data.attributes.session,
                    image: imageUrl(
                        data.attributes.session.image.data.attributes.url
                    )
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

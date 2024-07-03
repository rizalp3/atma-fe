import { defineStore } from 'pinia';

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

            posts: [],
            post: null
        };
    },
    actions: {
        setCommunityDetail(data) {
            const imageUrl = (image) => {
                const baseUrl = import.meta.env.VITE_API_BASE_URL;
                return baseUrl + image;
            };

            this.community = {
                name: data.attributes.name,
                subname: data.attributes.subname,
                description: data.attributes.description,
                logo: imageUrl(data.attributes.logo.data.attributes.url),
                socialLinks: data.attributes.socialLinks
            };
        }
    }
});

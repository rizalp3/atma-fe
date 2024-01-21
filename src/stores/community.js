import { defineStore } from 'pinia';

export const useCommunityStore = defineStore('community', {
    state: () => ({
        posts: [],
        post: null
    })
});

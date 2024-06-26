import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthModalShown: false,
        sectionShown: 'login'
    }),

    actions: {
        showAuthModal(section = 'login') {
            this.isAuthModalShown = true;
            this.sectionShown = section;
        },
        hideAuthModal() {
            this.isAuthModalShown = false;
        }
    }
});

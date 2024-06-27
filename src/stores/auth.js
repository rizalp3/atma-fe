import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: '',
        user: {},

        isAuthModalShown: false,
        sectionShown: 'login'
    }),

    getters: {
        isAuthenticated() {
            return !!this.token;
        }
    },

    actions: {
        showAuthModal(section = 'login') {
            this.isAuthModalShown = true;
            this.sectionShown = section;
        },

        hideAuthModal() {
            this.isAuthModalShown = false;
        },

        getAuthToken() {
            this.token = localStorage.getItem('token') || '';
        },

        getAuthData() {
            const data = localStorage.getItem('user');

            this.user = data ? JSON.parse(data) : {};
        },

        setAuthData(token, user) {
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            this.token = token;
            this.user = user;
        },

        resetAuthData() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');

            this.token = '';
            this.user = {};
        }
    }
});

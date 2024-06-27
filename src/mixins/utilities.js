export default {
    data() {
        return {
            token: this.getAuthToken()
        };
    },

    computed: {
        isAuthenticated() {
            return !!this.token;
        }
    },

    methods: {
        /**
         * @description Redirect To Other Page, if Ctrl or Meta Key Pressed, Open In New Tab
         *
         * @param {string} target - Target URL
         * @param {object} event - Click Event
         */
        redirect(target, event) {
            if (event.ctrlKey || event.metaKey) {
                window.open(target, '_blank');
            } else {
                this.$router.push(target);
            }
        },

        /**
         * @description Get Authorization Token
         *
         * @returns {string} Token
         */
        getAuthToken() {
            return localStorage.getItem('token') || '';
        },

        /**
         * @description Set Authorization Token
         *
         * @param {string} token - Token
         */
        setAuthToken(token) {
            localStorage.setItem('token', token);

            this.token = token;
        }
    }
};

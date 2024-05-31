export default {
    data() {
        return {
            windowWidth: window.innerWidth
        };
    },

    mounted() {
        window.addEventListener('resize', this.onResize);
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.onResize);
    },

    computed: {
        isMobile() {
            return this.windowWidth <= 600;
        },
        isDesktop() {
            return !this.isMobile;
        }
    },

    methods: {
        onResize() {
            this.windowWidth = window.innerWidth;
        }
    }
};

export default {
    methods: {
        /**
         * @description Redirect To Other Page, if Ctrl or Meta Key Pressed, Open In New Tab
         *
         * @param {string} target - Target URL
         * @param {object} event - Click Event
         */
        redirect(target, event) {
            if (event?.ctrlKey || event?.metaKey) {
                window.open(target, '_blank');
            } else {
                this.$router.push(target);
            }
        }
    }
};

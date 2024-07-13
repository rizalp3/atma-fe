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
        },

        /**
         * @description Get Image URL from Strapi Media Library
         *
         * @param {string} image - Image Object
         * @param {string} size - Target Size
         *
         * @returns {string} - Image URL
         */
        getImageURL(image = {}, size = 'real') {
            let imageURL = '';

            if (size === 'real') {
                imageURL = image?.attributes?.url;
            } else {
                imageURL = image?.attributes?.formats?.[size]?.url;
            }

            return imageURL || '';
        }
    }
};

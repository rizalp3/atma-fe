<template>
    <button :class="composeButtonClass">
        <vue-feather v-if="icon" :type="icon" :size="iconSize" />
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'AtmaButton',

    props: {
        size: {
            type: String,
            default: 'md'
        },
        variant: {
            type: String,
            default: 'primary'
        },
        icon: {
            type: String,
            default: ''
        }
    },

    computed: {
        composeButtonClass() {
            return [
                'atma-button',
                `atma-button--${this.size}`,
                `atma-button--${this.variant}`
            ];
        },

        iconSize() {
            const sizes = {
                xs: '16',
                sm: '20',
                md: '20',
                lg: '24',
                xl: '24'
            };

            return sizes[this.size];
        }
    }
};
</script>

<style lang="scss" scoped>
.atma-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-weight: 500;

    border-radius: 8px;

    cursor: pointer;
}
</style>

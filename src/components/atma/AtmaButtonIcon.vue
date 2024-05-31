<template>
    <button :class="composeButtonClass">
        <vue-feather :type="icon" :size="iconSize" />
    </button>
</template>

<script>
export default {
    name: 'AtmaButtonIcon',

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
            required: true
        },
        round: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        composeButtonClass() {
            return [
                'atma-button-icon',
                `atma-button-icon--${this.size}`,
                `atma-button-icon--${this.variant}`,
                { 'atma-button-icon--round': this.round }
            ];
        },

        iconSize() {
            const sizes = {
                xs: '12',
                sm: '16',
                md: '20',
                lg: '24',
                xl: '28'
            };

            return sizes[this.size];
        }
    }
};
</script>

<style lang="scss" scoped>
.atma-button-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 9px;
    border-radius: 8px;

    cursor: pointer;

    &--round {
        border-radius: 50%;
    }
}

// Variant
@each $variant, $color in $button-variant {
    .atma-button-icon--#{$variant} {
        background: map-get($color, 'default', 'background');
        border: 1px solid map-get($color, 'default', 'border');
        color: map-get($color, 'default', 'text');

        &:hover {
            background: map-get($color, 'hover', 'background');
            border-color: map-get($color, 'hover', 'border');
            color: map-get($color, 'hover', 'text');
        }

        &:active {
            background: map-get($color, 'active', 'background');
            border-color: map-get($color, 'active', 'border');
            color: map-get($color, 'active', 'text');
        }
    }
}
</style>

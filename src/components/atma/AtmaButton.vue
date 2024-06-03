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
    border: 0;

    cursor: pointer;
}

// Variant
@each $variant, $color in $button-variant {
    .atma-button--#{$variant} {
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

// Size
@each $size, $font in $button-size {
    .atma-button--#{$size} {
        font-size: map-get($font, 'font-size');
        line-height: map-get($font, 'line-height');
        padding: map-get($font, 'padding');
    }
}
</style>

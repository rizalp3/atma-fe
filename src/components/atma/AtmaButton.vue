<template>
    <button :class="composeButtonClass" :disabled="isDisabled">
        <div v-if="loading" class="spinner-border"></div>

        <atma-icon v-if="icon" :name="icon" size="20" />

        <div class="atma-button__text">
            <slot></slot>
        </div>
    </button>
</template>

<script>
export default {
    name: 'AtmaButton',

    props: {
        variant: {
            type: String,
            default: 'primary'
        },
        icon: {
            type: String,
            default: ''
        },
        radius: {
            type: String,
            default: '20'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        isDisabled() {
            return this.disabled || this.loading;
        },
        composeButtonClass() {
            const classes = ['atma-button'];

            if (this.icon) {
                classes.push('atma-button--icon');
            }

            if (!this.disabled) {
                classes.push(`atma-button--${this.variant}`);
            }

            if (this.loading) {
                classes.push('atma-button--loading');
            }

            return classes;
        },
        radiusValue() {
            return this.radius + 'px';
        }
    }
};
</script>

<style lang="scss" scoped>
.atma-button {
    $not-loading: ':not(.atma-button--loading)';

    padding: 9px 24px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    border-radius: v-bind(radiusValue);
    border-width: 1px;
    border-style: solid;

    &__text {
        @include text(14px, 500);
    }

    &--icon {
        padding-left: 16px;
    }

    &--primary {
        background: var(--system-color-primary);
        color: var(--system-color-on-primary);
        border-color: var(--system-color-primary);

        &:hover#{$not-loading} {
            background: var(--system-color-primary-variant);
            border-color: var(--system-color-primary-variant);
        }
    }

    &--secondary {
        background: var(--system-color-surface);
        color: var(--system-color-primary);
        border-color: var(--system-color-primary);

        &:hover#{$not-loading} {
            background: var(--system-color-surface-container-low);
        }
    }

    &:disabled#{$not-loading} {
        background: var(--system-color-surface-container);
        color: var(--system-color-outline-variant);
        border-color: var(--system-color-surface-container-high);
    }

    &--loading {
        > *:not(.spinner-border) {
            color: transparent;
        }

        .spinner-border {
            --bs-spinner-width: 16px;
            --bs-spinner-height: 16px;
            --bs-spinner-border-width: 2px;

            position: absolute;
        }
    }
}
</style>

<template>
    <button :class="composeButtonClass" :disabled="disabled">
        <atma-icon v-if="icon" :name="icon" size="20" />
        <slot></slot>
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
        }
    },

    computed: {
        composeButtonClass() {
            const classes = ['atma-button'];

            if (this.icon) {
                classes.push('atma-button--icon');
            }

            if (!this.disabled) {
                classes.push(`atma-button--${this.variant}`);
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
    padding: 9px 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    @include text(14px, 500);

    border-radius: v-bind(radiusValue);
    border-width: 1px;
    border-style: solid;

    &--icon {
        padding-left: 16px;
    }

    &--primary {
        background: var(--system-color-primary);
        color: var(--system-color-on-primary);
        border-color: var(--system-color-primary);

        &:hover {
            background: var(--system-color-primary-variant);
            border-color: var(--system-color-primary-variant);
        }
    }

    &--secondary {
        background: var(--system-color-surface);
        color: var(--system-color-primary);
        border-color: var(--system-color-primary);

        &:hover {
            background: var(--system-color-surface-container-low);
        }
    }

    &:disabled {
        background: var(--system-color-surface-container);
        color: var(--system-color-outline-variant);
        border-color: var(--system-color-surface-container-high);
    }
}
</style>

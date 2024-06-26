<template>
    <component
        :is="tag"
        :class="['atma-text', `atma-text--${size}`, `atma-text--${weight}`]"
        :style="{ color: colorStyle }"
    >
        <slot></slot>
    </component>
</template>

<script>
export default {
    name: 'AtmaText',

    props: {
        tag: {
            type: String,
            default: 'div'
        },
        size: {
            type: String,
            default: '16'
        },
        weight: {
            type: String,
            default: 'normal'
        },
        color: {
            type: String,
            default: ''
        },
        colorScheme: {
            type: String,
            default: ''
        }
    },

    computed: {
        colorStyle() {
            if (!!this.colorScheme) {
                return `var(--system-color-${this.colorScheme})`;
            }

            if (!!this.color) {
                return this.color;
            }

            return '';
        }
    }
};
</script>

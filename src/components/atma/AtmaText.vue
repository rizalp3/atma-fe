<template>
    <component
        :is="tag"
        :class="['atma-text', `atma-text--${size}`, `atma-text--${weight}`]"
        :style="{ color }"
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
            default: '#252525'
        }
    }
};
</script>

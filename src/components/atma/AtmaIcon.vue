<template>
    <span
        v-html="composeCodepoints"
        :class="composeClass"
        :style="composeStyle"
    ></span>
</template>

<script>
import Icons from '@/utilities/material-icons.json';

export default {
    name: 'AtmaIcon',

    props: {
        name: {
            type: String,
            default: ''
        },
        fill: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: ''
        }
    },

    computed: {
        composeCodepoints() {
            const icon = Icons[this.name];

            if (icon) {
                return `&#x${icon.toUpperCase()};`;
            }

            return '';
        },
        composeClass() {
            return ['atma-icon', 'material-symbols-rounded'];
        },
        composeStyle() {
            return {
                fontSize: this.size ? `${this.size}px` : ''
            };
        },
        fillValue() {
            return this.fill ? 1 : 0;
        }
    }
};
</script>

<style lang="scss" scoped>
.atma-icon {
    // Prevent Text Selection
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    // Material Symbols Modifier
    font-variation-settings: 'FILL' v-bind(fillValue);
}
</style>

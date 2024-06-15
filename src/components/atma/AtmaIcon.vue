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
        type: {
            type: String,
            default: 'outlined'
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
            const classes = ['atma-icon'];

            if (this.type === 'fill') {
                classes.push('material-icons');
            } else {
                classes.push('material-icons-outlined');
            }

            return classes;
        },
        composeStyle() {
            return {
                fontSize: this.size ? `${this.size}px` : ''
            };
        }
    }
};
</script>
<style lang="scss" scoped>
.atma-icon {
    /* Prevent Text Selection */
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>

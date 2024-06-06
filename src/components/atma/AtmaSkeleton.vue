<template>
    <div class="atma-skeleton" :style="composeStyle"></div>
</template>

<script>
export default {
    name: 'AtmaSkeleton',

    props: {
        width: {
            type: String,
            default: ''
        },
        height: {
            type: String,
            default: ''
        },
        radius: {
            type: String,
            default: '4px'
        }
    },

    computed: {
        composeStyle() {
            return {
                width: this.width,
                height: this.height,
                borderRadius: this.radius
            };
        }
    }
};
</script>

<style lang="scss" scoped>
.atma-skeleton {
    background-color: #dbdbdb;
}
</style>

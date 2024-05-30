<template>
    <div class="explore-header">
        <div class="explore-header__tabs">
            <button
                v-for="key in menu"
                :key="key"
                :class="composeClass(key)"
                @click="handleClickTab(key)"
            >
                {{ key }}
            </button>
        </div>

        <atma-button-icon icon="plus" size="lg" />
    </div>
</template>

<script>
export default {
    name: 'ExploreHeader',

    props: ['modelValue'],

    data() {
        return {
            menu: ['trending', 'yourself']
        };
    },

    methods: {
        composeClass(key) {
            return [
                'explore-header__tab',
                { 'explore-header__tab--active': this.modelValue === key }
            ];
        },

        handleClickTab(key) {
            this.$emit('update:modelValue', key);
        }
    }
};
</script>

<style lang="scss" scoped>
.explore-header {
    display: flex;
    align-items: center;
    gap: 12px;

    &__tabs {
        display: flex;
        align-items: center;
        flex: 1;

        padding: 4px;
        gap: 4px;

        border-radius: 8px;
        background: #f9fafb;
    }

    &__tab {
        flex: 1;
        padding: 8px;

        @include text(14px, 400);
        text-align: center;
        text-transform: capitalize;

        border-radius: 6px;
        color: #c9c9c9;

        cursor: pointer;

        &--active {
            font-weight: 500;
            background: #ffffff;
            color: #6350b2;
        }

        &:hover {
            color: #6350b2;
        }
    }
}
</style>

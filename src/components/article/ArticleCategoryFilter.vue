<template>
    <div class="article-category">
        <template v-for="(data, i) in filter" :key="data.key">
            <atma-button v-bind="composeAttrs(data)" @click="handleClick(i)">
                {{ data.name }}
            </atma-button>
        </template>
    </div>
</template>

<script>
export default {
    name: 'ArticleCategoryFilter',

    data() {
        return {
            filter: [
                {
                    key: 'all',
                    name: 'All Article',
                    active: true
                },
                {
                    key: 'living-hacks',
                    name: 'Living Hacks',
                    active: false
                },
                {
                    key: 'news',
                    name: 'News',
                    active: false
                },
                {
                    key: 'yoga',
                    name: 'Yoga',
                    active: false
                }
            ]
        };
    },

    methods: {
        composeAttrs({ active }) {
            return {
                class: [
                    'article-category__button',
                    { 'article-category__button--active': active }
                ],
                variant: active ? 'primary' : 'custom',
                icon: active ? 'check' : '',
                size: 'sm'
            };
        },

        handleClick(i) {
            const value = !this.filter[i].active;

            const isAllFilter = this.filter[i].key === 'all';

            if (isAllFilter) {
                if (!value) {
                    return;
                }

                this.filter.forEach((data) => {
                    data.active = !value;
                });
            } else {
                this.filter[0].active = false;
            }

            this.filter[i].active = value;

            const isNoFilterActive = this.filter.every((data) => !data.active);

            if (isNoFilterActive) {
                this.filter[0].active = true;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.article-category {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    &__button:not(.article-category__button--active) {
        background: #ffffff;
        border: 1px solid #929292 !important;
        color: #5c5c5c;

        &:hover {
            background: #fff;
            border-color: #6350b2 !important;
            color: #6350b2;
        }
    }
}
</style>

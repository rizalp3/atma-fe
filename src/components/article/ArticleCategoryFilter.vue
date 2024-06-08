<template>
    <div class="article-category">
        <template v-for="(data, i) in categories" :key="data.key">
            <atma-button v-bind="composeAttrs(data)" @click="handleClick(i)">
                {{ data.name }}
            </atma-button>
        </template>
    </div>
</template>

<script>
import { useArticleStore } from '@/stores/article';
import endpoints from '@/services/articles';

const base = [
    {
        key: 'all',
        name: 'All Article',
        active: true
    }
];

export default {
    name: 'ArticleCategoryFilter',

    data() {
        return {
            categories: [...base]
        };
    },

    setup() {
        const store = useArticleStore();
        return { store };
    },

    mounted() {
        this.getCategories();
    },

    methods: {
        async getCategories() {
            const response = await endpoints.getArticleCategories();

            if (response.data) {
                const categories = response.data.map(({ attributes }) => ({
                    key: attributes.key,
                    name: attributes.name,
                    active: false
                }));

                this.categories = [...base, ...categories];
            }
        },

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
            const value = !this.categories[i].active;

            const isAllFilter = this.categories[i].key === 'all';

            if (isAllFilter) {
                if (!value) {
                    return;
                }

                this.categories.forEach((data) => {
                    data.active = !value;
                });
            } else {
                this.categories[0].active = false;
            }

            this.categories[i].active = value;

            const isNoFilterActive = this.categories.every(
                (data) => !data.active
            );

            if (isNoFilterActive) {
                this.categories[0].active = true;
            }

            const activeCategories = this.categories.reduce(
                (filtered, data) => {
                    if (!!data.active) {
                        filtered.push(data.key);
                    }
                    return filtered;
                },
                []
            );

            this.store.setCategory(isAllFilter ? [] : activeCategories);
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

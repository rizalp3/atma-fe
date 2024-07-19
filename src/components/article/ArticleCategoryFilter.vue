<template>
    <div class="article-category">
        <template v-for="(data, i) in categories" :key="data.key">
            <div :class="composeClass(data)" @click="handleClick(i)">
                <atma-icon name="check" size="20" />

                {{ data.name }}
            </div>
        </template>
    </div>
</template>

<script>
import { useArticleStore } from '@/stores/article';
import endpoints from '@/services/articles';

import i18n from '@/locales';

const { t } = i18n.global;

const base = [
    {
        key: 'all',
        name: t('article.category.default'),
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

        composeClass({ active }) {
            return [
                'article-category__item',
                { 'article-category__item--active': active }
            ];
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

            this.store.setCategory(
                isAllFilter || isNoFilterActive ? [] : activeCategories
            );
        }
    }
};
</script>

<style lang="scss" scoped>
.article-category {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    &__item {
        $item: &;

        display: flex;
        align-items: center;
        gap: 4px;

        padding: 5px 12px;
        border-radius: 8px;

        cursor: pointer;
        border: 1px solid var(--system-color-outline);

        color: var(--system-color-outline);

        @include text(14px, 500);

        > * {
            display: none;
            margin-left: -4px;
        }

        &:hover {
            background: var(--system-color-surface-container-low);
        }

        &--active {
            border-color: var(--system-color-primary);
            background: var(--system-color-primary);
            color: var(--system-color-on-primary);

            &:hover {
                background: var(--system-color-primary-variant);
            }

            > * {
                display: unset;
            }
        }
    }
}
</style>

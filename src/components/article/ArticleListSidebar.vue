<template>
    <div class="article-list-sidebar">
        <div class="article-list-sidebar__section-title">Category</div>

        <article-category-filter />

        <!-- Sorting Section -->
        <div class="article-list-sidebar__section-title">Sort By</div>

        <div v-for="data in sortingValues" :key="data.key" class="form-check">
            <input
                v-model="store.sorting"
                class="form-check-input"
                type="radio"
                name="sorting"
                :value="data.key"
                :id="`sorting-${data.key}`"
                @change="handleChangeSorting(data)"
            />

            <label class="form-check-label" :for="`sorting-${data.key}`">
                {{ data.name }}
            </label>
        </div>

        <!-- Time Section -->
        <div class="article-list-sidebar__section-title">Date Posted</div>

        <div
            v-for="data in timeFilterValues"
            :key="data.key"
            class="form-check"
        >
            <input
                v-model="store.timeFilter"
                class="form-check-input"
                type="radio"
                name="date"
                :value="data.key"
                :id="`time-${data.key}`"
                @change="handleChangeTimeFilter(data)"
            />
            <label class="form-check-label" :for="`time-${data.key}`">
                {{ data.name }}
            </label>
        </div>
    </div>
</template>

<script>
import ArticleCategoryFilter from './ArticleCategoryFilter.vue';

import { useArticleStore } from '@/stores/article';

export default {
    name: 'ArticleListSidebar',

    components: {
        ArticleCategoryFilter
    },

    setup() {
        const store = useArticleStore();
        return { store };
    },

    computed: {
        sortingValues() {
            return this.store.baseFilter.sorting;
        },

        timeFilterValues() {
            return this.store.baseFilter.time;
        }
    },

    methods: {
        handleChangeSorting(data) {
            this.store.setSorting(data);
        },

        handleChangeTimeFilter(data) {
            this.store.setTime(data);
        }
    }
};
</script>

<style lang="scss" scoped>
.article-list-sidebar {
    &__section-title {
        @include text(18px, 500);
        margin-bottom: 12px;

        &:not(:first-of-type) {
            margin-top: 32px;
        }
    }

    .form-check {
        color: #5c5c5c;

        &-input {
            &:checked {
                background-color: #6350b2;
                border-color: #6350b2;
            }

            &:focus {
                box-shadow: unset;
            }
        }

        &:not(:first-child) {
            margin-top: 10px;
        }

        > * {
            cursor: pointer;
        }

        label {
            margin-left: 4px;
        }
    }
}
</style>

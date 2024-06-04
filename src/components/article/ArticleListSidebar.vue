<template>
    <div class="article-list-sidebar">
        <div class="article-list-sidebar__section-title">Category</div>

        <article-category-filter />

        <!-- Sorting Section -->
        <div class="article-list-sidebar__section-title">Sort By</div>

        <div class="form-check">
            <input
                class="form-check-input"
                type="radio"
                name="sorting"
                id="sorting1"
                checked
            />
            <label class="form-check-label" for="sorting1"> Trending </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="radio"
                name="sorting"
                id="sorting2"
            />
            <label class="form-check-label" for="sorting2"> Recent </label>
        </div>

        <!-- Time Section -->
        <div class="article-list-sidebar__section-title">Date Posted</div>

        <div class="form-check">
            <input
                class="form-check-input"
                type="radio"
                name="date"
                id="date1"
                checked
            />
            <label class="form-check-label" for="date1">Any Time</label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="radio"
                name="date"
                id="date2"
            />
            <label class="form-check-label" for="date2">Past Week</label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="radio"
                name="date"
                id="date3"
            />
            <label class="form-check-label" for="date3">Past Month</label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="radio"
                name="date"
                id="date4"
            />
            <label class="form-check-label" for="date4">Past Year</label>
        </div>
    </div>
</template>

<script>
import ArticleCategoryFilter from './ArticleCategoryFilter.vue';

export default {
    name: 'ArticleListSidebar',

    components: {
        ArticleCategoryFilter
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

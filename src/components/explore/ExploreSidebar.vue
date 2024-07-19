<template>
    <div class="explore-sidebar">
        <!-- Sorting Section -->
        <div class="explore-sidebar__section-title">
            {{ $t('explore.filter.sort.title') }}
        </div>

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
        <div class="explore-sidebar__section-title">
            {{ $t('explore.filter.time.title') }}
        </div>

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
import { useExploreStore } from '@/stores/explore';

export default {
    name: 'ExploreSidebar',

    setup() {
        const store = useExploreStore();
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
.explore-sidebar {
    padding: 24px;
    border-radius: 16px;

    background: var(--system-color-surface-container-low);

    &__section-title {
        @include text(16px, 600);

        margin-bottom: 12px;

        color: var(--system-color-on-surface);

        &:not(:first-of-type) {
            margin-top: 24px;
        }
    }

    .form-check {
        color: var(--system-color-on-surface-variant);

        &-input {
            --bs-border-color: var(--system-color-outline-variant);
            --bs-form-check-bg: var(--system-color-surface);
            --bs-form-check-bg-image: none;

            &:checked {
                --bs-border-width: 3px;

                width: 15px;
                height: 15px;

                background-color: var(--system-color-primary);
                border-color: var(--system-color-surface);

                outline: var(--system-color-primary) solid 1px;
            }

            &:hover:not(:checked) {
                background-color: var(--system-color-surface-container-high);
            }

            &:focus {
                box-shadow: unset;
            }
        }

        &:not(:first-child) {
            margin-top: 12px;
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

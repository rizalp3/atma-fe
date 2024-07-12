<template>
    <div class="report">
        <div class="report__section-title">
            <atma-icon name="mood" size="24" />
            <div>Moodboard</div>
        </div>

        <Teleport to="#utility-bar" :disabled="isTablet">
            <action-mood-card
                class="mb-3"
                :disabled="isTodayMoodReported"
                @add-success="getMoods"
            />
        </Teleport>

        <moodboard class="mb-4" :data="moods" />

        <div v-if="isTablet" class="report__section-title">
            <atma-icon name="assignment" size="24" />
            <div>Stress Level Test</div>
        </div>

        <Teleport to="#utility-bar" :disabled="isTablet">
            <action-test-card class="mt-3 mb-4" />
        </Teleport>

        <div class="report__section-title">
            <atma-icon name="task" size="24" />
            <div>Latest Test Results</div>
        </div>

        <div class="report__result-wrapper">
            <div
                v-for="(result, i) in results"
                :key="`result-${i}`"
                class="report__result-card"
            >
                <test-result :result="result" />
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

import endpoint from '@/services/report';

import ActionMoodCard from '@/components/report/ActionMoodCard.vue';
import ActionTestCard from '@/components/report/ActionTestCard.vue';
import Moodboard from '@/components/report/Moodboard.vue';
import TestDescription from '@/components/report/TestDescription.vue';
import TestResult from '@/components/report/TestResult.vue';

export default {
    name: 'ReportPage',

    components: {
        ActionMoodCard,
        ActionTestCard,
        Moodboard,
        TestDescription,
        TestResult
    },

    data() {
        return {
            isLoading: false,

            results: [],
            moods: []
        };
    },

    async mounted() {
        this.isLoading = true;

        await this.getTestResults();
        await this.getMoods();

        this.isLoading = false;
    },

    computed: {
        isTodayMoodReported() {
            if (this.moods.length > 0) {
                const date = moment(this.moods[0].date);
                const today = moment();

                return date.isSame(today, 'day');
            }

            return this.isLoading;
        }
    },

    methods: {
        async getTestResults() {
            const response = await endpoint.getTestResults();

            if (response.data) {
                this.results = response.data.map((result) => ({
                    id: result.id,
                    type: result.attributes.type,
                    name: result.attributes.name,
                    value: result.attributes.value,
                    time: result.attributes.createdAt
                }));
            }
        },

        async getMoods() {
            const response = await endpoint.getMoods();

            if (response.data) {
                this.moods = response.data.map((mood) => ({
                    id: mood.id,
                    emoji: mood.attributes.emoji,
                    title: mood.attributes.title,
                    date: mood.attributes.createdAt
                }));
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.report {
    &__section-title {
        margin-bottom: 16px;

        display: flex;
        align-items: center;
        gap: 8px;

        > *:first-child {
            color: var(--system-color-on-surface-variant);
        }

        > *:not(:first-child) {
            @include text(18px, 500);
            color: var(--system-color-on-surface);
        }
    }

    &__result {
        &-wrapper {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        &-card {
            flex: 0 0 auto;

            width: calc(50% - 8px);

            padding: 16px;
            border-radius: 12px;

            background: var(--system-color-surface);

            @media (max-width: 600px) {
                width: 100%;
            }
        }
    }
}
</style>

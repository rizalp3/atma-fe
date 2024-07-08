<template>
    <div class="report">
        <action-mood-card v-if="isTablet" class="mb-3" />

        <div class="report__section-title">
            <atma-icon name="task" size="24" />
            <div>Moodboard</div>
        </div>

        <moodboard class="my-3" />

        <action-test-card v-if="isTablet" class="mb-3" />

        <div class="report__section-title">
            <atma-icon name="task" size="24" />
            <div>Test Results</div>
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
import endpoint from '@/services/report';

import Moodboard from '@/components/Moodboard.vue';

import ActionMoodCard from '@/components/report/ActionMoodCard.vue';
import ActionTestCard from '@/components/report/ActionTestCard.vue';
import TestDescription from '@/components/report/TestDescription.vue';
import TestResult from '@/components/report/TestResult.vue';

export default {
    name: 'ReportPage',

    components: {
        Moodboard,
        ActionMoodCard,
        ActionTestCard,
        TestDescription,
        TestResult
    },

    data() {
        return {
            results: []
        };
    },

    mounted() {
        this.getTestResults();
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

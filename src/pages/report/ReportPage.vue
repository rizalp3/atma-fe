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
            results: [
                {
                    id: 1,
                    type: 'others',
                    name: 'Rantty',
                    time: '2024-07-06T12:00:00.000Z',
                    value: 2
                },
                {
                    id: 2,
                    type: 'self',
                    name: 'Rizal Purnomo',
                    time: '2024-06-25T12:00:00.000Z',
                    value: 3
                },
                {
                    id: 3,
                    type: 'self',
                    name: 'Rizal Purnomo',
                    time: '2024-06-17T12:00:00.000Z',
                    value: 5
                }
            ]
        };
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

<template>
    <div class="home-test">
        <atma-text size="16" weight="600" color-scheme="on-surface">
            Test Result
        </atma-text>

        <div class="home-test__wrapper">
            <test-result
                v-for="(result, i) in results"
                :key="`result-${i}`"
                :result="result"
            />
        </div>
    </div>
</template>

<script>
import endpoint from '@/services/report';

import TestResult from '@/components/report/TestResult.vue';

export default {
    name: 'HomeTestSection',

    components: {
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
            const config = { pagination: { limit: 3 } };

            const response = await endpoint.getTestResults(config);

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
.home-test {
    padding: 18px 20px 22px;
    border-radius: 16px;
    background: var(--system-color-surface);

    > *:first-child {
        margin-bottom: 16px;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}
</style>

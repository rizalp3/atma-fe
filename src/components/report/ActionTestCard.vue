<template>
    <accordion-card
        class="action-test-card"
        name="test"
        :title="$t('report.test.detail.title')"
    >
        <test-description />

        <template #footer>
            <atma-button
                class="action-test-card__button"
                variant="primary"
                icon="assignment"
                radius="12"
                @click="handleRedirect"
            >
                {{ $t('report.test.detail.action') }}
            </atma-button>
        </template>
    </accordion-card>
</template>

<script>
import AccordionCard from '@/components/AccordionCard.vue';
import TestDescription from './TestDescription.vue';

export default {
    name: 'ActionTestCard',

    components: {
        AccordionCard,
        TestDescription
    },

    methods: {
        handleRedirect() {
            this.redirect('/report/test');
        }
    }
};
</script>

<style lang="scss" scoped>
.action-test-card {
    &__button {
        width: 100%;
        margin-top: 12px;
    }
}
</style>

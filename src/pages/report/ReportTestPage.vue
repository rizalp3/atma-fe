<template>
    <div class="test-page">
        <!-- Test Guide -->
        <Teleport to="#utility-bar-fixed" :disabled="isTablet">
            <accordion-card title="Test Guide" name="test-guide">
                <atma-markdown
                    class="test-page__guide"
                    :content="testGuideContent"
                />
            </accordion-card>
        </Teleport>

        <!-- Question List -->
        <div class="test-page__questions">
            <div
                v-for="(item, i) in questions"
                :key="`question-${i}`"
                class="test-item"
            >
                <!-- Question -->
                <div class="test-item__question">
                    {{ `${i + 1}. ${item}` }}
                </div>

                <div class="test-item__answer">
                    <!-- Yes Answer -->
                    <button
                        :class="composeAnswerClass(1, i)"
                        @click="chooseAnswer(1, i)"
                    >
                        <atma-icon :name="composeAnswerIcon(1, i)" size="18" />
                        Yes
                    </button>

                    <!-- No Answer -->
                    <button
                        :class="composeAnswerClass(0, i)"
                        @click="chooseAnswer(0, i)"
                    >
                        <atma-icon :name="composeAnswerIcon(0, i)" size="18" />
                        No
                    </button>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="test-page__footer">
            <Teleport to="#utility-bar-fixed" :disabled="isTablet">
                <div class="test-footer">
                    <div class="test-footer__detail">
                        <atma-icon class="test-footer__icon" name="task-alt" />

                        <div class="test-footer__count">
                            {{ answerCount }} of 20 Answered
                        </div>
                    </div>

                    <atma-button
                        class="test-footer__button"
                        radius="12"
                        :disabled="!isAllAnswered"
                    >
                        Submit Test
                    </atma-button>
                </div>
            </Teleport>
        </div>
    </div>
</template>

<script>
import QuestionList from '@/utilities/srq-test.json';

import AccordionCard from '@/components/AccordionCard.vue';

export default {
    name: 'ReportTestPage',

    components: {
        AccordionCard
    },

    data() {
        return {
            questions: [],
            answers: []
        };
    },

    created() {
        this.resetData();
    },

    computed: {
        isAllAnswered() {
            return this.answerCount >= 20;
        },

        answerCount() {
            return this.answers.filter((answer) => answer > -1).length;
        },

        testGuideContent() {
            return `The following 20 questions are related to certain pains and problems, that may have bothered you in **the last 30 days**.\n\nIf you think the question applies or relate to you in the last 30 days, answer **Yes**.\n\nAnd if the question doesn't applies or relates to you, answer **No**.`;
        }
    },

    methods: {
        resetData() {
            this.questions = [...QuestionList];
            this.answers = Array.from(
                { length: this.questions.length },
                () => -1
            );
        },

        composeAnswerClass(value, index) {
            return {
                'test-item__button': true,
                'test-item__button--active': this.answers[index] === value
            };
        },

        composeAnswerIcon(value, index) {
            return this.answers[index] === value
                ? 'radio-button-checked'
                : 'radio-button-unchecked';
        },

        chooseAnswer(value, index) {
            this.answers[index] = value;
        }
    }
};
</script>

<style lang="scss" scoped>
.test-page {
    &__guide {
        display: flex;
        flex-direction: column;
        gap: 12px;

        @include text(14px, 400);
        color: var(--system-color-outline);
    }

    &__questions {
        margin: 24px 0 112px;

        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    &__footer {
        width: 100%;
        max-width: 600px;

        margin: 0 -16px;
        padding: 16px 0;

        bottom: 0;
        z-index: 100;

        position: fixed;

        display: flex;
        align-items: center;

        pointer-events: none;

        @media (max-width: 1035px) {
            max-width: 576px;
        }

        @media (max-width: 695px) {
            max-width: 100%;
        }
    }
}

.test-item {
    &__question {
        @include text(16px, 500);
        margin-bottom: 12px;
        color: var(--system-color-on-surface);
    }

    &__answer {
        display: flex;
        gap: 12px;
    }

    &__button {
        padding: 6px 16px;

        display: flex;
        align-items: center;
        gap: 8px;

        border-radius: 8px;
        border: 1px solid var(--system-color-outline-variant);

        @include text(16px, 500);
        color: var(--system-color-outline);

        &:hover:not(&--active) {
            background: var(--system-color-surface-container-high);
        }

        &--active {
            color: var(--system-color-primary);
            border-color: var(--system-color-primary);
            background: var(--system-color-secondary-container);
        }
    }
}

.test-footer {
    width: 100%;

    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    border-radius: 12px;

    background: var(--system-color-surface);
    color: var(--system-color-outline);

    &__detail {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    &__count {
        @include text(16px, 500);
        margin-right: auto;
    }

    &__button {
        width: 100%;
    }

    @media (max-width: 1035px) {
        padding: 16px 24px;
        flex-direction: row;
        gap: 12px;

        &__detail {
            margin-right: auto;
        }

        &__button {
            width: unset;
        }
    }

    @media (max-width: 695px) {
        margin-bottom: -16px;
        border-radius: 0;
    }
}
</style>
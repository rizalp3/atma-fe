<template>
    <div class="community-question">
        <div class="community-question__title">Questions</div>

        <div class="community-question__list">
            <question-card
                v-for="(question, i) in questions"
                :key="i"
                :id="i"
                :voted="question.voted"
                :content="question.question"
                :count="question.count"
                @toggle-vote="toggleVote"
            />
        </div>
    </div>

    <div class="bottom-bar__wrapper">
        <div class="bottom-bar">
            <button class="bottom-bar__button">
                <vue-feather type="search" size="24" />
            </button>

            <button class="bottom-bar__button">
                <vue-feather type="share-2" size="24" />
            </button>

            <button class="bottom-bar__button bottom-bar__button--primary">
                <vue-feather type="plus" size="24" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import QuestionCard from './QuestionCard.vue';

const questions = ref([
    {
        voted: false,
        question: 'How can I know if I am getting burned out?',
        count: 37
    },
    {
        voted: true,
        question:
            'What are some tips for overcoming burnout and getting back to work? If you have been out of work due to burnout, it can be difficult to know how to get back in.',
        count: 21
    },
    {
        voted: false,
        question:
            'What are some long-term strategies for preventing burnout from happening again?',
        count: 14
    }
]);

const toggleVote = (target, value) => {
    questions.value[target].voted = value;

    if (value) {
        questions.value[target].count++;
    } else {
        questions.value[target].count--;
    }
};
</script>

<style lang="scss" scoped>
.community-question {
    &__title {
        @include text(18px, 500);
        margin-bottom: 12px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}

.bottom-bar {
    width: 100%;
    max-width: 600px;
    height: 72px;

    bottom: 0;
    z-index: 100;

    padding: 12px 16px;
    margin-left: -1px;
    gap: 4px;

    position: fixed;
    display: flex;
    align-items: center;

    background-color: #fff;
    border: 1px solid #f0f0f0;
    border-bottom: 0;

    &__wrapper {
        height: 72px;
        margin: 24px -16px 0;
    }

    &__button {
        width: 48px;
        height: 48px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 12px;

        color: #929292;

        &:hover {
            background-color: #f8f8f8;
            color: #252525;
        }
    }

    &__button--primary {
        margin-left: auto;
        background-color: #eeeaff;
        color: #59499e;

        &:hover {
            background-color: #e3ddfa;
            color: #59499e;
        }
    }
}
</style>

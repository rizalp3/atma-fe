<template>
    <div class="community-question">
        <div v-if="isTablet" class="community-question__section-title">
            Session Detail
        </div>

        <div
            v-if="isTablet"
            class="community-question__action"
            @click="showSessionDetailModal"
        >
            <img :src="session.image" alt="Session Poster" />

            <div class="community-question__action-content">
                <div>
                    <div class="community-question__action-title">
                        {{ session.title }}
                    </div>
                    <div class="community-question__action-date">
                        {{ formattedSessionDate }}
                    </div>
                </div>

                <vue-feather
                    class="community-question__action-icon"
                    type="chevron-right"
                    size="24"
                />
            </div>
        </div>

        <div class="community-question__section-title">Questions</div>

        <div class="community-question__question-list">
            <question-card
                v-for="(question, i) in questions"
                :key="`question-${i}`"
                :data="question"
                @vote-button-clicked="handleVoteButtonClicked(i)"
            />
        </div>

        <floating-button
            icon="add"
            label="New Question"
            @action="showAddQuestionModal"
        />
    </div>

    <atma-modal v-model="isDetailModalShown" title="Session Detail">
        <session-detail />
    </atma-modal>

    <question-modal v-model="isAddModalShown" @submit="handleAddQuestion" />
</template>

<script>
import moment from 'moment';

import endpoint from '@/services/community';

import FloatingButton from '@/components/FloatingButton.vue';

import SessionDetail from '@/components/community/SessionDetail.vue';
import QuestionCard from '@/components/community/QuestionCard.vue';
import QuestionModal from '@/components/community/QuestionModal.vue';

export default {
    name: 'CommunityQuestionPage',

    components: {
        FloatingButton,
        SessionDetail,
        QuestionCard,
        QuestionModal
    },

    props: {
        post: {
            type: Object,
            default: () => ({})
        }
    },

    data() {
        return {
            isDetailModalShown: false,
            isAddModalShown: false,

            questions: []
        };
    },

    mounted() {
        this.getQuestions();
    },

    computed: {
        session() {
            return this.post?.session || {};
        },

        formattedSessionDate() {
            return this.session.date
                ? moment(this.session.date).format('D MMM YYYY HH:mm')
                : '-';
        }
    },

    methods: {
        async getQuestions() {
            const response = await endpoint.getSessionQuestions(this.post.id);

            if (response.questions) {
                this.questions = response.questions;
            }
        },

        showSessionDetailModal() {
            this.isDetailModalShown = true;
        },

        showAddQuestionModal() {
            this.isAddModalShown = true;
        },

        async handleVoteButtonClicked(index) {
            const question = this.questions[index];
            const target = !question.voted;

            this.questions[index].voted = target;

            if (target) {
                this.questions[index].votesCount++;
                await endpoint.voteSessionQuestion(question.id);
            } else {
                this.questions[index].votesCount--;
                await endpoint.unvoteSessionQuestion(question.id);
            }

            this.getQuestions();
        },

        async handleAddQuestion(question) {
            const payload = {
                data: {
                    post: [this.post.id],
                    question
                }
            };

            const response = await endpoint.addCommunityQuestion(payload);

            if (response.data) {
                await this.getQuestions();

                this.isAddModalShown = false;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.community-question {
    margin-bottom: 88px;

    &__section-title {
        margin-bottom: 12px;

        @include text(18px, 500);
        color: var(--system-color-on-surface);
    }

    &__action {
        margin-bottom: 28px;

        display: flex;
        align-items: center;

        cursor: pointer;

        border-radius: 12px;
        border: 1px solid var(--system-color-surface-container-high);

        background: var(--system-color-surface);

        &:hover {
            background: var(--system-color-surface-container-low);
        }

        img {
            width: 72px;
            height: 88px;

            border-radius: 12px 0px 0px 12px;

            object-fit: cover;
            overflow-clip-margin: unset;

            @media (min-width: 600px) {
                width: 88px;
            }
        }

        &-content {
            flex: 1;

            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 0 20px;
        }

        &-title {
            margin-bottom: 2px;

            overflow: hidden;
            display: -webkit-box;
            line-clamp: 1;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;

            @include text(16px, 600);
            color: var(--system-color-on-surface);
        }

        &-date {
            @include text(14px, 400);
            color: var(--system-color-outline);
        }

        &-icon {
            margin-right: -2px;
            color: var(--system-color-outline);
        }
    }

    &__question-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
}
</style>

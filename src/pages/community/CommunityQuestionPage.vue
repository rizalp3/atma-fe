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

        <div class="community-question__section-title">
            {{ sectionTitle }}
        </div>

        <div class="community-question__question-list">
            <question-card
                v-for="(question, i) in questions"
                :key="`question-${i}`"
                :data="question"
                :status="session.status"
                @vote-button-clicked="handleVoteButtonClicked(i)"
                @delete-button-clicked="showDeleteQuestionModal(i)"
            />
        </div>

        <floating-button
            v-if="isStatus('open')"
            icon="add"
            label="New Question"
            @action="showAddQuestionModal"
        />
    </div>

    <atma-modal v-model="isDetailModalShown" title="Session Detail">
        <session-detail />
    </atma-modal>

    <atma-modal
        v-model="isDeleteModalShown"
        v-bind="deleteModalAttrs"
        @primary-click="handleDeleteQuestion"
        @secondary-click="hideDeleteQuestionModal"
    >
        <atma-text
            class="mb-2"
            size="16"
            weight="500"
            color-scheme="on-surface"
        >
            Are you sure you want to delete this question?
        </atma-text>

        <atma-text size="16" weight="400" color-scheme="outline">
            {{ this.data.question }}
        </atma-text>
    </atma-modal>

    <question-modal
        v-if="isAddModalShown"
        v-model="isAddModalShown"
        @submit="handleAddQuestion"
    />
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

    inject: ['user'],

    data() {
        return {
            isDetailModalShown: false,
            isAddModalShown: false,
            isDeleteModalShown: false,

            questions: [],
            data: {}
        };
    },

    mounted() {
        this.getQuestions();
    },

    watch: {
        isDeleteModalShown: {
            handler(value) {
                if (!value) {
                    this.data = {};
                }
            }
        }
    },

    computed: {
        session() {
            return this.post?.session || {};
        },

        sectionTitle() {
            const title = {
                open: 'Questions',
                closed: 'Questions (Waiting for Answers)',
                answered: 'Questions & Answers'
            };

            return title[this.session.status] || 'Questions';
        },

        deleteModalAttrs() {
            return {
                title: 'Delete Question',
                primaryButton: { title: 'Delete' },
                secondaryButton: { title: 'Cancel' }
            };
        },

        formattedSessionDate() {
            return this.session.date
                ? moment(this.session.date).format('D MMM YYYY HH:mm')
                : '-';
        }
    },

    methods: {
        async getQuestions() {
            const config = {
                populate: {
                    questions: {
                        populate: {
                            votes: {
                                fields: ['id']
                            },
                            author: {
                                fields: ['id']
                            }
                        },
                        sort: ['answer:asc', 'votesCount:desc']
                    }
                }
            };

            const response = await endpoint.getSessionQuestions(
                this.post.id,
                this.isStatus('answered') ? config : {}
            );

            if (response.questions) {
                this.questions = response.questions;
            }
        },

        isStatus(key) {
            return this.session.status === key;
        },

        showSessionDetailModal() {
            this.isDetailModalShown = true;
        },

        showAddQuestionModal() {
            this.isAddModalShown = true;
        },

        showDeleteQuestionModal(index) {
            this.data = this.questions[index];
            this.isDeleteModalShown = true;
        },

        hideDeleteQuestionModal() {
            this.isDeleteModalShown = false;
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
                    author: this.user.id,
                    question
                }
            };

            const response = await endpoint.addCommunityQuestion(payload);

            if (response.data) {
                await this.getQuestions();

                this.isAddModalShown = false;
            }
        },

        async handleDeleteQuestion() {
            const response = await endpoint.deleteQuestion(this.data.id);

            if (response.data) {
                await this.getQuestions();

                this.isDeleteModalShown = false;
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

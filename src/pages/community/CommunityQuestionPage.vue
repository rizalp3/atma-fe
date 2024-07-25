<template>
    <div class="community-question">
        <!-- Session Detail (Tablet & Mobile Only) -->
        <div v-if="isTablet" class="community-question__section-title">
            {{ $t('community.quiz.session.title') }}
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

        <!-- Questions List -->
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

        <!-- FAB for Add Question -->
        <floating-button
            v-if="isStatus('open')"
            icon="add"
            :label="$t('community.quiz.action.add')"
            @action="showAddQuestionModal"
        />
    </div>

    <!-- Session Detail Modal -->
    <atma-modal
        v-model="isDetailModalShown"
        :title="$t('community.quiz.session.title')"
    >
        <session-detail />
    </atma-modal>

    <!-- Delete Question Modal -->
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
            {{ $t('community.quiz.delete.description') }}
        </atma-text>

        <atma-text size="16" weight="400" color-scheme="outline">
            {{ this.data.question }}
        </atma-text>
    </atma-modal>

    <!-- Add Question Modal -->
    <question-modal
        v-if="isAddModalShown"
        v-model="isAddModalShown"
        :loading="isLoading"
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
            isLoading: false,

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
            if (['open', 'closed', 'answered'].includes(this.session.status)) {
                return this.$t(`community.quiz.status.${this.session.status}`);
            }

            return this.$t('community.quiz.status.open');
        },

        deleteModalAttrs() {
            return {
                title: this.$t('community.quiz.delete.title'),
                primaryButton: {
                    title: this.$t('community.quiz.delete.action'),
                    loading: this.isLoading
                },
                secondaryButton: {
                    title: this.$t('community.quiz.delete.cancel'),
                    disabled: this.isLoading
                }
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
            this.isLoading = true;

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

            this.isLoading = false;
        },

        async handleDeleteQuestion() {
            this.isLoading = true;

            const response = await endpoint.deleteQuestion(this.data.id);

            if (response.data) {
                await this.getQuestions();

                this.isDeleteModalShown = false;
            }

            this.isLoading = false;
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

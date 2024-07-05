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
            />
        </div>
    </div>

    <atma-modal v-model="isShowModal" title="Session Detail">
        <session-detail />
    </atma-modal>
</template>

<script>
import moment from 'moment';

import endpoint from '@/services/community';

import SessionDetail from '@/components/community/SessionDetail.vue';
import QuestionCard from '@/components/community/QuestionCard.vue';

export default {
    name: 'CommunityQuestionPage',

    components: {
        SessionDetail,
        QuestionCard
    },

    props: {
        post: {
            type: Object,
            default: () => ({})
        }
    },

    data() {
        return {
            isShowModal: false,
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
            this.isShowModal = true;
        }
    }
};
</script>

<style lang="scss" scoped>
.community-question {
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

<template>
    <div class="question-card">
        <div :class="composeBodyClass">
            <div class="question-card__content">
                {{ data.question }}
            </div>

            <template v-if="isStatus('open')">
                <button
                    v-if="isAuthenticated"
                    :class="composeUpvoteClass"
                    @click="$emit('voteButtonClicked')"
                >
                    <vue-feather
                        class="question-card__icon"
                        type="triangle"
                        size="20"
                    />

                    <div class="question-card__count">
                        {{ data.votesCount }}
                    </div>
                </button>

                <div
                    v-else
                    v-tooltip="$t('community.quiz.action.upvote')"
                    :class="composeUpvoteClass"
                >
                    <vue-feather
                        class="question-card__icon"
                        type="triangle"
                        size="20"
                    />

                    <div class="question-card__count">
                        {{ data.votesCount }}
                    </div>
                </div>
            </template>

            <div v-if="isAnswerShown" class="question-card__answer">
                {{ data.answer }}
            </div>
        </div>

        <div v-if="isFooterShown" class="question-card__footer">
            <button
                v-if="isStatus('open')"
                class="question-card__delete"
                @click="$emit('deleteButtonClicked')"
            >
                <atma-icon name="delete" size="20" />
                {{ $t('community.quiz.action.delete') }}
            </button>

            <div
                v-if="isStatus('answered')"
                class="question-card__not-answered"
            >
                <atma-icon name="close" size="20" />
                {{ $t('community.quiz.action.unanswered') }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuestionCard',

    props: {
        data: {
            type: Object,
            default: () => ({})
        },
        status: {
            type: String,
            default: 'closed'
        }
    },

    inject: ['isAuthenticated'],

    computed: {
        isVoted() {
            return !!this.data.voted;
        },

        isAnswerShown() {
            return this.isStatus('answered') && this.data.answer;
        },

        isFooterShown() {
            return (
                (this.isStatus('open') && this.data.authored) ||
                (this.isStatus('answered') && !this.data.answer)
            );
        },

        composeBodyClass() {
            return {
                'question-card__body': true,
                'question-card__body--closed': this.isStatus('closed'),
                'question-card__body--answered': this.isStatus('answered')
            };
        },

        composeUpvoteClass() {
            return {
                'question-card__upvote': true,
                'question-card__upvote--active': this.isVoted
            };
        }
    },

    methods: {
        isStatus(key) {
            return this.status === key;
        }
    }
};
</script>

<style lang="scss" scoped>
.question-card {
    $this: &;

    &__body {
        padding: 16px 20px;

        display: flex;
        align-items: flex-start;
        gap: 20px;

        border-radius: 12px;
        border: 1px solid var(--system-color-surface-container-high);

        background: var(--system-color-surface);

        &:not(:only-child) {
            border-radius: 12px 12px 0 0;
        }

        &--closed {
            #{$this}__content {
                min-height: unset;
            }
        }

        &--answered {
            flex-direction: column;
            gap: 12px;

            #{$this}__content {
                min-height: unset;

                &:only-child {
                    color: var(--system-color-outline);
                }

                &:not(:only-child) {
                    font-weight: 500;
                }
            }
        }
    }

    &__content {
        min-height: 62px;

        flex: 1;

        display: flex;
        align-items: center;

        @include text(16px);
        color: var(--system-color-on-surface);
    }

    &__upvote {
        padding: 8px 12px;
        gap: 2px;

        display: flex;
        flex-direction: column;
        align-items: center;

        border-radius: 8px;

        cursor: pointer;
    }

    &__icon :deep(svg) {
        stroke: var(--system-color-outline-variant);
    }

    &__count {
        @include text(16px, 500);
        color: var(--system-color-outline-variant);
    }

    &__answer {
        @include text(16px, 400);
        color: var(--system-color-outline);
    }

    &__footer {
        margin-top: -1px;
        padding: 12px 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 0 0 12px 12px;
        border: 1px solid var(--system-color-surface-container-high);

        background: var(--system-color-surface-container-low);
    }

    &__delete {
        @include text(14px, 500);

        display: flex;
        align-items: center;
        gap: 4px;

        color: var(--system-color-error);
    }

    &__not-answered {
        @include text(14px, 500);

        display: flex;
        align-items: center;
        gap: 4px;

        color: var(--system-color-outline);
    }
}

.question-card__upvote {
    &:hover {
        background-color: var(--system-color-surface-container);

        .question-card__icon :deep(svg) {
            stroke: var(--system-color-primary);
        }

        .question-card__count {
            color: var(--system-color-primary);
        }
    }

    &--active {
        .question-card__icon :deep(svg) {
            stroke: var(--system-color-primary);
            fill: var(--system-color-primary);
        }

        .question-card__count {
            color: var(--system-color-primary);
        }
    }
}

@media (max-width: 600px) {
    .question-card {
        &__body {
            padding: 16px 12px 16px 20px;
        }

        &__content {
            min-height: 58px;
        }

        &__count {
            @include text(14px);
        }
    }
}
</style>

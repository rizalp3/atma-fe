<template>
    <div class="question-card">
        <div class="question-card__content">
            {{ data.question }}
        </div>

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
            v-tooltip="'You Need to Login to Upvote'"
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
    </div>
</template>

<script>
export default {
    name: 'QuestionCard',

    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    },

    inject: ['isAuthenticated'],

    computed: {
        isVoted() {
            return !!this.data.voted;
        },
        composeUpvoteClass() {
            return {
                'question-card__upvote': true,
                'question-card__upvote--active': this.isVoted
            };
        }
    }
};
</script>

<style lang="scss" scoped>
.question-card {
    padding: 16px 20px;

    display: flex;
    align-items: flex-start;
    gap: 20px;

    border-radius: 12px;
    border: 1px solid var(--system-color-surface-container-high);

    background: var(--system-color-surface);

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
        padding: 16px 12px 16px 20px;

        &__content {
            min-height: 58px;
            @include text(14px);
        }

        &__count {
            @include text(14px);
        }
    }
}
</style>

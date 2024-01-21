<template>
    <div class="question-card">
        <div class="question-card__content">
            {{ content }}
        </div>

        <div
            :class="{
                'question-card__upvote': true,
                'question-card__upvote--active': !!voted
            }"
            @click="$emit('toggleVote', id, !voted)"
        >
            <vue-feather
                class="question-card__icon"
                type="triangle"
                size="20"
            />

            <div class="question-card__count">
                {{ count }}
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    id: {
        type: Number,
        default: ''
    },
    content: {
        type: String,
        default: ''
    },
    count: {
        type: Number,
        default: ''
    },
    voted: {
        type: Boolean,
        default: false
    }
});
</script>

<style lang="scss" scoped>
.question-card {
    padding: 16px;

    display: flex;
    align-items: flex-start;
    gap: 20px;

    border-radius: 12px;
    border: 1px solid #e3e3e3;

    &__content {
        min-height: 62px;

        flex: 1;

        display: flex;
        align-items: center;

        @include text(16px);
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
        stroke: #c9c9c9;
    }

    &__count {
        @include text(16px);
        color: #c9c9c9;
    }
}

.question-card__upvote {
    &:hover {
        background-color: #f8f8f8;

        .question-card__icon :deep(svg) {
            stroke: #59499e;
        }

        .question-card__count {
            color: #59499e;
        }
    }

    &--active {
        .question-card__icon :deep(svg) {
            stroke: #59499e;
            fill: #59499e;
        }

        .question-card__count {
            color: #59499e;
        }
    }
}

@media (max-width: 600px) {
    .question-card {
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

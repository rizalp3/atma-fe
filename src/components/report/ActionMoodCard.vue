<template>
    <div class="mood-card">
        <div class="mood-card__title">Daily Mood</div>

        <div class="mood-card__subtitle">
            Tell us what you feel throughout the day and track your mood over
            time.
        </div>

        <atma-button
            class="mood-card__button"
            icon="add-reaction"
            variant="primary"
            radius="12"
        >
            Report Today's Mood
        </atma-button>
    </div>
</template>

script
<script>
export default {
    name: 'ActionMoodCard'
};
</script>

<style lang="scss" scoped>
.mood-card {
    padding: 20px;
    border-radius: 12px;
    background: var(--system-color-surface);

    &__title {
        @include text(16px, 500);
        color: var(--system-color-on-surface);
    }

    &__subtitle {
        @include text(14px, 400);
        margin: 8px 0 16px;
        color: var(--system-color-outline);
    }

    &__button {
        width: 100%;
    }
}
</style>

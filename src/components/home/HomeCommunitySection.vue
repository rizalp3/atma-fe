<template>
    <div class="home-community">
        <atma-text size="16" weight="600" color-scheme="on-surface">
            Community
        </atma-text>

        <div class="home-community__item">
            <div class="home-community__detail">
                <atma-text size="14" weight="600">16</atma-text>
                <atma-text size="12" weight="500">Jun</atma-text>
            </div>

            <div class="home-community__title">
                EvoTalks Session: Kick Out The Burnout
            </div>
        </div>

        <div class="home-community__item">
            <div class="home-community__detail">
                <atma-text size="14" weight="600">6</atma-text>
                <atma-text size="12" weight="500">Aug</atma-text>
            </div>

            <div class="home-community__title">
                Podcast Special Edition: Social Connect Ambassador Program
                (SCAP) 2023
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeCommunitySection'
};
</script>

<style lang="scss" scoped>
.home-community {
    display: flex;
    flex-direction: column;

    gap: 16px;
    padding: 18px 20px 20px;
    border-radius: 16px;

    background: var(--system-color-surface);

    &__item {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    &__detail {
        width: 48px;
        height: 48px;
        border-radius: 8px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background: var(--system-color-primary-fixed);
        color: var(--system-color-on-primary-fixed-variant);
    }

    &__title {
        @include text(14px, 500);

        flex: 1;
        overflow: hidden;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        color: var(--system-color-on-surface);
    }
}
</style>

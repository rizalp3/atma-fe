<template>
    <div class="home-feed-loader">
        <div
            v-for="i in isMobile ? 2 : 4"
            :key="`feed-loader-${i}`"
            class="home-feed-loader__item"
        >
            <atma-skeleton class="atma-pulse" width="100%" height="16px" />
            <atma-skeleton class="atma-pulse" width="100%" height="16px" />
            <atma-skeleton class="atma-pulse" width="75%" height="16px" />

            <atma-skeleton class="atma-pulse" width="100px" height="14px" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home-feed-loader {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    &__item {
        flex: 0 0 calc(50% - 8px);

        padding: 20px 20px 24px;

        display: flex;
        flex-direction: column;
        gap: 6px;

        border-radius: 16px;

        background: var(--system-color-surface);

        > *:last-child {
            margin-top: 4px;
        }
    }

    @media (max-width: 600px) {
        &__item {
            flex-basis: 100%;
        }
    }
}
</style>

<template>
    <div class="feed-card-loader">
        <div class="d-flex flex-column gap-2 flex-fill atma-pulse">
            <atma-skeleton width="100%" :height="heightSize" />
            <atma-skeleton width="100%" :height="heightSize" />
            <atma-skeleton width="75%" :height="heightSize" />

            <atma-skeleton class="mt-2" width="100px" height="18px" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeedCardLoader',

    computed: {
        heightSize() {
            return this.isMobile ? '18px' : '20px';
        }
    }
};
</script>

<style lang="scss" scoped>
.feed-card-loader {
    display: flex;
    flex-direction: column;

    padding: 20px 24px;
    border-radius: 12px;

    background: var(--system-color-surface);

    @media (max-width: 600px) {
        padding: 20px;
    }
}
</style>

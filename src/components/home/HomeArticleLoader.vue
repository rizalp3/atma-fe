<template>
    <!-- Mobile -->
    <div v-if="isMobile" class="home-article-loader">
        <div v-for="i in 2" :key="i" class="home-article-loader__item">
            <div class="home-article-loader__item-detail atma-pulse">
                <atma-skeleton width="60px" height="14px" />
                <atma-skeleton width="100%" height="18px" />
                <atma-skeleton width="100%" height="18px" />
                <atma-skeleton width="120px" height="14px" />
            </div>

            <atma-skeleton
                class="atma-pulse"
                width="90px"
                height="90px"
                radius="12px"
            />
        </div>
    </div>

    <!-- Desktop -->
    <div v-else class="home-article-loader">
        <div class="home-article-loader__highlight">
            <atma-skeleton
                class="atma-pulse"
                width="100%"
                height="164px"
                radius="0"
            />

            <div class="home-article-loader__highlight-detail atma-pulse">
                <atma-skeleton width="70px" height="16px" />

                <div class="home-article-loader__highlight-title">
                    <atma-skeleton width="100%" height="22px" />
                    <atma-skeleton width="100%" height="22px" />
                    <atma-skeleton width="75%" height="22px" />
                </div>

                <atma-skeleton width="50%" height="16px" />
            </div>
        </div>

        <div class="home-article-loader__list">
            <div v-for="i in 3" :key="i" class="home-article-loader__item">
                <div class="home-article-loader__item-detail atma-pulse">
                    <atma-skeleton width="100%" height="18px" />
                    <atma-skeleton width="80%" height="18px" />
                    <atma-skeleton width="60px" height="14px" />
                </div>

                <atma-skeleton
                    class="atma-pulse"
                    width="68px"
                    height="68px"
                    radius="12px"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home-article-loader {
    width: 100%;
    display: flex;
    gap: 16px;

    &__highlight {
        flex: 1;
        overflow: hidden;

        border-radius: 16px;

        background: var(--system-color-surface);

        &-detail {
            padding: 20px;
        }

        &-title {
            margin: 8px 0 10px;

            display: flex;
            flex-direction: column;
            gap: 6px;
        }
    }

    &__list {
        flex: 1;

        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__item {
        display: flex;
        align-items: center;

        padding: 16px 18px;
        gap: 16px;
        border-radius: 16px;

        background: var(--system-color-surface);

        &-detail {
            flex: 1;

            display: flex;
            flex-direction: column;
            gap: 4px;

            > *:last-child {
                margin-top: 4px;
            }
        }
    }

    // Mobile Modifier
    @media (max-width: 600px) {
        flex-direction: column;

        &__item-detail {
            gap: 8px;

            > *:last-child {
                margin-top: unset;
            }
        }
    }
}
</style>

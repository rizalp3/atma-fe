<template>
    <home-article-loader v-if="loading" />

    <template v-else>
        <!-- MOBILE -->
        <div v-if="isMobile" class="home-article">
            <div class="home-article__list">
                <div class="home-article__item">
                    <div class="home-article__item-detail">
                        <atma-text
                            size="12"
                            weight="600"
                            color-scheme="primary"
                        >
                            Yoga
                        </atma-text>

                        <div class="home-article__item-title">
                            The Ultimate Guide to Getting Help for Mental Health
                            Problems
                        </div>

                        <div class="home-article__item-subtitle">
                            <div>2 hours ago</div>
                            <div></div>
                            <div>2 min read</div>
                        </div>
                    </div>

                    <img src="https://picsum.photos/id/89/100/100" alt="img" />
                </div>

                <div class="home-article__item">
                    <div class="home-article__item-detail">
                        <atma-text
                            size="12"
                            weight="600"
                            color-scheme="primary"
                        >
                            Living Hacks
                        </atma-text>

                        <div class="home-article__item-title">
                            Tips for Improving Your Mental Health
                        </div>

                        <div class="home-article__item-subtitle">
                            <div>A day ago</div>
                            <div></div>
                            <div>2 min read</div>
                        </div>
                    </div>

                    <img src="https://picsum.photos/id/70/100/100" alt="img" />
                </div>
            </div>
        </div>

        <!-- DESKTOP -->
        <div v-else class="home-article">
            <div class="home-article__content">
                <div class="home-article__highlight">
                    <img src="https://picsum.photos/id/89/300/200" alt="img" />

                    <div class="home-article__highlight-detail">
                        <atma-text
                            size="12"
                            weight="600"
                            color-scheme="primary"
                        >
                            Trending
                        </atma-text>

                        <div class="home-article__highlight-title">
                            The Ultimate Guide to Getting Help for Mental Health
                            Problems
                        </div>

                        <div class="home-article__highlight-subdetail">
                            <div>2 hours ago</div>
                            <div></div>
                            <div>2 min read</div>
                        </div>
                    </div>
                </div>

                <div class="home-article__list">
                    <div class="home-article__item">
                        <div class="home-article__item-detail">
                            <div class="home-article__item-title">
                                Tips for Improving Your Mental Health
                            </div>
                            <div class="home-article__item-subtitle">
                                1 min read
                            </div>
                        </div>

                        <img
                            src="https://picsum.photos/id/70/100/100"
                            alt="img"
                        />
                    </div>

                    <div class="home-article__item">
                        <div class="home-article__item-detail">
                            <div class="home-article__item-title">
                                The Importance of Sleep for Mental Health
                            </div>
                            <div class="home-article__item-subtitle">
                                2 mins read
                            </div>
                        </div>

                        <img
                            src="https://picsum.photos/id/120/100/100"
                            alt="img"
                        />
                    </div>

                    <div class="home-article__item">
                        <div class="home-article__item-detail">
                            <div class="home-article__item-title">
                                Doctor Visit? Don't Forget Your Mental Health!
                            </div>
                            <div class="home-article__item-subtitle">
                                1 min read
                            </div>
                        </div>

                        <img
                            src="https://picsum.photos/id/90/100/100"
                            alt="img"
                        />
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>

<script>
import HomeArticleLoader from './HomeArticleLoader.vue';

export default {
    name: 'HomeArticleSection',

    components: {
        HomeArticleLoader
    },

    props: {
        loading: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
.home-article {
    &__content {
        display: flex;
        gap: 16px;
    }

    &__highlight {
        flex: 1;
        border-radius: 16px;
        background: var(--system-color-surface);

        img {
            width: 100%;
            height: 164px;
            border-radius: 16px 16px 0 0;
            background: var(--system-color-surface-variant);
        }

        &-detail {
            padding: 20px;
        }

        &-title {
            @include text(20px, 600);

            margin: 4px 0 8px;

            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;

            color: var(--system-color-on-surface);
        }

        &-subdetail {
            @include text(12px, 500);
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--system-color-outline);

            > *:nth-child(2) {
                width: 2px;
                height: 2px;
                border-radius: 50%;
                background: var(--system-color-outline);
            }
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
        gap: 8px;
        border-radius: 16px;

        background: var(--system-color-surface);

        img {
            width: 68px;
            height: 68px;
            border-radius: 12px;
            background: var(--system-color-surface-variant);
        }

        &-detail {
            flex: 1;
        }

        &-title {
            @include text(14px, 600);

            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;

            color: var(--system-color-on-surface);
        }

        &-subtitle {
            @include text(12px, 500);
            margin-top: 6px;
            color: var(--system-color-outline);
        }
    }
}

@media (max-width: 600px) {
    .home-article {
        &__item {
            img {
                width: 90px;
                height: 90px;
            }

            &-title {
                @include text(16px, 600);
                margin: 2px 0 6px;
            }

            &-subtitle {
                display: flex;
                align-items: center;
                gap: 8px;

                > *:nth-child(2) {
                    width: 2px;
                    height: 2px;
                    border-radius: 50%;
                    background: var(--system-color-outline);
                }
            }
        }
    }
}
</style>

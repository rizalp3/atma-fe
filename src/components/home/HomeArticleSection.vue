<template>
    <home-article-loader v-if="loading" />

    <!-- MOBILE -->
    <div v-else-if="isMobile" class="home-article">
        <div class="home-article__list">
            <router-link
                v-for="(article, i) in articleListMobile"
                :key="`article-${i}`"
                :to="`/article/${article.id}`"
                class="home-article__item"
            >
                <div class="home-article__item-detail">
                    <atma-text size="12" weight="600" color-scheme="primary">
                        {{ article.category }}
                    </atma-text>

                    <div class="home-article__item-title">
                        {{ article.title }}
                    </div>

                    <div class="home-article__item-subtitle">
                        <div>{{ formatDate(article.createdAt) }}</div>
                        <div></div>
                        <div>{{ article.readingTime }} min read</div>
                    </div>
                </div>

                <img :src="getImage(article.image)" alt="img" />
            </router-link>
        </div>
    </div>

    <!-- DESKTOP -->
    <div v-else class="home-article">
        <div class="home-article__content">
            <!-- Trending Article -->
            <router-link
                :to="`/article/${trending.id}`"
                class="home-article__highlight"
            >
                <img :src="getImage(trending.image)" alt="img" />

                <div class="home-article__highlight-detail">
                    <atma-text size="12" weight="600" color-scheme="primary">
                        Trending
                    </atma-text>

                    <div class="home-article__highlight-title">
                        {{ trending.title }}
                    </div>

                    <div class="home-article__highlight-subdetail">
                        <div>{{ formatDate(trending.createdAt) }}</div>
                        <div></div>
                        <div>{{ trending.readingTime }} min read</div>
                    </div>
                </div>
            </router-link>

            <!-- List Article -->
            <div class="home-article__list">
                <router-link
                    v-for="(article, i) in articleList"
                    :key="`article-${i}`"
                    :to="`/article/${article.id}`"
                    class="home-article__item"
                >
                    <div class="home-article__item-detail">
                        <div class="home-article__item-title">
                            {{ article.title }}
                        </div>
                        <div class="home-article__item-subtitle">
                            {{ article.readingTime }} min read
                        </div>
                    </div>

                    <img :src="getImage(article.image)" alt="img" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

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
        },
        articles: {
            type: Array,
            default: () => []
        }
    },

    computed: {
        trending() {
            return this.articles?.[0] || {};
        },
        articleList() {
            return this.articles.slice(1);
        },
        articleListMobile() {
            return this.articles.slice(0, 2);
        }
    },

    methods: {
        formatDate(date) {
            return moment(date).fromNow() || '-';
        },
        getImage(image) {
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            return baseUrl + image;
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
            object-fit: cover;
            overflow-clip-margin: unset;

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

            > *:first-letter {
                text-transform: uppercase;
            }

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
            object-fit: cover;
            overflow-clip-margin: unset;

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

            > *:first-letter {
                text-transform: uppercase;
            }
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

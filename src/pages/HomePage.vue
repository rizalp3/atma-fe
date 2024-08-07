<template>
    <!-- Article Section -->
    <div class="home-section-header mt-0">
        <atma-icon class="home-section-header__icon" name="article" />

        <div class="home-section-header__title">
            {{ $t('home.article.title') }}
        </div>

        <router-link to="/article" class="home-section-header__action">
            {{ $t('home.article.action') }}
        </router-link>
    </div>

    <home-article-section :loading="isLoadingArticle" :articles="articles" />

    <!-- Feed Section -->
    <div class="home-section-header">
        <atma-icon class="home-section-header__icon" name="pages" />

        <div class="home-section-header__title">
            {{ $t('home.feed.title') }}
        </div>

        <router-link to="/explore" class="home-section-header__action">
            {{ $t('home.feed.action') }}
        </router-link>
    </div>

    <home-feed-section
        :loading="isLoadingFeed"
        :feeds="feeds"
        @like-button-clicked="handleLikeButtonClicked"
    />

    <!-- Personalized Section -->
    <div v-if="isTablet" class="home-section-header">
        <atma-icon class="home-section-header__icon" name="account-circle" />

        <div class="home-section-header__title">
            {{ $t('home.personal.title') }}
        </div>
    </div>

    <Teleport to="#utility-bar" :disabled="isTablet">
        <div class="home-report">
            <template v-if="isAuthenticated">
                <home-community-section />

                <home-test-section />
            </template>

            <brand-banner v-else />
        </div>
    </Teleport>
</template>

<script>
import BrandBanner from '@/components/BrandBanner.vue';

import HomeArticleSection from '@/components/home/HomeArticleSection.vue';
import HomeCommunitySection from '@/components/home/HomeCommunitySection.vue';
import HomeFeedSection from '@/components/home/HomeFeedSection.vue';
import HomeTestSection from '@/components/home/HomeTestSection.vue';

import articleEndpoint from '@/services/articles';
import exploreEndpoint from '@/services/explore';

export default {
    name: 'HomePage',

    components: {
        BrandBanner,
        HomeArticleSection,
        HomeCommunitySection,
        HomeFeedSection,
        HomeTestSection
    },

    inject: ['isAuthenticated'],

    data() {
        return {
            isLoadingArticle: false,
            isLoadingFeed: false,

            articles: [],
            feeds: []
        };
    },

    mounted() {
        this.getArticles();
        this.getFeeds();
    },

    methods: {
        async getArticles() {
            this.isLoadingArticle = true;

            const config = {
                fields: ['title', 'createdAt', 'reading_time'],
                pagination: { start: 0, limit: 4 },
                sort: ['view:desc'],
                populate: {
                    image: { fields: ['formats'] },
                    category: { fields: ['name'] }
                }
            };

            const response = await articleEndpoint.getArticles(config);

            if (response.data) {
                this.articles = response.data.map((item) => {
                    return {
                        id: item.id,
                        title: item.attributes.title,
                        createdAt: item.attributes.createdAt,
                        readingTime: item.attributes.reading_time,
                        image: this.getImageURL(
                            item.attributes.image.data,
                            'small'
                        ),
                        category: item.attributes.category.data.attributes.name
                    };
                });
            }

            this.isLoadingArticle = false;
        },

        async getFeeds() {
            this.isLoadingFeed = true;

            const config = {
                sort: ['likesCount:desc'],
                start: 0,
                limit: 4
            };

            const response = await exploreEndpoint.getFeeds(config);

            if (response) {
                this.feeds = response;
            }

            this.isLoadingFeed = false;
        },

        async handleLikeButtonClicked(index) {
            const feed = this.feeds[index];
            const target = !feed.liked;

            this.feeds[index].liked = target;

            let response;

            if (target) {
                response = await exploreEndpoint.likeFeed(feed.id);
            } else {
                response = await exploreEndpoint.dislikeFeed(feed.id);
            }

            // When Failed, Revert Status
            if (!response.id) {
                this.feeds[index].liked = !target;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.home-section-header {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    &:not(:first-of-type) {
        margin-top: 24px;
    }

    &__icon {
        color: var(--system-color-on-surface-variant);
    }

    &__title {
        @include text(20px, 500);

        margin: 0 auto 0 8px;
        color: var(--system-color-on-surface);
    }

    &__action {
        @include text(14px, 500);
        text-decoration: none;

        display: flex;

        padding: 6px 16px;
        border-radius: 16px;

        background: var(--system-color-secondary-container);
        color: var(--system-color-primary);

        &:hover {
            background: var(--system-color-secondary-container-variant);
        }
    }
}

.home-report {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

@media (max-width: 600px) {
    .home-section-header {
        &__icon {
            display: none;
        }

        &__title {
            @include text(18px, 500);
            margin-left: 0;
        }
    }
}
</style>

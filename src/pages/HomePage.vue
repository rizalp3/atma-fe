<template>
    <div class="home-section-header mt-0">
        <vue-feather
            class="home-section-header__icon"
            type="trending-up"
            size="20"
        />

        <div class="home-section-header__title">Trending Articles</div>

        <router-link to="/article" class="home-section-header__action">
            Read More
        </router-link>
    </div>

    <home-article-section />

    <div class="home-section-header">
        <vue-feather class="home-section-header__icon" type="star" size="20" />

        <div class="home-section-header__title">Top Feeds</div>

        <button class="home-section-header__action">Explore</button>
    </div>

    <home-feed-section />

    <template v-if="isMobile">
        <div class="home-section-header">
            <div class="home-section-header__title">Your Report</div>

            <button class="home-section-header__action">Explore</button>
        </div>

        <home-community-section />

        <brand-banner class="mt-3" />
    </template>
</template>

<script>
import HomeArticleSection from '@/components/home/HomeArticleSection.vue';
import HomeFeedSection from '@/components/home/HomeFeedSection.vue';
import HomeCommunitySection from '@/components/home/HomeCommunitySection.vue';
import BrandBanner from '@/components/BrandBanner.vue';

export default {
    name: 'HomePage',

    components: {
        HomeArticleSection,
        HomeFeedSection,
        HomeCommunitySection,
        BrandBanner
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
        color: var(--system-color-on-surface);
    }

    &__title {
        @include text(20px, 500);

        margin: 0 auto 0 10px;
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
    }
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

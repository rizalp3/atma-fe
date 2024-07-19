<template>
    <article-detail-loader v-if="isLoading" />

    <not-found
        v-else-if="!article.title"
        class="mt-5"
        :title="$t('article.notFound.title')"
        :action="{ text: $t('article.notFound.action'), target: '/article' }"
    />

    <div v-else class="article-detail">
        <h1 class="article-detail__title">
            {{ article.title }}
        </h1>

        <div class="article-detail__info">
            <div class="article-detail__author">
                {{ article.author }}
            </div>
            <div class="article-detail__dot" />
            <div class="article-detail__date">
                {{ formattedDate }}
            </div>
        </div>

        <img
            class="article-detail__image"
            alt="Article Illustration"
            :src="article.image"
        />

        <atma-markdown class="article-detail__text" :content="article.text" />

        <div class="article-detail__separator" />

        <!-- TODO: Recommendation Implementation -->
        <div class="article-detail__recommendation-title">Rekomendasi</div>

        <div v-if="false" class="article-detail__recommendation">
            <router-link
                v-for="(item, i) in recommendation"
                :key="`recommendation-${i}`"
                :to="`/article/${i}`"
            >
                <article-card
                    type="recommendation"
                    :title="item.title"
                    :date="item.date"
                    :time="item.time"
                    :image="item.image"
                />
            </router-link>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import { useRoute } from 'vue-router';

import endpoints from '@/services/articles';

import ArticleDetailLoader from '@/components/article/ArticleDetailLoader.vue';
import ArticleCard from '@/components/ArticleCard.vue';
import NotFound from '@/components/NotFound.vue';

export default {
    name: 'ArticleDetailPage',

    components: {
        ArticleDetailLoader,
        ArticleCard,
        NotFound
    },

    beforeRouteEnter(to) {
        const numberOnly = /^[0-9]*$/;

        if (!numberOnly.test(to.params.id)) {
            return { name: 'NotFound' };
        }
    },

    setup() {
        const route = useRoute();
        return { route };
    },

    data() {
        return {
            isLoading: false,
            article: {}
        };
    },

    async mounted() {
        await this.getArticle();

        const { title } = this.article;

        document.title = title ? `${title} | Atma` : 'Atma';
    },

    computed: {
        formattedDate() {
            return moment(this.article.createdAt).format('D MMMM YYYY HH:mm');
        }
    },

    methods: {
        async getArticle() {
            this.isLoading = true;

            const response = await endpoints.getArticle(this.route.params.id);

            if (response?.data?.attributes) {
                const { id, attributes } = response.data;

                const image = this.getImageURL(attributes.image.data);

                this.article = {
                    ...attributes,
                    image,
                    id
                };
            }

            this.isLoading = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.article-detail {
    &__title {
        @include text(24px, 600);
        color: var(--system-color-on-surface);
    }

    &__info {
        display: flex;
        align-items: center;

        margin: 12px 0 20px;
        gap: 10px;

        > * {
            @include text(14px, 400);
            color: var(--system-color-outline);
        }
    }

    &__dot {
        width: 3px;
        height: 3px;
        border-radius: 1.5px;
        background: var(--system-color-outline);
    }

    &__image {
        width: 100%;
        height: 300px;

        object-fit: cover;
        overflow-clip-margin: unset;

        flex-shrink: 0;
        border-radius: 8px;

        background: var(--system-color-surface-dim);
    }

    &__text {
        display: flex;
        flex-direction: column;
        gap: 12px;

        margin: 24px 0 0;

        color: var(--system-color-on-surface);
    }

    &__separator {
        display: none;

        height: 1px;
        margin: 24px -16px;

        background: var(--system-color-outline-variant);
    }

    &__recommendation {
        overflow: auto;

        display: none;
        align-items: center;
        gap: 16px;

        margin: 0 -16px;
        padding: 0 16px 16px;

        > * {
            text-decoration: none;
            color: var(--system-color-on-surface);
        }

        &-title {
            display: none;
            @include text(18px, 500);
            margin-bottom: 20px;
        }
    }
}

@media (max-width: 600px) {
    .article-detail {
        &__title {
            @include text(20px, 600);
        }

        &__image {
            height: 200px;
        }

        &__text {
            @include text(14px, 400);
            gap: 8px;
        }

        &__separator,
        &__recommendation-title {
            display: block;
        }

        &__recommendation {
            display: flex;
        }
    }
}
</style>

import ArticleCardVue from '@/components/ArticleCard.vue';
<template>
    <div class="article-detail">
        <h1 class="article-detail__title">
            {{ article.title }}
        </h1>

        <div class="article-detail__info">
            <div class="article-detail__author">{{ article.author }}</div>
            <div class="article-detail__dot"></div>
            <div class="article-detail__date">
                {{ formatDate(article.date) }}
            </div>
        </div>

        <img
            class="article-detail__image"
            alt="Article Illustration"
            :src="article.image"
        />

        <p class="article-detail__text">
            {{ article.text }}
        </p>

        <div class="article-detail__separator"></div>

        <div class="article-detail__recommendation-title">Rekomendasi</div>

        <div class="article-detail__recommendation">
            <router-link
                v-for="(item, i) in recommendation"
                :key="`recommendation-${i}`"
                :to="`/article/${i}`"
            >
                <article-card
                    type="recommendation"
                    :title="item.title"
                    :date="formatRecommendationDate(item.date)"
                    :time="item.time"
                    :image="item.image"
                />
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import moment from 'moment';

import ArticleCard from '@/components/ArticleCard.vue';

import item from './articles.json';

const route = useRoute();

const article = item[route.params.id];
const recommendation = item.slice(route.params.id);

const formatDate = (date) => {
    return moment(date).format('D MMMM YYYY HH:mm');
};
const formatRecommendationDate = (date) => {
    return moment(date).format('D MMM');
};

onMounted(() => {
    window.scrollTo(0, 0);
    document.title = `${article.title} | Atma`;
});
</script>

<style lang="scss" scoped>
.article-detail {
    &__title {
        @include text(24px, 600);
    }

    &__info {
        display: flex;
        align-items: center;

        margin: 12px 0 20px;
        gap: 10px;

        > * {
            @include text(14px, 400);
            color: #929292;
        }
    }

    &__dot {
        width: 3px;
        height: 3px;
        border-radius: 1.5px;
        background: #929292;
    }

    &__image {
        width: 100%;
        height: 300px;

        object-fit: cover;

        flex-shrink: 0;
        border-radius: 8px;

        background: #d9d9d9;
    }

    &__text {
        white-space: pre-line;
        margin: 24px 0 0;
    }

    &__separator {
        display: none;

        height: 1px;
        margin: 24px -16px;

        background: #f0f0f0;
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
            color: #252525;
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

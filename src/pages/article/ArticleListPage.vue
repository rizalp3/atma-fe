<template>
    <div class="article-list">
        <router-link
            v-for="(item, i) in items"
            :key="`article-${i}`"
            :to="`/article/${i}`"
        >
            <article-card
                :title="item.title"
                :date="formatDate(item.date)"
                :time="item.time"
                :image="item.image"
            />
        </router-link>
    </div>
</template>

<script setup>
import moment from 'moment';

import items from './articles.json';

import ArticleCard from '@/components/ArticleCard.vue';

const formatDate = (date) => {
    return moment(date).format('D MMM');
};
</script>

<style lang="scss" scoped>
.article-list {
    display: flex;
    flex-direction: column;
    gap: 32px;

    > * {
        text-decoration: none;
        color: #252525;
    }
}
</style>

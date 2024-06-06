<template>
    <div class="article-list">
        <!-- TODO: Make Proper Loading -->
        <div v-if="isLoading">Loading...</div>

        <router-link
            v-for="({ id, attributes }, i) in articles"
            :key="`article-${i}`"
            :to="`/article/${id}`"
        >
            <article-card
                :title="attributes.title"
                :time="attributes.reading_time"
                :date="attributes.createdAt"
                :image="getImage(attributes.image)"
            />
        </router-link>
    </div>
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue';

import { useArticleStore } from '@/stores/article';
import endpoint from '@/services/articles';

export default {
    name: 'ArticleListPage',

    components: {
        ArticleCard
    },

    setup() {
        const store = useArticleStore();
        return { store };
    },

    data() {
        return {
            isLoading: false,
            articles: []
        };
    },

    watch: {
        'store.config': {
            handler() {
                this.getArticles();
            },
            deep: true
        }
    },

    mounted() {
        this.getArticles();
    },

    methods: {
        async getArticles() {
            this.isLoading = true;

            const config = this.store.config;
            const response = await endpoint.getArticles(config);

            if (response.data) {
                this.articles = response.data;
            }

            this.isLoading = false;
        },

        getImage(image) {
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            const url = image.data.attributes.url;

            return baseUrl + url;
        }
    }
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

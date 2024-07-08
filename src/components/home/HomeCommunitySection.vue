<template>
    <div class="home-community">
        <atma-text size="16" weight="600" color-scheme="on-surface">
            Community
        </atma-text>

        <router-link
            v-for="(post, i) in posts"
            :key="`post-${i}`"
            :to="`/community/${post.id}`"
            class="home-community__item"
        >
            <div class="home-community__detail">
                <atma-text size="14" weight="600">{{ post.date }}</atma-text>
                <atma-text size="12" weight="500">{{ post.month }}</atma-text>
            </div>

            <div class="home-community__title">
                {{ post.title }}
            </div>
        </router-link>
    </div>
</template>

<script>
import moment from 'moment';

import endpoint from '@/services/community';

export default {
    name: 'HomeCommunitySection',

    data() {
        return {
            posts: []
        };
    },

    mounted() {
        this.getPosts();
    },

    methods: {
        async getPosts() {
            const config = {
                fields: ['title', 'date'],
                filters: { category: { $ne: 'link' } },
                sort: ['date:desc'],
                pagination: { limit: 3 }
            };

            const response = await endpoint.getCommunityPosts(config);

            if (response.data) {
                this.posts = response.data.map((post) => ({
                    id: post.id,
                    title: post.attributes.title,
                    date: moment(post.attributes.date).format('D'),
                    month: moment(post.attributes.date).format('MMM')
                }));
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.home-community {
    display: flex;
    flex-direction: column;

    gap: 16px;
    padding: 18px 20px 20px;
    border-radius: 16px;

    background: var(--system-color-surface);

    &__item {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    &__detail {
        width: 48px;
        height: 48px;
        border-radius: 8px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background: var(--system-color-primary-fixed);
        color: var(--system-color-on-primary-fixed-variant);
    }

    &__title {
        @include text(14px, 500);

        flex: 1;
        overflow: hidden;

        display: -webkit-box;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        color: var(--system-color-on-surface);
    }
}
</style>

<template>
    <div class="explore">
        <template v-if="isLoading">
            <feed-card-loader v-for="i in 2" :key="i" />
        </template>

        <template v-else>
            <feed-card
                v-for="(feed, i) in feeds"
                :key="`feed-${i}`"
                :time="feed.createdAt"
                :content="feed.content"
                :is-liked="feed.liked"
                @like-button-clicked="handleLikeButtonClicked(i)"
            />
        </template>
    </div>
</template>

<script>
import FeedCard from '@/components/explore/FeedCard.vue';
import FeedCardLoader from '@/components/explore/FeedCardLoader.vue';

import { useExploreStore } from '@/stores/explore';
import endpoint from '@/services/explore';

export default {
    name: 'ExplorePage',

    components: {
        FeedCard,
        FeedCardLoader
    },

    setup() {
        const store = useExploreStore();
        return { store };
    },

    data() {
        return {
            isLoading: false,
            feeds: []
        };
    },

    watch: {
        'store.config': {
            handler() {
                this.getFeeds();
            },
            deep: true
        }
    },

    mounted() {
        this.getFeeds();
    },

    methods: {
        async getFeeds() {
            this.isLoading = true;

            const config = this.store.config;
            const data = await endpoint.getFeeds(config);

            if (data) {
                this.feeds = data;
            }

            this.isLoading = false;
        },

        async handleLikeButtonClicked(index) {
            const feed = this.feeds[index];
            const target = !feed.liked;

            this.feeds[index].liked = target;

            let response;

            if (target) {
                response = await endpoint.likeFeed(feed.id);
            } else {
                response = await endpoint.dislikeFeed(feed.id);
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
.explore {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>

<template>
    <div class="explore">
        <feed-card v-bind="feed" />
    </div>
</template>

<script>
import FeedCard from '@/components/explore/FeedCard.vue';

export default {
    name: 'ExplorePage',

    components: {
        FeedCard
    },

    data() {
        return {
            activeTab: 'trending',
            feed: {
                content: `Feeling really stressed about social media lately. It's like there's constant pressure to present a perfect image of myself and my life, and I can never measure up.`,
                author: 'Penyu Abu',
                time: '2 hours ago',
                isLiked: true
            }
        };
    }
};
</script>

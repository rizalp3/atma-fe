<template>
    <div class="community-detail">
        <h1 class="community-detail__title">
            {{ post.title }}
        </h1>

        <div class="community-detail__info">
            <div class="community-detail__category">{{ post.category }}</div>
            <div class="community-detail__dot"></div>
            <div class="community-detail__date">
                {{ moment(post.date).format('D MMMM YYYY') }}
            </div>
        </div>

        <div class="community-detail__content">
            <community-question v-if="post.category === 'question'" />
            <community-post v-else :images="post.images" :text="post.text" />
        </div>
    </div>
</template>

<script setup>
import moment from 'moment';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useCommunityStore } from '@/stores/community';
import communityPosts from '@/mocks/community.json';

import CommunityPost from '@/components/community/CommunityPost.vue';
import CommunityQuestion from '@/components/community/CommunityQuestion.vue';

const route = useRoute();
const store = useCommunityStore();

const { post } = storeToRefs(store);

if (!post.value) {
    store.$patch({ post: communityPosts[route.params.id] });
}

onMounted(() => {
    window.scrollTo(0, 0);
    document.title = `${post.value.title} | Atma`;
});
</script>

<style lang="scss" scoped>
.community-detail {
    &__title {
        @include text(24px, 600);
    }

    &__info {
        display: flex;
        align-items: center;

        margin: 10px 0 16px;
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
}

@media (max-width: 600px) {
    .community-detail {
        &__title {
            @include text(20px, 600);
        }
    }
}
</style>

<template>
    <template v-if="isLoading"></template>

    <div v-else-if="post.title" class="community-detail">
        <h1 class="community-detail__title">
            {{ post.title }}
        </h1>

        <div class="community-detail__info">
            <div class="community-detail__category">
                {{ formattedCategory }}
            </div>
            <div class="community-detail__dot" />
            <div class="community-detail__date">
                {{ formattedDate }}
            </div>
        </div>

        <!-- Question Post -->
        <community-question-page v-if="isQuestionPost" :post="post" />

        <!-- Other Post -->
        <community-post-page
            v-else
            :images="post.images"
            :content="post.content"
        />
    </div>

    <not-found
        v-else
        class="mt-5"
        :title="$t('community.post.notFound.text')"
        :action="{
            text: $t('community.post.notFound.action'),
            target: '/community'
        }"
    />
</template>

<script>
import moment from 'moment';

import { useCommunityStore } from '@/stores/community';
import endpoint from '@/services/community';

import NotFound from '@/components/NotFound.vue';

import CommunityPostPage from './CommunityPostPage.vue';
import CommunityQuestionPage from './CommunityQuestionPage.vue';

export default {
    name: 'CommunityDetailPage',

    components: {
        NotFound,
        CommunityPostPage,
        CommunityQuestionPage
    },

    beforeRouteEnter(to) {
        const numberOnly = /^[0-9]*$/;

        if (!numberOnly.test(to.params.id)) {
            return { name: 'NotFound' };
        }
    },

    setup() {
        const store = useCommunityStore();
        return { store };
    },

    data() {
        return {
            isLoading: false
        };
    },

    async mounted() {
        await this.getPost();

        const { title } = this.post;

        document.title = title ? `${title} | Atma` : 'Atma';
    },

    unmounted() {
        this.store.post = {};
    },

    computed: {
        post() {
            return this.store.post || {};
        },

        isQuestionPost() {
            return this.post.category === 'question';
        },

        formattedDate() {
            return this.post.date
                ? moment(this.post.date).format('D MMMM YYYY')
                : '-';
        },

        formattedCategory() {
            if (['news', 'question'].includes(this.post.category)) {
                return this.$t(`community.post.category.${this.post.category}`);
            }

            return '-';
        }
    },

    methods: {
        async getPost() {
            this.isLoading = true;

            const response = await endpoint.getCommunityPost(
                this.$route.params.id
            );

            if (response?.data?.attributes) {
                const { category } = response.data.attributes;

                if (['question', 'news'].includes(category)) {
                    this.store.setCommunityPost(response.data);
                }
            }

            this.isLoading = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.community-detail {
    &__title {
        @include text(24px, 600);
        color: var(--system-color-on-surface);
    }

    &__info {
        margin: 10px 0 16px;

        display: flex;
        align-items: center;
        gap: 12px;

        > * {
            @include text(14px, 400);
            color: var(--system-color-outline);
        }
    }

    &__dot {
        width: 2px;
        height: 2px;
        border-radius: 1px;
        background: var(--system-color-outline);
    }

    @media (max-width: 600px) {
        &__title {
            @include text(20px, 600);
        }
    }
}
</style>

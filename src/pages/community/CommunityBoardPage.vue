<template>
    <div class="community-board">
        <!-- Community Detail Action -->
        <div
            v-if="store?.community?.logo"
            class="community-detail-action"
            @click="showCommunityDetail"
        >
            <img
                :src="store.community.logo"
                class="community-detail-action__image"
                alt="Community Logo"
            />

            <div class="community-detail-action__content">
                <div class="community-detail-action__title">
                    {{ store.community.name }}
                </div>
                <div class="community-detail-action__subtitle">
                    {{ store.community.subname }}
                </div>
            </div>

            <vue-feather type="chevron-right" size="24" />
        </div>

        <!-- Timeline Items -->
        <timeline-item
            v-for="(post, i) in posts"
            :key="`timeline-item-${i}`"
            :post="post"
        />
    </div>

    <atma-modal v-model="isShowModal" title="Social Connect">
        <community-detail />
    </atma-modal>
</template>

<script>
import { useCommunityStore } from '@/stores/community';
import endpoint from '@/services/community';

import CommunityDetail from '@/components/community/CommunityDetail.vue';
import TimelineItem from '@/components/community/TimelineItem.vue';

export default {
    name: 'CommunityBoardPage',

    components: {
        CommunityDetail,
        TimelineItem
    },

    setup() {
        const store = useCommunityStore();
        return { store };
    },

    data() {
        return {
            isShowModal: false,

            posts: []
        };
    },

    mounted() {
        this.getCommunityDetail();
        this.getCommunityPosts();
    },

    methods: {
        async getCommunityDetail() {
            const response = await endpoint.getCommunityDetail();

            if (response?.data?.attributes) {
                this.store.setCommunityDetail(response.data);
            }
        },

        async getCommunityPosts() {
            const response = await endpoint.getCommunityPosts();

            if (response.data) {
                this.posts = response.data.map((post) => {
                    let images = [];
                    let session = {};

                    // Preprocess Images Data
                    if (post.attributes?.images?.data) {
                        images = post.attributes.images.data.map((image) => {
                            return this.getImageUrl(image.attributes.url);
                        });
                    }

                    // Preprocess Session Data
                    if (post.attributes?.session?.image) {
                        session = {
                            image: this.getImageUrl(
                                post.attributes.session.image.data.attributes
                                    .url
                            )
                        };
                    }

                    return {
                        id: post.id,
                        category: post.attributes.category,
                        title: post.attributes.title,
                        date: post.attributes.date,
                        summary: post.attributes?.summary || '',
                        link: post.attributes?.link || '',
                        images,
                        session
                    };
                });
            }
        },

        showCommunityDetail() {
            this.isShowModal = true;
        },

        getImageUrl(image) {
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            return baseUrl + image;
        }
    }
};
</script>

<style lang="scss" scoped>
.community-board {
    display: flex;
    flex-direction: column;
}

.community-detail-action {
    width: 100%;

    padding: 16px 24px;
    margin-bottom: 24px;

    display: none;
    align-items: center;

    cursor: pointer;

    border-radius: 12px;
    border: 1px solid var(--system-color-surface-container-high);

    background: var(--system-color-surface);
    color: var(--system-color-on-surface);

    &__image {
        width: 48px;
        height: 48px;
    }

    &__content {
        margin: 0 auto 0 16px;
    }

    &__title {
        @include text(16px, 500);
    }

    &__subtitle {
        @include text(14px, 300);
        color: var(--system-color-outline);
    }

    &:hover {
        background: var(--system-color-surface-container-low);
    }

    @media (max-width: 600px) {
        padding: 16px;
    }

    @media (max-width: 1035px) {
        display: flex;
    }
}
</style>

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

        <!-- Timeline Item -->
        <div
            v-for="(post, i) in posts"
            :key="i"
            class="timeline-item"
            @click="redirectToDetailPage(post, i)"
        >
            <div class="timeline-item__side">
                <div class="timeline-item__box">
                    <div class="timeline-item__date">
                        {{ moment(post.date).date() }}
                    </div>

                    <div class="timeline-item__month">
                        {{ moment(post.date).format('MMM') }}
                    </div>
                </div>

                <div class="timeline-item__line"></div>
            </div>

            <div class="timeline-item__content">
                <h2 class="timeline-item__title">
                    {{ post.title }}
                </h2>

                <!-- Link -->
                <atma-link-preview
                    v-if="post.category === 'link'"
                    :url="post.link"
                />

                <template v-else>
                    <!-- Single Image -->
                    <img
                        v-if="post.images.length === 1"
                        :src="post.images[0]"
                        alt="Community Post"
                        class="timeline-item__image"
                    />

                    <!-- Talk Session -->
                    <img
                        v-else-if="post?.session?.image"
                        :src="post.session.image"
                        alt="Community Post"
                        class="timeline-item__image"
                    />

                    <!-- Gallery -->
                    <div
                        v-else-if="post.images.length > 2"
                        class="timeline-item__gallery"
                    >
                        <div class="gallery-main">
                            <img
                                :src="post.images[0]"
                                alt="Gallery Image Main"
                            />
                        </div>
                        <div class="gallery-side">
                            <img
                                :src="post.images[1]"
                                alt="Gallery Image Secondary"
                                class="gallery-photo"
                            />
                            <img
                                :src="post.images[2]"
                                alt="Gallery Image Ternary"
                                class="gallery-photo"
                            />
                        </div>
                    </div>

                    <div class="timeline-item__description">
                        {{ post.summary }}
                    </div>
                </template>
            </div>
        </div>
    </div>

    <atma-modal v-model="isShowModal" title="Social Connect">
        <community-detail />
    </atma-modal>
</template>

<script>
import { useCommunityStore } from '@/stores/community';
import endpoint from '@/services/community';

import CommunityDetail from '@/components/community/CommunityDetail.vue';

export default {
    name: 'CommunityBoardPage',

    components: { CommunityDetail },

    setup() {
        const store = useCommunityStore();
        return { store };
    },

    data() {
        return {
            isShowModal: false
        };
    },

    mounted() {
        this.getCommunityDetail();
    },

    methods: {
        async getCommunityDetail() {
            const response = await endpoint.getCommunityDetail();

            if (response?.data?.attributes) {
                this.store.setCommunityDetail(response.data);
            }
        },

        showCommunityDetail() {
            this.isShowModal = true;
        }
    }
};
</script>

<!-- <script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

import moment from 'moment';

import { useCommunityStore } from '@/stores/community';
import communityPosts from '@/mocks/community.json';

import Logo from '@/assets/image/community.png';

/* Store Data Initialization */
const store = useCommunityStore();

const { posts } = storeToRefs(store);

store.$patch({ posts: communityPosts });

/* Community Detail Modal */
const isShowModal = ref(false);

const showCommunityDetail = () => {
    isShowModal.value = true;
};

/* Redirect to Detail Page */
const router = useRouter();

const redirectToDetailPage = (post, index) => {
    if (post.category === 'link') {
        return;
    }

    store.$patch({ post: post });

    const target =
        post.category === 'question'
            ? `/community/session/${index}`
            : `/community/${index}`;

    router.push(target);
};
</script> -->

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

.timeline-item {
    display: flex;

    &__side {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__box {
        width: 50px;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-shrink: 0;

        border-radius: 12px;

        background: #eeeaff;
        color: #59499e;
    }

    &__date {
        @include text(16px, 500);
    }

    &__month {
        @include text(12px, 500);
        margin-top: -2px;
    }

    &__line {
        flex: 1;
        width: 2px;
        background: #ebebeb;
    }

    &__content {
        flex: 1;
        margin: 0 0 28px 16px;
        cursor: pointer;
    }

    &__title {
        @include text(18px, 400);
        margin-bottom: 8px;
    }

    &__description {
        @include text(16px, 300);
        color: #929292;
    }

    &__image {
        width: 100%;
        height: 240px;

        object-fit: cover;
        flex-shrink: 0;

        border-radius: 8px;
        margin-bottom: 8px;

        background: #d9d9d9;
    }

    &__gallery {
        display: flex;
        margin-bottom: 8px;

        .gallery-main {
            flex: 1;
            max-width: 100%;
            max-height: 240px;

            > img {
                width: 100%;
                height: 100%;

                object-fit: cover;

                border-radius: 8px;

                background: #d9d9d9;
            }
        }

        .gallery-side {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-left: 8px;
        }

        .gallery-photo {
            width: 148px;
            height: 116px;

            object-fit: cover;
            flex-shrink: 0;

            border-radius: 8px;

            background: #d9d9d9;
        }
    }
}

.timeline-item:last-of-type .timeline-item {
    &__line {
        display: none;
    }
}

@media (max-width: 600px) {
    .timeline-item {
        &__box {
            width: 42px;
            height: 42px;
        }

        &__date {
            @include text(14px);
        }

        &__month {
            @include text(10px);
        }

        &__line {
            width: 1px;
        }

        &__title {
            @include text(16px);
        }

        &__description {
            @include text(14px);
        }

        &__image {
            height: 160px;
        }

        &__gallery {
            .gallery-main {
                max-height: 160px;
            }

            .gallery-photo {
                width: 100px;
                height: 76px;
            }
        }
    }
}
</style>

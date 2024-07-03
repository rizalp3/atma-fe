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

            posts: [
                {
                    id: 3,
                    category: 'news',
                    title: 'Podcast Special Edition: Social Connect Ambassador Program (SCAP) 2023',
                    date: '2024-04-21',
                    summary:
                        'A special edition of the Social Connect Ambassador Program (SCAP 2023) podcast has been released via Spotify!',
                    link: '',
                    images: [],
                    session: {}
                },
                {
                    id: 4,
                    category: 'question',
                    title: 'EvoTalks Session: Kick Out The Burnout',
                    date: '2024-04-06',
                    summary:
                        'EvoTalks is collaborating with Zakaria Anshari, a psychology specialist, to delve deeper into many aspects of burnout and how we should effectively face it!',
                    link: '',
                    images: [],
                    session: {
                        image: 'http://localhost:1337/uploads/session_example_0565a367ce.jpg'
                    }
                },
                {
                    id: 2,
                    category: 'news',
                    title: 'Take a Peek: Kafh x Social Connect Goes to Campus IPB University',
                    date: '2024-03-07',
                    summary:
                        'A total of 475 new students were provided with material on Sexual Violence in the Higher Education Environment delivered by Dr. Ayudya Cenderasari, MKK.',
                    link: '',
                    images: [
                        'http://localhost:1337/uploads/conference_1_4d247bdd4a.jpg',
                        'http://localhost:1337/uploads/conference_2_e2dcbbf320.jpg',
                        'http://localhost:1337/uploads/conference_3_86bfaa8cba.jpg'
                    ],
                    session: {}
                },
                {
                    id: 1,
                    category: 'link',
                    title: 'Read Our Latest Article!',
                    date: '2024-02-14',
                    summary: '',
                    link: 'https://narasi.tv/read/narasi-daily/generasi-stroberi-adalah',
                    images: [],
                    session: {}
                }
            ]
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

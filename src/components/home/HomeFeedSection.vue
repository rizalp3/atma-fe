<template>
    <home-feed-loader v-if="loading" />

    <div v-else class="home-feed">
        <div
            v-for="(feed, i) in isMobile ? feedsMobile : feeds"
            :key="`feed-${i}`"
            class="home-feed__item"
        >
            <div class="home-feed__text">
                {{ feed.content }}
            </div>

            <div class="d-flex align-items-center">
                <div class="home-feed__detail">
                    {{ formatDate(feed.createdAt) }}
                </div>

                <div
                    v-if="isAuthenticated"
                    :class="{
                        'home-feed__action-like': true,
                        'home-feed__action-like--liked': feed.liked
                    }"
                    @click="$emit('likeButtonClicked', i)"
                >
                    <atma-icon name="favorite" size="20" :fill="feed.liked" />
                </div>

                <div
                    v-else
                    v-tooltip="'Login to Your Account First'"
                    class="home-feed__action-like"
                >
                    <atma-icon name="favorite" size="20" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

import HomeFeedLoader from './HomeFeedLoader.vue';

export default {
    name: 'HomeFeedSection',

    components: {
        HomeFeedLoader
    },

    props: {
        loading: {
            type: Boolean,
            default: false
        },
        feeds: {
            type: Array,
            default: () => []
        }
    },

    inject: ['isAuthenticated'],

    computed: {
        feedsMobile() {
            return this.feeds.slice(0, 2);
        }
    },

    methods: {
        formatDate(date) {
            return moment(date).fromNow() || '-';
        }
    }
};
</script>

<style lang="scss" scoped>
.home-feed {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    &__item {
        flex: 0 0 calc(50% - 8px);
        display: flex;
        flex-direction: column;

        padding: 20px 20px 12px;
        gap: 4px;
        border-radius: 16px;

        background: var(--system-color-surface);
    }

    &__text {
        @include text(14px);

        height: 60px;
        overflow: hidden;

        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        color: var(--system-color-on-surface);
    }

    &__detail {
        @include text(12px);
        margin-right: auto;
        color: var(--system-color-outline);

        &:first-letter {
            text-transform: capitalize;
        }
    }

    &__action-like {
        width: 32px;
        height: 32px;

        margin-right: -8px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        cursor: pointer;

        color: var(--system-color-outline);

        > * {
            margin-bottom: -1px;
        }

        &:hover {
            background: var(--system-color-surface-container);
            color: #e30072;
        }

        &--liked {
            color: #e30072;
        }
    }
}

@media (max-width: 600px) {
    .home-feed {
        &__item {
            flex-basis: 100%;
        }

        &__text {
            height: unset;
            overflow: unset;

            display: unset;
            -webkit-line-clamp: unset;
            -webkit-box-orient: unset;

            color: var(--system-color-on-surface);
        }
    }
}
</style>

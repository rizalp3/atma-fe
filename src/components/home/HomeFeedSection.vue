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
                    :class="{
                        'home-feed__action': true,
                        'home-feed__action--like': true,
                        'home-feed__action--liked': feed.liked
                    }"
                >
                    <atma-icon name="favorite" size="20" />
                </div>

                <div class="home-feed__action">
                    <atma-icon name="more-vert" size="20" />
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

    &__action {
        width: 32px;
        height: 32px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        cursor: pointer;

        color: var(--system-color-outline);

        &:hover {
            background: var(--system-color-surface-container);
        }

        &:last-of-type {
            margin-right: -8px;
        }

        &--like {
            > * {
                margin-bottom: -1px;
            }

            &:hover {
                color: #e30072;
            }
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

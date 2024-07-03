<template>
    <div class="feed-card">
        <div class="feed-card__content">
            {{ content }}
        </div>

        <div class="feed-card__detail">
            <div class="feed-card__time">
                {{ formattedTime }}
            </div>

            <template v-if="isAuthenticated">
                <div
                    :class="composeLikeClass"
                    @click="$emit('likeButtonClicked')"
                >
                    <atma-icon name="favorite" size="20" :fill="isLiked" />
                </div>

                <div class="dropdown">
                    <div class="feed-card__action" data-bs-toggle="dropdown">
                        <atma-icon name="more-vert" size="20" />
                    </div>

                    <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                            <a class="dropdown-item" href="#">
                                <atma-icon name="share" size="20" />
                                Share
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                <atma-icon name="flag" size="20" />
                                Report
                            </a>
                        </li>
                    </ul>
                </div>
            </template>

            <template v-else>
                <div
                    v-tooltip="'Login to Your Account First'"
                    class="feed-card__action feed-card__action-like"
                >
                    <atma-icon name="favorite" size="20" />
                </div>

                <div
                    v-tooltip="'Login to Your Account First'"
                    class="feed-card__action"
                >
                    <atma-icon name="more-vert" size="20" />
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'FeedCard',

    props: {
        content: {
            type: String,
            default: ''
        },
        time: {
            type: String,
            default: ''
        },
        isLiked: {
            type: Boolean,
            default: false
        }
    },

    inject: ['isAuthenticated'],

    computed: {
        composeLikeClass() {
            return {
                'feed-card__action': true,
                'feed-card__action-like': true,
                'feed-card__action-like--liked': this.isLiked
            };
        },
        formattedTime() {
            return moment(this.time).fromNow() || '-';
        }
    }
};
</script>

<style lang="scss" scoped>
.feed-card {
    display: flex;
    flex-direction: column;

    padding: 20px 24px;
    border-radius: 12px;

    background: var(--system-color-surface);

    &__content {
        @include text(16px);
        color: var(--system-color-on-surface);
    }

    &__detail {
        @include text(14px);

        margin: 4px 0 -4px;

        display: flex;
        align-items: center;
    }

    &__time {
        margin-right: auto;
        color: var(--system-color-outline);

        &:first-letter {
            text-transform: uppercase;
        }
    }

    &__action {
        width: 32px;
        height: 32px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 8px;
        cursor: pointer;

        color: var(--system-color-outline);

        &:hover {
            background: var(--system-color-surface-container);
        }

        &:last-of-type {
            margin-right: -8px;
        }
    }

    &__action-like {
        > * {
            margin-bottom: -1px;
        }

        &:hover,
        &--liked {
            color: #e30072;
        }
    }

    @media (max-width: 600px) {
        padding: 20px;

        &__content {
            @include text(14px);
        }
    }
}

.dropdown {
    &-menu {
        --bs-dropdown-border-width: 1px;
        --bs-dropdown-border-color: var(--system-color-surface-container);
        --bs-dropdown-bg: var(--system-color-surface);
    }

    &-item {
        display: flex;
        align-items: center;
        gap: 16px;

        cursor: pointer;

        @include text(14px, 500);

        --bs-dropdown-item-padding-y: 8px;
        --bs-dropdown-item-padding-x: 18px;

        --bs-dropdown-link-color: var(--system-color-outline);

        --bs-dropdown-link-hover-bg: var(--system-color-surface-container-low);
        --bs-dropdown-link-hover-color: var(--system-color-on-surface);

        --bs-dropdown-link-active-bg: var(--system-color-surface-container);
        --bs-dropdown-link-active-color: var(--system-color-on-surface);
    }
}
</style>

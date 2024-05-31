<template>
    <div class="feed-card">
        <div class="feed-card__content">
            {{ content }}
        </div>

        <div class="feed-card__detail">
            <div class="feed-card__author">
                {{ author }}
            </div>
            <div class="feed-card__dot" />
            <div class="feed-card__time">
                {{ time }}
            </div>

            <div class="feed-card__action feed-card__like">
                <vue-feather v-bind="likeColor" type="heart" :size="iconSize" />
            </div>

            <div class="dropup">
                <div
                    class="feed-card__action feed-card__more"
                    data-bs-toggle="dropdown"
                >
                    <vue-feather type="more-vertical" :size="iconSize" />
                </div>

                <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                        <a class="dropdown-item" href="#">
                            <vue-feather type="share-2" size="14" />
                            Share
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            <vue-feather type="flag" size="14" />
                            Report
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeedCard',

    props: {
        content: {
            type: String,
            default: ''
        },
        author: {
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

    computed: {
        likeColor() {
            return {
                stroke: this.isLiked ? '#f91880' : '#929292',
                fill: this.isLiked ? '#f91880' : 'none'
            };
        },
        iconSize() {
            return this.isMobile ? '16' : '20';
        }
    }
};
</script>

<style lang="scss" scoped>
.feed-card {
    display: flex;
    flex-direction: column;

    padding: 16px;

    background: #ffffff;
    border: 1px solid #e3e3e3;
    border-radius: 12px;

    &__content {
        @include text(14px);
        color: #252525;
    }

    &__detail {
        @include text(14px);
        margin: 2px 0 -4px;
        display: flex;
        align-items: center;
    }

    &__dot {
        height: 2px;
        width: 2px;
        margin: 0 8px;
        border-radius: 50%;
        background: #929292;
    }

    &__author,
    &__time {
        color: #929292;
    }

    &__action {
        width: 32px;
        height: 32px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 8px;
        cursor: pointer;

        &:hover {
            background: #f8f8f8;
        }
    }

    &__like {
        margin: 0 4px 0 auto;
        color: #929292;
    }

    &__more {
        color: #929292;
    }

    .dropdown-item {
        @include text(14px);
        color: #929292;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;

        &:active {
            background: #f0f1f1;
        }
    }

    @media (min-width: 601px) {
        &__content,
        &__author,
        &__time {
            @include text(16px);
        }

        &__dot {
            height: 3px;
            width: 3px;
            margin: 12px;
        }

        &__action {
            width: 40px;
            height: 40px;
        }
    }
}
</style>

<template>
    <home-feed-loader v-if="loading" />

    <template v-else>
        <div class="home-feed">
            <div class="home-feed__item">
                <div class="home-feed__text">
                    It's important to recognize and take steps to manage stress,
                    such as practicing relaxation techniques, exercising
                    regularly, getting enough sleep, and talking to a trusted
                    friend or mental health professional.
                </div>

                <div class="d-flex align-items-center">
                    <div class="home-feed__detail">2 hours ago</div>

                    <div class="home-feed__action home-feed__action--like">
                        <atma-icon name="favorite" size="20" />
                    </div>

                    <div class="home-feed__action">
                        <atma-icon name="more-vert" size="20" />
                    </div>
                </div>
            </div>

            <div class="home-feed__item">
                <div class="home-feed__text">
                    Feeling really stressed about social media lately
                </div>

                <div class="d-flex align-items-center">
                    <div class="home-feed__detail">2 hours ago</div>

                    <div class="home-feed__action home-feed__action--like">
                        <atma-icon name="favorite" size="20" />
                    </div>

                    <div class="home-feed__action">
                        <atma-icon name="more-vert" size="20" />
                    </div>
                </div>
            </div>

            <template v-if="!isMobile">
                <div class="home-feed__item">
                    <div class="home-feed__text">Yes I tried lol</div>

                    <div class="d-flex align-items-center">
                        <div class="home-feed__detail">2 hours ago</div>

                        <div class="home-feed__action home-feed__action--like">
                            <atma-icon name="favorite" size="20" />
                        </div>

                        <div class="home-feed__action">
                            <atma-icon name="more-vert" size="20" />
                        </div>
                    </div>
                </div>

                <div class="home-feed__item">
                    <div class="home-feed__text">
                        Just tried the new vegan burger at my favorite
                        restaurant and it was amazing! So good to see more
                        plant-based options becoming available. Can't wait to go
                        back and try more of the menu
                    </div>

                    <div class="d-flex align-items-center">
                        <div class="home-feed__detail">2 hours ago</div>

                        <div
                            class="home-feed__action home-feed__action--like home-feed__action--liked"
                        >
                            <atma-icon name="favorite" size="20" fill />
                        </div>

                        <div class="home-feed__action">
                            <atma-icon name="more-vert" size="20" />
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </template>
</template>

<script>
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

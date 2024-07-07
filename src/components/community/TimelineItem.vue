<template>
    <div v-if="post" class="timeline-item">
        <!-- Timeline Section -->
        <div class="timeline-item__side">
            <div class="timeline-item__box">
                <div class="timeline-item__date">
                    {{ formattedDate }}
                </div>

                <div class="timeline-item__month">
                    {{ formattedMonth }}
                </div>
            </div>

            <div class="timeline-item__line" />
        </div>

        <!-- Content Section -->
        <div class="timeline-item__content" @click="handleClickItem">
            <!-- Title -->
            <h2 class="timeline-item__title">
                {{ post.title }}
            </h2>

            <!-- Link Variant -->
            <atma-link-preview v-if="isVariant('link')" :url="post.link" />

            <!-- Question Variant -->
            <img
                v-else-if="isVariant('question')"
                :src="post.session.image"
                class="timeline-item__image"
                alt="Event Poster"
            />

            <!-- News Variant (Single Image) -->
            <img
                v-else-if="post.images.length === 1"
                :src="post.images[0]"
                class="timeline-item__image"
                alt="Community Post"
            />

            <!-- News Variant (Multiple Images) -->
            <div
                v-else-if="post.images.length > 2"
                class="timeline-item__gallery"
            >
                <div class="timeline-item__gallery-main">
                    <img
                        :src="post.images[0]"
                        alt="Community Post Main Image"
                    />
                </div>

                <div class="timeline-item__gallery-side">
                    <img
                        :src="post.images[1]"
                        alt="Community Post Secondary Image"
                    />

                    <img
                        :src="post.images[2]"
                        alt="Community Post Ternary Image"
                    />
                </div>
            </div>

            <!-- Summary -->
            <div v-if="post.summary" class="timeline-item__summary">
                {{ post.summary }}
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'TimelineItem',

    props: {
        post: {
            type: Object,
            required: true
        }
    },

    computed: {
        formattedDate() {
            return moment(this.post.date).format('D');
        },
        formattedMonth() {
            return moment(this.post.date).format('MMM');
        }
    },

    methods: {
        isVariant(key) {
            return this.post.category === key;
        },
        handleClickItem(event) {
            if (this.isVariant('link')) {
                window.open(this.post.link, '_blank');
            } else {
                this.redirect(`/community/${this.post.id}`, event);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.timeline-item {
    display: flex;

    &__side {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__content {
        flex: 1;

        margin-left: 16px;
        margin-bottom: 40px;

        cursor: pointer;
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

        background: var(--system-color-primary);
        color: var(--system-color-on-primary);

        @media (max-width: 600px) {
            width: 46px;
            height: 46px;
        }
    }

    &__date {
        @include text(16px, 500);

        @media (max-width: 600px) {
            @include text(14px, 500);
        }
    }

    &__month {
        @include text(12px, 500);

        margin-top: -2px;

        @media (max-width: 600px) {
            @include text(10px, 500);
        }
    }

    &__line {
        flex: 1;
        width: 2px;
        background: var(--system-color-surface-container-highest);

        @media (max-width: 600px) {
            width: 1px;
        }
    }

    &__title {
        @include text(18px, 500);

        margin-bottom: 8px;

        color: var(--system-color-on-surface);

        @media (max-width: 600px) {
            @include text(16px, 500);
        }
    }

    &__summary {
        @include text(16px, 300);
        color: var(--system-color-outline);

        @media (max-width: 600px) {
            @include text(14px, 300);
        }
    }

    &__image {
        width: 100%;
        height: 240px;

        margin-bottom: 8px;
        border-radius: 8px;

        flex-shrink: 0;
        object-fit: cover;
        overflow-clip-margin: unset;

        background: var(--system-color-surface-container-high);

        @media (max-width: 600px) {
            height: 160px;
        }
    }

    &__gallery {
        display: flex;
        margin-bottom: 8px;

        &-main {
            flex: 1;
            max-width: 100%;
            max-height: 240px;

            > img {
                width: 100%;
                height: 100%;

                border-radius: 8px;

                object-fit: cover;
                overflow-clip-margin: unset;

                background: var(--system-color-surface-container-high);
            }

            @media (max-width: 600px) {
                max-height: 160px;
            }
        }

        &-side {
            display: flex;
            flex-direction: column;
            gap: 8px;

            margin-left: 8px;

            > img {
                width: 148px;
                height: 116px;

                border-radius: 8px;
                flex-shrink: 0;

                object-fit: cover;
                overflow-clip-margin: unset;

                background: var(--system-color-surface-container-high);

                @media (max-width: 600px) {
                    width: 100px;
                    height: 76px;
                }
            }
        }
    }

    // Hide Line for Last Post
    &:last-of-type {
        .timeline-item__line {
            display: none;
        }
    }
}
</style>

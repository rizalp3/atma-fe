<template>
    <div class="community-post">
        <!-- Single Image -->
        <img
            v-if="images.length === 1"
            class="community-post__image"
            alt="Post Illustration"
            :src="images[0]"
        />

        <!-- Multiple Images (Gallery) -->
        <template v-else-if="images.length > 1">
            <swiper
                class="community-post__gallery"
                grab-cursor
                :space-between="8"
                :modules="[PaginationModule]"
                :pagination="{
                    el: '.community-post__gallery-bullet',
                    clickable: true
                }"
            >
                <swiper-slide v-for="(item, i) in images" :key="i">
                    <img
                        class="community-post__image"
                        :alt="`Post Illustration ${i + 1}`"
                        :src="item"
                    />
                </swiper-slide>
            </swiper>

            <div class="community-post__gallery-bullet"></div>
        </template>

        <!-- Text Content -->
        <atma-markdown class="community-post__content" :content="content" />
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination as PaginationModule } from 'swiper/modules';

export default {
    name: 'CommunityPostPage',

    components: {
        Swiper,
        SwiperSlide
    },

    props: {
        images: {
            type: Array,
            default: () => []
        },
        content: {
            type: String,
            default: ''
        }
    },

    data() {
        return {
            PaginationModule
        };
    }
};
</script>

<style lang="scss" scoped>
.community-post {
    &__image {
        width: 100%;
        height: 300px;

        object-fit: cover;

        flex-shrink: 0;
        border-radius: 8px;

        background: var(--system-color-surface-dim);

        @media (max-width: 600px) {
            height: 200px;
        }
    }

    &__gallery {
        margin: 0 -16px;
        padding: 0 16px;

        &-bullet {
            margin: 4px 0 12px;
            text-align: center;

            --swiper-pagination-color: var(--system-color-primary);
            --swiper-pagination-bullet-inactive-opacity: 1;
            --swiper-pagination-bullet-inactive-color: var(
                --system-color-outline-variant
            );
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 12px;

        margin-bottom: 40px;

        color: var(--system-color-on-surface);

        :deep(a) {
            color: var(--system-color-on-surface);
            text-decoration: underline;
        }
    }
}
</style>

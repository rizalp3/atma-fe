<template>
    <div class="community-post">
        <!-- Single Image -->
        <img
            v-if="images.length === 1"
            class="community-post__image"
            alt="Article Illustration"
            :src="images[0]"
        />

        <!-- Multiple Images (Gallery) -->
        <template v-else>
            <swiper
                class="community-post__gallery"
                grab-cursor
                :space-between="8"
                :modules="[Pagination]"
                :pagination="{
                    el: '.community-post__gallery-bullet',
                    clickable: true
                }"
            >
                <swiper-slide v-for="(item, i) in images" :key="i">
                    <img
                        class="community-post__image"
                        :alt="`Article Photo ${i + 1}`"
                        :src="item"
                    />
                </swiper-slide>
            </swiper>

            <div class="community-post__gallery-bullet"></div>
        </template>

        <!-- Text -->
        <p class="community-post__text">
            {{ text }}
        </p>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

const props = defineProps({
    images: {
        type: Array,
        default: () => []
    },
    text: {
        type: String,
        default: ''
    }
});
</script>

<style lang="scss" scoped>
.community-post {
    &__image {
        width: 100%;
        height: 300px;

        object-fit: cover;

        flex-shrink: 0;
        border-radius: 8px;

        background: #d9d9d9;
    }

    &__gallery {
        margin: 0 -16px;
        padding: 0 16px;
    }

    &__gallery-bullet {
        margin: 4px 0 12px;
        text-align: center;
    }

    &__text {
        @include text(16px, 300);
        white-space: pre-line;
    }

    > .community-post__image {
        margin-bottom: 16px;
    }
}

@media (max-width: 600px) {
    .community-post {
        &__image {
            height: 200px;
        }

        &__text {
            @include text(14px, 300);
        }
    }
}
</style>

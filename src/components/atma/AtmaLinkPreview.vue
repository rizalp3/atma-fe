<template>
    <a
        :href="url"
        class="atma-link-preview"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img
            v-if="image"
            :src="image"
            alt="Web Image"
            class="atma-link-preview__image"
        />

        <div class="atma-link-preview__content">
            <div class="atma-link-preview__title">
                {{ title || url }}
            </div>

            <div class="atma-link-preview__host">{{ host }}</div>
        </div>
    </a>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    url: {
        type: String,
        required: true
    }
});

const host = new URL(props.url).hostname;

const title = ref('');
const image = ref('');

onMounted(async () => {
    try {
        const response = await fetch(props.url);
        const data = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');

        title.value = doc.querySelector('title')?.textContent || '';
        image.value =
            doc
                .querySelector('meta[property="og:image"]')
                ?.getAttribute('content') || '';
    } catch {}
});
</script>

<style lang="scss" scoped>
.atma-link-preview {
    width: 100%;
    min-height: 96px;

    display: flex;
    align-items: center;
    overflow: hidden;

    border-radius: 12px;
    text-decoration: none;

    background: #f7f7f7;
    border: 1px solid #e3e3e3;

    &__image {
        width: 96px;
        height: 96px;

        flex-shrink: 0;
        object-fit: cover;

        background: #d9d9d9;
    }

    &__content {
        flex: 1;
        min-width: 0;
        padding: 12px;
    }

    &__title {
        @include text(14px, 400);

        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        margin-bottom: 2px;

        color: #252525;
    }

    &__host {
        @include text(14px, 300);
        color: #929292;
    }
}

@media (max-width: 600px) {
    .atma-link-preview {
        min-height: 80px;

        &__image {
            width: 80px;
            height: 80px;
        }

        &__title {
            @include text(12px, 400);
        }

        &__host {
            @include text(12px, 300);
        }
    }
}
</style>

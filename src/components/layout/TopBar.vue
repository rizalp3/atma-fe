<template>
    <div ref="topBar" class="top-bar">
        <section class="top-bar__wrapper">
            <a v-if="showBackButton" class="top-bar__back" role="button">
                <vue-feather type="arrow-left" size="24" />
            </a>

            <div
                v-show="showTitle"
                :class="{
                    'top-bar__title-wrapper': true,
                    'top-bar__title-wrapper--left': leftAlign
                }"
            >
                <h1
                    :class="{
                        'top-bar__title': true,
                        'top-bar__title--left': leftAlign
                    }"
                >
                    {{ title }}
                </h1>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import VueFeather from 'vue-feather';

const topBar = ref(null);

defineProps({
    title: {
        type: String,
        default: ''
    },
    showBackButton: {
        type: Boolean,
        default: false
    },
    showTitle: {
        type: Boolean,
        default: true
    },
    leftAlign: {
        type: Boolean,
        default: false
    }
});

const scrollListener = () => {
    if (window.scrollY > 0) {
        topBar.value.classList.add('top-bar--scrolled');
    } else {
        topBar.value.classList.remove('top-bar--scrolled');
    }
};

onMounted(() => {
    document.addEventListener('scroll', scrollListener);
});

onUnmounted(() => {
    document.removeEventListener('scroll', scrollListener);
});
</script>

<style lang="scss" scoped>
.top-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    height: 64px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #ffffff;
    transition: all 50ms ease;

    &--scrolled {
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    }

    &__wrapper {
        width: 100%;
        max-width: 500px;

        padding: 0 16px;

        display: flex;
        align-items: center;
        gap: 16px;
    }

    &__back {
        display: flex;
        align-items: center;
        justify-content: center;

        color: #252525;
    }

    &__title-wrapper {
        flex: 1;
        margin-left: -40px;

        &:only-child {
            margin: 0;
        }

        &--left {
            flex: 1 1 100%;
            min-width: 0;
            margin: 0;
        }
    }

    &__title {
        width: 100%;
        margin: 0;

        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        text-align: center;

        &--left {
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>

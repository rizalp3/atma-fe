<template>
    <div class="brand-banner">
        <img class="brand-banner__image" :src="banner" alt="Brand Banner" />

        <div class="brand-banner__detail">
            <div class="brand-banner__title">
                Enjoy all feature by login into your account, it's free!
            </div>

            <div class="brand-banner__subtitle">
                Record your daily mood, or take a stress test. All personalized
                for you.
            </div>

            <button class="brand-banner__action" @click="handleShowLoginModal">
                Login to Your Account
            </button>
        </div>
    </div>
</template>

<script>
import banner from '@/assets/image/brand.jpg';

import { useAuthStore } from '@/stores/auth';

export default {
    name: 'BrandBanner',

    setup() {
        const store = useAuthStore();
        return { store };
    },

    data() {
        return {
            banner
        };
    },

    methods: {
        handleShowLoginModal() {
            this.store.showAuthModal('login');
        }
    }
};
</script>

<style lang="scss" scoped>
.brand-banner {
    border-radius: 16px;
    background: var(--system-color-surface);

    &__image {
        width: 100%;
        height: 132px;

        object-fit: cover;
        overflow-clip-margin: unset;

        border-radius: 16px 16px 0 0;

        background: var(--system-color-surface-variant);
    }

    &__detail {
        padding: 20px;
    }

    &__title {
        @include text(16px, 500);
        color: var(--system-color-on-surface);
    }

    &__subtitle {
        @include text(14px, 400);
        margin-top: 4px;
        color: var(--system-color-outline);
    }

    &__action {
        @include text(14px, 500);
        margin-top: 16px;
        color: var(--system-color-primary);
    }
}
</style>

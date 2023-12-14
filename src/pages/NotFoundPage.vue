<template>
    <div class="not-found">
        <img
            class="not-found__image"
            alt="Not Found Illustration"
            :src="Illustration"
        />

        <h1 class="not-found__title">Page Not Found</h1>

        <p class="not-found__subtitle">
            We Can't Find The Page You're Looking For
        </p>

        <router-link class="not-found__action" to="/">Back to Home</router-link>
    </div>
</template>

<script setup>
import Illustration from '@/assets/image/not-found.svg';
</script>

<style lang="scss" scoped>
.not-found {
    position: fixed;
    inset: 0;

    padding: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center;

    &__image {
        width: 80%;
        max-width: 240px;
    }

    &__title {
        @include text(30px);

        margin: 36px 0 0;
        font-weight: 700;
        color: #252525;
    }

    &__subtitle {
        margin: 8px 0 36px;
        font-weight: 300;
        color: #8a8a8a;
    }

    &__action {
        text-decoration: none;
        color: var(--victoria-600);
    }
}
</style>

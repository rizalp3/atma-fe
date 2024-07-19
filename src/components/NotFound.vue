<template>
    <div class="not-found">
        <img
            class="not-found__image"
            alt="Not Found Illustration"
            :src="Illustration"
        />

        <h1 class="not-found__title">{{ title || $t('notFound.title') }}</h1>

        <p class="not-found__subtitle">
            {{ subtitle || $t('notFound.subtitle') }}
        </p>

        <router-link class="not-found__action" :to="action.target">
            {{ action.text || $t('notFound.action') }}
        </router-link>
    </div>
</template>

<script>
import Illustration from '@/assets/image/not-found.svg';

export default {
    name: 'NotFound',

    props: {
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        },
        action: {
            type: Object,
            default: () => ({
                text: '',
                target: '/'
            })
        }
    },

    data() {
        return {
            Illustration
        };
    }
};
</script>

<style lang="scss" scoped>
.not-found {
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
        @include text(24px, 700);

        margin: 36px 0 0;
        color: var(--system-color-on-surface);
    }

    &__subtitle {
        margin: 8px 0 36px;
        font-weight: 300;
        color: var(--system-color-outline);
    }

    &__action {
        text-decoration: none;
        color: var(--system-color-primary);
    }
}
</style>

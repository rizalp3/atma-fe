<template>
    <div v-if="community.name" class="community-detail">
        <img class="community-detail__logo" :src="community.logo" />

        <template v-if="isSidebarVariant">
            <div class="community-detail__title">{{ community.name }}</div>
            <div class="community-detail__subtitle">
                {{ community.subname }}
            </div>
        </template>

        <div v-if="isSidebarVariant" class="community-detail__section-title">
            {{ $t('community.board.about') }}
        </div>

        <atma-markdown
            class="community-detail__description"
            :content="community.description"
        />

        <div v-if="isSidebarVariant" class="community-detail__section-title">
            {{ $t('community.board.contact') }}
        </div>

        <a
            v-for="(link, i) in community.socialLinks"
            :key="`link-${i}`"
            :href="link.link"
            class="community-detail__social-link"
        >
            <vue-feather :type="link.icon" size="20" />
            <div>{{ link.name }}</div>
            <vue-feather type="chevron-right" size="20" />
        </a>
    </div>
</template>

<script>
import { useCommunityStore } from '@/stores/community';

export default {
    name: 'CommunityDetail',

    props: {
        variant: {
            type: String,
            default: 'main'
        }
    },

    setup() {
        const store = useCommunityStore();
        return { store };
    },

    computed: {
        community() {
            return this.store.community;
        },
        isSidebarVariant() {
            return this.variant === 'sidebar';
        }
    }
};
</script>

<style lang="scss" scoped>
.community-detail {
    width: 100%;

    display: flex;
    flex-direction: column;

    &__logo {
        width: 96px;
        height: 96px;
        align-self: center;
    }

    &__title {
        @include text(18px, 500);

        align-self: center;
        margin-top: 16px;

        color: var(--system-color-on-surface);
    }

    &__subtitle {
        @include text(14px);
        align-self: center;
        color: var(--system-color-outline);
    }

    &__section-title {
        @include text(16px, 500);
        margin-top: 24px;
        color: var(--system-color-on-surface);
    }

    &__description {
        @include text(14px, 400);

        margin-top: 16px;

        display: flex;
        flex-direction: column;
        gap: 12px;

        color: var(--system-color-outline);
    }

    &__social-link {
        padding: 12px 16px;
        margin-top: 12px;

        border-radius: 8px;
        border: 1px solid var(--system-color-outline-variant);

        display: flex;
        align-items: center;
        gap: 12px;

        color: var(--system-color-outline);

        > * {
            @include text(14px, 500);

            &:last-child {
                margin-left: auto;
            }
        }

        &:hover {
            background: var(--system-color-surface-container);
            color: var(--system-color-primary);
        }
    }
}
</style>

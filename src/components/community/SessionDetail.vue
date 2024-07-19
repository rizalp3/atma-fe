<template>
    <div v-if="session.title" class="session-detail">
        <img
            :src="session.image"
            class="session-detail__image"
            alt="Session Poster"
        />

        <div class="session-detail__title">
            {{ session.title }}
        </div>

        <div class="session-detail__date">
            {{ formattedDate }}
        </div>

        <atma-text size="16" weight="500" color-scheme="on-surface">
            {{ $t('community.quiz.session.about') }}
        </atma-text>

        <atma-markdown
            class="session-detail__description"
            :content="session.description"
        />
    </div>
</template>

<script>
import moment from 'moment';

import { useCommunityStore } from '@/stores/community';

export default {
    name: 'SessionDetail',

    setup() {
        const store = useCommunityStore();
        return { store };
    },

    computed: {
        session() {
            return this.store?.post?.session || {};
        },
        formattedDate() {
            return this.session.date
                ? moment(this.session.date).format('D MMMM YYYY HH:mm')
                : '-';
        }
    }
};
</script>

<style lang="scss" scoped>
.session-detail {
    color: var(--system-color-on-surface);

    &__image {
        width: 100%;
        border-radius: 12px;
    }

    &__title {
        margin-top: 24px;
        @include text(18px, 600);
    }

    &__date {
        margin: 4px 0 24px;

        @include text(14px, 400);
        color: var(--system-color-outline);
    }

    &__description {
        margin-top: 8px;

        display: flex;
        flex-direction: column;
        gap: 8px;

        @include text(14px, 400);
        color: var(--system-color-outline);
    }
}
</style>

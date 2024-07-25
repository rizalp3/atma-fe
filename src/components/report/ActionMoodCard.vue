<template>
    <div v-bind="$attrs" class="mood-card">
        <div class="mood-card__title">
            {{ $t('report.mood.card.title') }}
        </div>

        <div class="mood-card__subtitle">
            {{ $t('report.mood.card.subtitle') }}
        </div>

        <atma-button
            v-bind="composeActionAttrs"
            class="mood-card__button"
            @click="showModal"
        >
            {{ composeActionText }}
        </atma-button>
    </div>

    <atma-modal
        v-model="isShowModal"
        v-bind="composeModalAttrs"
        @primary-click="handleAddMood"
    >
        <div class="mood-modal">
            <div
                v-for="(mood, i) in MoodList"
                :key="i"
                class="mood-modal__category"
            >
                <!-- Category Name -->
                <div class="mood-modal__title">
                    {{ composeMoodName(mood.name) }}
                </div>

                <!-- Emoji List -->
                <div class="mood-modal__wrapper">
                    <button
                        v-for="(emoji, j) in mood.emoji"
                        :key="`emoji-${j}`"
                        :class="composeItemClass(mood.name, j)"
                        @click="selectMood(mood.name, j)"
                    >
                        <div class="mood-modal__emoji">{{ emoji }}</div>
                    </button>
                </div>
            </div>
        </div>
    </atma-modal>
</template>

<script>
import MoodList from '@/utilities/mood-list.json';
import endpoint from '@/services/report';

export default {
    name: 'ActionMoodCard',

    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            isShowModal: false,
            isFetching: false,

            MoodList,

            active: {
                category: '',
                emoji: 0
            }
        };
    },

    computed: {
        composeActionAttrs() {
            return {
                loading: this.loading,
                disabled: !this.loading && this.disabled,
                icon: this.disabled ? 'check-circle' : 'add-reaction',
                radius: '12',
                variant: 'primary'
            };
        },

        composeActionText() {
            return this.disabled
                ? this.$t('report.mood.card.disabled')
                : this.$t('report.mood.card.action');
        },

        composeModalAttrs() {
            return {
                title: this.$t('report.mood.modal.title'),
                primaryButton: {
                    title: this.$t('report.mood.modal.action'),
                    disabled: !this.active.category,
                    loading: this.isFetching
                }
            };
        }
    },

    methods: {
        composeItemClass(category, index) {
            const isActive =
                category === this.active.category &&
                index === this.active.emoji;

            return {
                'mood-modal__item': true,
                'mood-modal__item--active': isActive
            };
        },

        composeMoodName(key) {
            return this.$t(`report.mood.modal.category.${key}`);
        },

        showModal() {
            this.active = { category: '', emoji: 0 };
            this.isShowModal = true;
        },

        selectMood(category, index) {
            this.active = { category, emoji: index };
        },

        async handleAddMood() {
            this.isFetching = true;

            const category = this.MoodList.find(
                ({ name }) => name === this.active.category
            );

            const payload = {
                data: {
                    emoji: category.emoji[this.active.emoji],
                    title: this.active.category
                }
            };

            const response = await endpoint.addMood(payload);

            if (response?.data?.id) {
                this.$emit('addSuccess');
                this.isShowModal = false;
            }

            this.isFetching = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.mood-card {
    padding: 20px;
    border-radius: 12px;
    background: var(--system-color-surface);

    &__title {
        @include text(16px, 500);
        color: var(--system-color-on-surface);
    }

    &__subtitle {
        @include text(14px, 400);
        margin: 8px 0 16px;
        color: var(--system-color-outline);
    }

    &__button {
        width: 100%;
    }
}

.mood-modal {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
        gap: 12px;
    }

    &__title {
        @include text(16px, 500);
        margin-bottom: 8px;
        color: var(--system-color-outline);
    }

    &__item {
        height: 60px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 4px;
        border-radius: 8px;

        border: 1px solid var(--system-color-surface-container-high);

        &:hover:not(&--active) {
            background: var(--system-color-surface-container-low);
        }

        &--active {
            border-color: var(--system-color-primary);
            background: var(--system-color-secondary-container);
        }
    }

    &__emoji {
        @include text(24px, 500);
    }
}
</style>

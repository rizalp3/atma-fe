<template>
    <VueFinalModal
        class="atma-modal"
        content-class="atma-modal__wrapper"
        overlay-class="atma-modal__overlay"
        :click-to-close="closable"
        :esc-to-close="closable"
    >
        <div class="atma-modal__header">
            <div class="atma-modal__title">
                {{ title }}
            </div>

            <button
                v-if="closable"
                class="atma-modal__close-button"
                @click="closeModal"
            >
                <vue-feather type="x" size="20" />
            </button>
        </div>

        <div class="atma-modal__content">
            <slot></slot>
        </div>

        <div v-if="isFooterShown" class="atma-modal__footer">
            <atma-button
                v-if="secondaryButton.title"
                class="atma-modal__button"
                variant="secondary"
                radius="12"
                :disabled="secondaryButton.disabled"
                :icon="secondaryButton.icon"
                @click="$emit('secondaryClick')"
            >
                {{ secondaryButton.title }}
            </atma-button>

            <atma-button
                v-if="primaryButton.title"
                class="atma-modal__button"
                variant="primary"
                radius="12"
                :disabled="primaryButton.disabled"
                :icon="primaryButton.icon"
                @click="$emit('primaryClick')"
            >
                {{ primaryButton.title }}
            </atma-button>
        </div>
    </VueFinalModal>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal';

export default {
    name: 'AtmaModal',

    components: {
        VueFinalModal
    },

    props: {
        title: {
            type: String,
            default: ''
        },
        primaryButton: {
            type: Object,
            default: () => ({})
        },
        secondaryButton: {
            type: Object,
            default: () => ({})
        },
        closable: {
            type: Boolean,
            default: true
        }
    },

    computed: {
        isFooterShown() {
            return this.primaryButton.title || this.secondaryButton.title;
        }
    },

    methods: {
        closeModal() {
            this.$emit('update:modelValue', false);
        }
    }
};
</script>

<style lang="scss">
.atma-modal {
    display: flex;
    align-items: center;
    justify-content: center;

    &__overlay {
        background: var(--system-color-modal-overlay);
    }

    &__wrapper {
        width: 90%;
        max-width: 500px;
        max-height: 90%;

        border-radius: 16px;

        display: flex;
        flex-direction: column;

        background: var(--system-color-surface);
    }

    &__header {
        padding: 16px 20px;

        display: flex;
        align-items: center;
        gap: 20px;

        border-radius: 16px 16px 0 0;
        border-bottom: 1px solid var(--system-color-surface-container-high);
    }

    &__title {
        @include text(18px, 500);
        color: var(--system-color-on-surface);
    }

    &__close-button {
        padding: 8px;
        margin-left: auto;

        display: flex;
        cursor: pointer;

        color: var(--system-color-outline);

        &:hover {
            border-radius: 8px;
            background: var(--system-color-surface-container);
        }
    }

    &__content {
        padding: 20px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    &__footer {
        padding: 16px 20px;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 16px;

        border-top: 1px solid var(--system-color-surface-container-high);

        @media (max-width: 600px) {
            justify-content: center;
        }
    }

    &__button {
        min-width: 120px;

        @media (max-width: 600px) {
            min-width: unset;
            flex: 1;
        }
    }
}
</style>

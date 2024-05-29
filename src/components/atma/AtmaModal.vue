<template>
    <VueFinalModal class="atma-modal" content-class="atma-modal__wrapper">
        <div class="atma-modal__header">
            <div class="atma-modal__title">
                {{ title }}
            </div>

            <button class="atma-modal__close-button" @click="closeModal">
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
                :icon="secondaryButton.icon"
            >
                {{ secondaryButton.title }}
            </atma-button>

            <atma-button
                v-if="primaryButton.title"
                class="atma-modal__button"
                variant="primary"
                :icon="primaryButton.icon"
            >
                {{ primaryButton.title }}
            </atma-button>
        </div>
    </VueFinalModal>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal';

import AtmaButton from './AtmaButton.vue';

export default {
    name: 'AtmaModal',

    components: {
        VueFinalModal,
        AtmaButton
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

    &__wrapper {
        width: 90%;
        max-width: 500px;
        max-height: 90%;

        border-radius: 16px;

        display: flex;
        flex-direction: column;

        background: #fff;
    }

    &__header {
        padding: 16px 20px;

        display: flex;
        align-items: center;
        gap: 20px;

        border-radius: 16px 16px 0 0;
        border-bottom: 1px solid #eaecef;
    }

    &__title {
        @include text(18px, 500);
    }

    &__close-button {
        padding: 8px;
        margin-left: auto;

        display: flex;
        cursor: pointer;

        color: #9caab1;

        &:hover {
            border-radius: 8px;
            background: #f7f9fd;
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

        border-top: 1px solid #eaecef;

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

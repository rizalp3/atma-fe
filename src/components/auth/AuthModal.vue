<template>
    <VueFinalModal
        v-model="store.isAuthModalShown"
        class="auth-modal"
        content-class="auth-modal__wrapper"
        overlay-class="auth-modal__overlay"
    >
        <!-- Header -->
        <div class="auth-modal__header">
            <button class="auth-modal__close-button" @click="closeModal">
                <atma-icon name="close" />
            </button>
        </div>

        <!-- Register -->
        <register-section
            v-if="isRegisterSectionShown"
            class="auth-modal__content"
        />

        <!-- Login -->
        <login-section v-else class="auth-modal__content" />
    </VueFinalModal>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal';

import { useAuthStore } from '@/stores/auth';

import LoginSection from './Login.vue';
import RegisterSection from './Register.vue';

export default {
    name: 'AuthModal',

    components: {
        VueFinalModal,
        LoginSection,
        RegisterSection
    },

    setup() {
        const store = useAuthStore();
        return { store };
    },

    computed: {
        isRegisterSectionShown() {
            return this.store.sectionShown === 'register';
        }
    },

    methods: {
        closeModal() {
            this.store.hideAuthModal();
        }
    }
};
</script>

<style lang="scss">
.auth-modal {
    display: flex;
    align-items: center;
    justify-content: center;

    &__overlay {
        background: var(--system-color-modal-overlay);
    }

    &__wrapper {
        width: 90%;
        max-width: 360px;
        max-height: 90%;

        border-radius: 16px;

        display: flex;
        flex-direction: column;
        overflow: hidden;

        background: var(--system-color-surface);
    }

    &__header {
        padding: 16px 16px 8px;

        display: flex;
        justify-content: flex-end;
    }

    &__close-button {
        padding: 8px;

        display: flex;
        cursor: pointer;

        color: var(--system-color-outline);

        &:hover {
            border-radius: 8px;
            background: var(--system-color-surface-container-low);
        }
    }

    &__content {
        padding: 0 24px 36px;
        overflow-y: auto;
    }
}
</style>

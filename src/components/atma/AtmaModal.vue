<template>
    <section v-if="modelValue" class="atma-modal">
        <div
            class="atma-modal__backdrop"
            @click="emit('update:modelValue', false)"
        />

        <div ref="modal" class="atma-modal__wrapper">
            <div class="atma-modal__header">
                <div
                    ref="dragger"
                    class="atma-modal__dragger"
                    @mousedown="dragStart"
                    @touchstart="dragStart"
                >
                    <span></span>
                </div>
            </div>

            <div class="atma-modal__title">{{ title }}</div>

            <div class="atma-modal__content">
                <slot></slot>
            </div>

            <div class="atma-modal__footer">
                <atma-button
                    v-if="props.secondaryButton.title"
                    class="atma-modal__button"
                    variant="secondary"
                    :title="props.secondaryButton.title"
                    :icon="props.primaryButton.icon"
                />
                <atma-button
                    v-if="props.primaryButton.title"
                    class="atma-modal__button"
                    variant="primary"
                    :title="props.primaryButton.title"
                    :icon="props.primaryButton.icon"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, watch } from 'vue';

import AtmaButton from './AtmaButton.vue';

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
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
});

const emit = defineEmits(['update:modelValue']);

// Component Refs
const modal = ref(null);
const dragger = ref(null);

// Drag Event Listener
watch(
    () => props.modelValue,
    (value) => {
        const action = value ? 'addEventListener' : 'removeEventListener';

        document.body[action]('mousemove', dragging);
        document.body[action]('touchmove', dragging);
        document.body[action]('mouseup', dragEnd);
        document.body[action]('touchend', dragEnd);

        document.body.style.overflow = value ? 'hidden' : '';
    }
);

// Drag Data
const isDragging = ref(false);
const initialHeight = ref(0);
const initialY = ref(0);

// Drag Utility
const toggleGrabbingStyle = (value = true) => {
    dragger.value.style.cursor = value ? 'grabbing' : '';
    document.body.style.cursor = value ? 'grabbing' : '';
    modal.value.style.borderRadius = value ? '28px 28px 0 0' : '';
};
const setModalHeight = (height) => {
    modal.value.style.height = height;
};

// Drag Method
function dragStart(e) {
    isDragging.value = true;

    initialY.value = e.pageY || e.touches?.[0].pageY;
    initialHeight.value = parseInt(modal.value.offsetHeight);

    toggleGrabbingStyle();
}
function dragging(e) {
    if (isDragging.value) {
        const delta = initialY.value - (e.pageY || e.touches?.[0].pageY);
        const newHeight = initialHeight.value + delta;

        setModalHeight(`${newHeight}px`);
    }
}
function dragEnd() {
    if (!isDragging.value) {
        return;
    }

    isDragging.value = false;

    toggleGrabbingStyle(false);

    const currentHeight = parseInt(modal.value.offsetHeight);

    if (currentHeight < 100) {
        emit('update:modelValue', false);
        return;
    }

    setModalHeight('');

    if (currentHeight > initialHeight.value + 150) {
        modal.value.classList.add('atma-modal__wrapper--fullscreen');
    } else {
        modal.value.classList.remove('atma-modal__wrapper--fullscreen');
    }
}
</script>

<style lang="scss" scoped>
.atma-modal {
    position: fixed;
    inset: 0;
    z-index: 1070;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    color: #252525;

    &__backdrop {
        position: fixed;
        inset: 0;
        z-index: 1071;

        background: rgb(33, 37, 41, 0.5);
    }

    &__wrapper {
        width: 100%;
        max-width: 500px;

        z-index: 1072;
        padding: 16px;

        display: flex;
        flex-direction: column;

        border-radius: 28px 28px 0 0;
        background: white;

        &--fullscreen {
            height: 100%;
            border-radius: 0;
        }
    }

    &__header {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__dragger {
        padding: 16px;
        margin-top: -16px;

        cursor: grab;

        span {
            display: block;
            width: 32px;
            height: 4px;
            border-radius: 2px;
            background: #79747e;
            opacity: 0.4;
        }
    }

    &__title {
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        text-align: center;
    }

    &__content {
        margin: 16px 0;
        flex: 1;
    }

    &__footer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }

    &__button {
        flex: 1;
    }
}
</style>

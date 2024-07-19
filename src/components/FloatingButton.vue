<template>
    <div class="floating-button__wrapper">
        <button
            v-if="isAuthenticated"
            class="floating-button"
            @click="$emit('action')"
        >
            <atma-icon :name="icon" size="24" />

            <atma-text v-if="!compact" size="14" weight="500">
                {{ label }}
            </atma-text>
        </button>

        <div
            v-else
            v-tooltip="tooltip || $t('general.authenticated')"
            class="floating-button"
        >
            <atma-icon :name="icon" size="24" />

            <atma-text v-if="!compact" size="14" weight="500">
                {{ label }}
            </atma-text>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FloatingButton',

    inject: ['isAuthenticated'],

    props: {
        icon: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        tooltip: {
            type: String,
            default: ''
        },
        compact: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
.floating-button {
    padding: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 16px;
    gap: 8px;

    pointer-events: all;

    background: var(--system-color-primary);
    color: var(--system-color-on-primary);

    &:hover {
        background: var(--system-color-primary-variant);
    }
}

.floating-button__wrapper {
    width: 100%;
    max-width: 600px;

    margin: 0 -16px;
    padding: 16px;

    bottom: 0;
    z-index: 100;

    position: fixed;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    pointer-events: none;

    @media (max-width: 1035px) {
        max-width: 576px;
    }

    @media (max-width: 695px) {
        max-width: 100%;
    }
}
</style>

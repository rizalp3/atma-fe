<template>
    <div class="action-test-card">
        <!-- Title and Detail -->
        <div class="accordion accordion-flush" id="test-description">
            <div class="accordion-item">
                <!-- Accordion Trigger -->
                <div class="accordion-header">
                    <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#test-explanation"
                    >
                        <atma-text size="16" weight="500">
                            SRQ-20 Test
                        </atma-text>
                    </button>
                </div>

                <!-- Accordion Content -->
                <div
                    id="test-explanation"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#test-description"
                >
                    <div class="accordion-body">
                        <test-description />
                    </div>
                </div>
            </div>
        </div>

        <!--  -->
        <atma-button
            class="action-test-card__button"
            variant="primary"
            icon="assignment"
            radius="12"
        >
            Take A Test
        </atma-button>
    </div>
</template>

<script>
import TestDescription from './TestDescription.vue';

export default {
    name: 'ActionTestCard',

    components: {
        TestDescription
    }
};
</script>

<style lang="scss" scoped>
.action-test-card {
    padding: 20px;
    border-radius: 12px;
    background: var(--system-color-surface);

    .accordion {
        $accordion-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23938F9C' stroke-linecap='round' stroke-linejoin='round'><path d='M2 5L8 11L14 5'/></svg>");

        --bs-accordion-bg: transparent;
        --bs-accordion-color: var(--system-color-on-surface);
        --bs-accordion-active-bg: transparent;
        --bs-accordion-active-color: var(--system-color-on-surface);

        --bs-accordion-btn-color: var(--system-color-on-surface);
        --bs-accordion-btn-padding-x: 0;
        --bs-accordion-btn-padding-y: 4px;
        --bs-accordion-btn-icon: #{$accordion-icon};
        --bs-accordion-btn-active-icon: #{$accordion-icon};

        margin-top: -4px;

        &-button {
            &:not(.collapsed),
            &:focus {
                box-shadow: unset;
            }
        }

        &-body {
            margin-top: 16px;
            padding: 0;
        }
    }

    &__button {
        width: 100%;
        margin-top: 12px;
    }
}
</style>

<template>
    <div class="accordion-card">
        <!-- Title and Detail -->
        <div class="accordion accordion-flush" :id="`${name}-accordion`">
            <div class="accordion-item">
                <!-- Accordion Trigger -->
                <div class="accordion-header">
                    <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        :data-bs-target="`#${name}-content`"
                    >
                        <atma-text size="16" weight="500">
                            {{ title }}
                        </atma-text>
                    </button>
                </div>

                <!-- Accordion Content -->
                <div
                    class="accordion-collapse collapse show"
                    :data-bs-parent="`#${name}-accordion`"
                    :id="`${name}-content`"
                >
                    <div class="accordion-body">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    name: 'AccordionCard',

    props: {
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            default: ''
        },
        padding: {
            type: String,
            default: '20px'
        },
        radius: {
            type: String,
            default: '12px'
        }
    }
};
</script>

<style lang="scss" scoped>
.accordion-card {
    padding: v-bind(padding);
    border-radius: v-bind(radius);
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
}
</style>

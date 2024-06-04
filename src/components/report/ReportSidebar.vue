<template>
    <div class="report-sidebar">
        <report-action />

        <div class="accordion accordion-flush" id="test-description">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#test-explanation"
                    >
                        <atma-text size="18" weight="500">
                            About SRQ-20 Test
                        </atma-text>
                    </button>
                </h2>

                <div
                    id="test-explanation"
                    class="accordion-collapse collapse"
                    data-bs-parent="#test-description"
                >
                    <div class="accordion-body">
                        <test-description />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ReportAction from './ReportAction.vue';
import TestDescription from './TestDescription.vue';

export default {
    name: 'ReportSidebar',

    components: {
        ReportAction,
        TestDescription
    }
};
</script>

<style lang="scss" scoped>
.report-sidebar {
    .accordion {
        &-button {
            color: #252525;
            padding: 24px 0 16px;

            &:not(.collapsed),
            &:focus {
                color: #252525;
                background: #fff;
                box-shadow: unset;
            }
        }

        &-body {
            padding: 0;
        }
    }
}
</style>

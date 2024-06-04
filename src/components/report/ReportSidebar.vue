<template>
    <div class="report-sidebar">
        <button class="report-sidebar__action mb-3">
            <img
                class="report-sidebar__action-icon"
                alt="Report Icon"
                :src="ReportIcon"
            />

            <div>
                <div class="report-sidebar__action-title">Take Test</div>
                <div class="report-sidebar__action-subtitle">
                    Examine your stress level
                </div>
            </div>
        </button>

        <button class="report-sidebar__action">
            <img
                class="report-sidebar__action-icon"
                alt="Report Icon"
                :src="MoodIcon"
            />

            <div>
                <div class="report-sidebar__action-title">Report Mood</div>
                <div class="report-sidebar__action-subtitle">
                    Tell us what you feel
                </div>
            </div>
        </button>

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
                        <div class="d-flex align-items-center gap-2 mb-3">
                            <div class="report-sidebar__test-highlight">
                                <vue-feather
                                    type="help-circle"
                                    stroke-width="1.5"
                                    size="28"
                                />
                                <atma-text size="14" weight="500">
                                    20 Questions
                                </atma-text>
                            </div>

                            <div class="report-sidebar__test-highlight">
                                <vue-feather
                                    type="check-circle"
                                    stroke-width="1.5"
                                    size="28"
                                />
                                <atma-text size="14" weight="500">
                                    Yes/No Option
                                </atma-text>
                            </div>
                        </div>

                        <atma-text class="mb-3" size="14" color="#5C5C5C">
                            Self-Reporting Questionnaire (SRQ-20) is a 20-item
                            screening tool used to assess non-specific
                            psychological distress.
                        </atma-text>

                        <atma-text size="14" color="#5C5C5C">
                            This tool has been shown to be a reliable and valid
                            tool for screening for identifying individuals who
                            may be at risk for more serious mental health
                            problems and for providing them with early
                            intervention and support.
                        </atma-text>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MoodIcon from '@/assets/image/mood-colored.svg';
import ReportIcon from '@/assets/image/report-colored.svg';

export default {
    name: 'ReportSidebar',

    data() {
        return {
            MoodIcon,
            ReportIcon
        };
    }
};
</script>

<style lang="scss" scoped>
.report-sidebar {
    &__action {
        width: 100%;

        display: flex;
        align-items: center;

        padding: 16px;
        gap: 12px;
        border-radius: 8px;

        font-weight: 500;

        cursor: pointer;

        background: #ffffff;
        border: 1px solid #e3e3e3;
        color: #5c5c5c;

        &:hover {
            background: #fbfbfb;
        }

        &-title {
            @include text(16px, 500);
            color: #252525;
        }

        &-subtitle {
            @include text(14px);
            color: #929292;
        }
    }

    &__test-highlight {
        flex: 1;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 12px;
        gap: 4px;

        border-radius: 8px;
        border: 1px solid #e3e3e3;
        color: #929292;
    }

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

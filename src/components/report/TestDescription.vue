<template>
    <div class="test-description">
        <div class="test-description__wrapper">
            <div class="test-description__highlight">
                <vue-feather type="help-circle" stroke-width="1.5" size="28" />
                <atma-text size="14" weight="500">20 Questions</atma-text>
            </div>

            <div class="test-description__highlight">
                <vue-feather type="check-circle" stroke-width="1.5" size="28" />
                <atma-text size="14" weight="500">Yes/No</atma-text>
            </div>
        </div>

        <atma-text size="14" color-scheme="outline">
            Self-Reporting Questionnaire (SRQ-20) is a screening tool used to
            assess non-specific psychological distress.
        </atma-text>

        <atma-text size="14" color-scheme="outline">
            This tool has been shown to be a reliable and valid tool for
            screening for identifying individuals who may be at risk for more
            serious mental health problems and for providing them with early
            intervention and support.
        </atma-text>
    </div>
</template>

<script>
export default {
    name: 'TestDescription'
};
</script>

<style lang="scss" scoped>
.test-description {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &__wrapper {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    &__highlight {
        flex: 1;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 12px;
        gap: 4px;

        border-radius: 8px;
        border: 1px solid var(--system-color-surface-container-high);
        color: var(--system-color-outline);
    }
}
</style>

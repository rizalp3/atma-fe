<template>
    <div class="test-description">
        <div class="d-flex align-items-center gap-2 mb-3">
            <div class="test-description__highlight">
                <vue-feather type="help-circle" stroke-width="1.5" size="28" />
                <atma-text size="14" weight="500">20 Questions</atma-text>
            </div>

            <div class="test-description__highlight">
                <vue-feather type="check-circle" stroke-width="1.5" size="28" />
                <atma-text size="14" weight="500">Yes/No Option</atma-text>
            </div>
        </div>

        <atma-text class="mb-3" size="14" color="#5C5C5C">
            Self-Reporting Questionnaire (SRQ-20) is a 20-item screening tool
            used to assess non-specific psychological distress.
        </atma-text>

        <atma-text size="14" color="#5C5C5C">
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
    &__highlight {
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
}
</style>

<template>
    <div class="test-description">
        <div class="test-description__wrapper">
            <div class="test-description__highlight">
                <vue-feather type="help-circle" stroke-width="1.5" size="28" />
                <atma-text size="14" weight="500">
                    {{ $t('report.test.detail.question') }}
                </atma-text>
            </div>

            <div class="test-description__highlight">
                <vue-feather type="check-circle" stroke-width="1.5" size="28" />
                <atma-text size="14" weight="500">
                    {{ $t('report.test.detail.option') }}
                </atma-text>
            </div>
        </div>

        <atma-text
            v-for="(paragraph, i) in testDescription"
            :key="`description-${i}`"
            color-scheme="outline"
            size="14"
        >
            {{ paragraph }}
        </atma-text>
    </div>
</template>

<script>
export default {
    name: 'TestDescription',

    computed: {
        testDescription() {
            return this.$i18n.locale === 'id'
                ? [
                      'Self-Reporting Questionnaire (SRQ-20) adalah alat skrining yang digunakan untuk menilai tingkat stress psikologis secara umum.',
                      'Alat ini telah terbukti sebagai alat skrining yang andal dan valid untuk mengidentifikasi individu yang mungkin berisiko mengalami masalah kesehatan mental yang lebih serius dan untuk memberikan intervensi dan dukungan awal kepada mereka.'
                  ]
                : [
                      'Self-Reporting Questionnaire (SRQ-20) is a screening tool used to assess non-specific psychological distress.',
                      'This tool has been shown to be a reliable and valid tool for screening for identifying individuals who may be at risk for more serious mental health problems and for providing them with early intervention and support.'
                  ];
        }
    }
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

        padding: 12px 4px;
        gap: 4px;

        border-radius: 8px;
        border: 1px solid var(--system-color-surface-container-high);
        color: var(--system-color-outline);
    }
}
</style>

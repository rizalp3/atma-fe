<template>
    <atma-modal
        v-model="value"
        v-bind="composeModalAttrs"
        @primary-click="handleFinish"
    >
        <div :class="composeModalClass">
            <atma-icon
                :name="composeLevelIcon"
                class="test-result-modal__icon"
                size="48"
            />

            <div class="test-result-modal__title">{{ result.name }}</div>

            <div class="test-result-modal__subtitle">
                {{ $t('test.result.level', { level: result.level }) }}
            </div>

            <div class="test-result-modal__description">
                {{ $t('test.result.description.before') }}
                <span>{{ result.name }}</span>
                {{ $t('test.result.description.after') }}
            </div>

            <div class="test-result-modal__disclaimer">
                <atma-icon name="info" />

                <div>
                    {{ $t('test.result.disclaimer') }}
                </div>
            </div>
        </div>
    </atma-modal>
</template>

<script>
export default {
    name: 'TestResultModal',

    props: {
        modelValue: {
            type: Boolean,
            default: false
        },

        result: {
            type: Object,
            default: () => ({})
        }
    },

    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        },

        composeModalAttrs() {
            return {
                closable: false,
                title: this.$t('test.result.title'),
                primaryButton: { title: this.$t('test.result.action') }
            };
        },

        composeModalClass() {
            return [
                'test-result-modal',
                `test-result-modal--level-${this.result.level}`
            ];
        },

        composeLevelIcon() {
            const icon = {
                1: 'sentiment-very-satisfied',
                2: 'sentiment-satisfied',
                3: 'sentiment-neutral',
                4: 'sentiment-dissatisfied',
                5: 'sentiment-very-dissatisfied'
            };

            return icon[this.result.level];
        }
    },

    methods: {
        handleFinish() {
            this.redirect('/report');
        }
    }
};
</script>

<style lang="scss" scoped>
.test-result-modal {
    display: flex;
    flex-direction: column;

    &__icon {
        align-self: center;
        color: var(--level-color, var(--system-color-on-surface));
    }

    &__title {
        @include text(20px, 600);
        margin-top: 8px;
        align-self: center;
        color: var(--system-color-on-surface);
    }

    &__subtitle {
        @include text(14px, 500);
        margin-bottom: 24px;
        align-self: center;
        color: var(--system-color-outline);
    }

    &__description {
        @include text(16px, 400);
        margin-bottom: 24px;
        color: var(--system-color-outline);

        span {
            text-transform: lowercase;
            color: var(--system-color-on-surface);
        }
    }

    &__disclaimer {
        padding: 12px 16px;

        display: flex;
        align-items: center;
        gap: 12px;

        border-radius: 8px;
        border: 1px solid var(--system-color-outline-variant);

        @include text(14px, 400);

        background: var(--system-color-surface-container-low);
        color: var(--system-color-outline);
    }

    // Start of Level Variants
    $level-variant: (
        1: #0cb852,
        2: #8ac73c,
        3: #ffc300,
        4: #ff7927,
        5: #ff2442
    );

    @each $level, $color in $level-variant {
        &--level-#{$level} {
            --level-color: #{$color};
        }
    }
    // End of Level Variants
}
</style>

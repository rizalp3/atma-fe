<template>
    <atma-modal
        v-model="value"
        :title="$t('community.quiz.add.title')"
        :primary-button="submitButton"
        @primary-click="$emit('submit', question)"
    >
        <div class="question-modal">
            <textarea
                v-model="question"
                class="form-control"
                type="email"
                maxlength="250"
                rows="7"
                :placeholder="$t('community.quiz.add.placeholder')"
            />

            <div class="question-modal__counter">{{ counter }}</div>
        </div>
    </atma-modal>
</template>

<script>
export default {
    name: 'QuestionModal',

    props: ['modelValue', 'loading'],

    data() {
        return {
            question: ''
        };
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

        characterLength() {
            return this.question.length;
        },

        submitButton() {
            return {
                title: this.$t('community.quiz.add.action'),
                disabled: this.characterLength <= 0,
                loading: !!this.loading
            };
        },

        counter() {
            return `${this.characterLength}/250`;
        }
    }
};
</script>

<style lang="scss" scoped>
.question-modal {
    .form-control {
        @include text(16px, 400);

        background: var(--system-color-surface);
        color: var(--system-color-on-surface);
        border-color: var(--system-color-surface-container-highest);

        &:focus {
            box-shadow: none;
            border-color: var(--system-color-outline);
        }

        &:hover:not(:focus) {
            border-color: var(--system-color-outline-variant);
        }

        &::placeholder {
            color: var(--system-color-outline);
        }
    }

    &__counter {
        @include text(14px);
        margin-top: 4px;
        color: var(--system-color-outline);
    }
}
</style>
